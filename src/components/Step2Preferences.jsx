function Step2Preferences({
  formData,
  setFormData,
  errors,
  onNext,
  onPrevious
}) {

  return (

    <div className="form-container">

      <h2>Preferences</h2>

      {/* PRIMARY TRACK */}

      <label>
        Primary Track
      </label>

      <select
        value={formData.track}

        onChange={(e) =>
          setFormData({

            ...formData,

            track: e.target.value,

            // Clear old technology selections
            techStack: []

          })
        }
      >
        <option value="">
          Select Track
        </option>

        <option value="Frontend">
          Frontend
        </option>

        <option value="Backend">
          Backend
        </option>

        <option value="Fullstack">
          Fullstack
        </option>

        <option value="UI/UX Design">
          UI/UX Design
        </option>

      </select>

      {errors.track && (

        <p className="error">
          {errors.track}
        </p>

      )}

      {/* EXPERIENCE */}

      <label>
        Experience Level
      </label>

      <select
        value={formData.experience}

        onChange={(e) =>
          setFormData({

            ...formData,

            experience: e.target.value

          })
        }
      >
        <option value="">
          Select Experience
        </option>

        <option value="Junior">
          Junior
        </option>

        <option value="Mid">
          Mid
        </option>

        <option value="Senior">
          Senior
        </option>

      </select>

      {errors.experience && (

        <p className="error">
          {errors.experience}
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

export default Step2Preferences;