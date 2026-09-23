function Step4Review({
  formData,
  onEdit,
  onPrevious,
  onSubmit,
  submitted
}) {

  return (

    <div className="form-container">

      <h2>Review & Submit</h2>


      {/* PERSONAL INFORMATION */}

      <div className="review-section">

        <div className="review-header">

          <h3>
            Personal Information
          </h3>

          <button
            onClick={() => onEdit(1)}
          >
            Edit
          </button>

        </div>

        <p>
          <strong>Name:</strong>{" "}
          {formData.name}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {formData.email}
        </p>

        <p>
          <strong>
            Portfolio / GitHub:
          </strong>{" "}
          {formData.portfolio ||
            "Not provided"}
        </p>

      </div>


      {/* PREFERENCE */}

      <div className="review-section">

        <div className="review-header">

          <h3>
            Preferences
          </h3>

          <button
            onClick={() => onEdit(2)}
          >
            Edit
          </button>

        </div>

        <p>
          <strong>
            Primary Track:
          </strong>{" "}
          {formData.track}
        </p>

        <p>
          <strong>
            Experience Level:
          </strong>{" "}
          {formData.experience}
        </p>

      </div>


      {/* TECH STACK */}

      <div className="review-section">

        <div className="review-header">

          <h3>
            Tech Stack
          </h3>

          <button
            onClick={() => onEdit(3)}
          >
            Edit
          </button>

        </div>

        {formData.techStack.length > 0 ? (

          <ul>

            {formData.techStack.map(
              (tech) => (

                <li key={tech}>
                  {tech}
                </li>

              )
            )}

          </ul>

        ) : (

          <p>
            No technologies selected.
          </p>

        )}

      </div>

      {/*BUTTONS */}

      <div className="button-container">

        <button onClick={onPrevious}>
          Previous
        </button>


        <button onClick={onSubmit}>
          Submit
        </button>

      </div>


      {/* SUCCESS MESSAGE */}

      {submitted && (

        <div className="success-message">

          <h3>
            ✓ Submission Successful
          </h3>

          <p>
            Your onboarding has been
            submitted successfully!
          </p>

        </div>

      )}

    </div>

  );
}

export default Step4Review;