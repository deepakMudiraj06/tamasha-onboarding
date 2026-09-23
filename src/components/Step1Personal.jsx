function Step1Personal({
  formData,
  setFormData,
  errors,
  onNext
}) {

  return (

    <div className="form-container">

      <h2>Personal Information</h2>

      {/* NAME */}

      <label>Name</label>

      <input
        type="text"
        value={formData.name}

        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value
          })
        }

        placeholder="Enter your name"
      />

      {errors.name && (

        <p className="error">
          {errors.name}
        </p>

      )}

      {/* EMAIL */}

      <label>Email</label>

      <input
        type="email"
        value={formData.email}

        onChange={(e) =>
          setFormData({
            ...formData,
            email: e.target.value
          })
        }

        placeholder="Enter your email"
      />

      {errors.email && (

        <p className="error">
          {errors.email}
        </p>

      )}

      {/* PORTFOLIO */}

      <label>
        Portfolio / GitHub URL
      </label>

      <input
        type="text"
        value={formData.portfolio}

        onChange={(e) =>
          setFormData({
            ...formData,
            portfolio: e.target.value
          })
        }

        placeholder="Enter your portfolio or GitHub URL"
      />

      {/* NEXT */}
      <button onClick={onNext}>
        Next
      </button>

    </div>

  );
}

export default Step1Personal;