function Step3TechStack({
  formData,
  setFormData,
  techOptions,
  onNext,
  onPrevious
}) {

  const currentTechOptions =
    techOptions[formData.track] || [];


  function handleTechChange(tech) {

    const isSelected =
      formData.techStack.includes(tech);

    if (isSelected) {

      // Remove technology
      setFormData({

        ...formData,

        techStack:
          formData.techStack.filter(
            (item) => item !== tech
          )

      });

    }

    else {

      // Add technology

      setFormData({

        ...formData,

        techStack: [
          ...formData.techStack,
          tech
        ]

      });

    }

  }

  return (

    <div className="form-container">

      <h2>Tech Stack</h2>


      {/* SELECTED TRACK */}
      
      <p>
        Selected Track:

        <strong>
          {" "}
          {formData.track}
        </strong>

      </p>

      {/* TECHNOLOGY OPTIONS */}

      {currentTechOptions.length > 0 ? (

        <div>

          {currentTechOptions.map((tech) => (

            <label
              key={tech}
              className="checkbox-option"
            >

              <input
                type="checkbox"

                checked={
                  formData.techStack.includes(
                    tech
                  )
                }

                onChange={() =>
                  handleTechChange(tech)
                }
              />

              {tech}

            </label>

          ))}

        </div>

      ) : (

        <p>
          No technology options are
          specified for this track.
        </p>

      )}

      {/* BUTTONS */}

      <div className="button-container">

        <button onClick={onPrevious}>
          Previous
        </button>

        <button onClick={onNext}>
          Next
        </button>

      </div>

    </div>

  );
}

export default Step3TechStack;