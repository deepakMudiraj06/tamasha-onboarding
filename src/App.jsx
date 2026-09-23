import { useEffect, useState } from "react";

import "./App.css";

import Step1Personal from "./components/Step1Personal";
import Step2Preferences from "./components/Step2Preferences";
import Step3TechStack from "./components/Step3TechStack";
import Step4Review from "./components/Step4Review";


function App() {

  // =========================================
  // CURRENT STEP
  // =========================================

  const [currentStep, setCurrentStep] = useState(1);


  // =========================================
  // FORM DATA
  // =========================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    track: "",
    experience: "",
    techStack: []
  });


  // =========================================
  // ERROR STATE
  // =========================================

  const [errors, setErrors] = useState({});


  // =========================================
  // DRAFT SAVED STATE
  // =========================================

  const [draftSaved, setDraftSaved] = useState(false);


  // =========================================
  // SUBMITTED STATE
  // =========================================

  const [submitted, setSubmitted] = useState(false);


  // =========================================
  // DRAFT LOADED STATE
  // =========================================

  const [draftLoaded, setDraftLoaded] = useState(false);


  // =========================================
  // TECHNOLOGY OPTIONS
  // =========================================

  const techOptions = {

    Frontend: [
      "React",
      "Vue",
      "TypeScript",
      "CSS Modules"
    ],

    Backend: [
      "Node.js",
      "Python/Django",
      "PostgreSQL",
      "Redis"
    ],

    "UI/UX Design": [
      "Figma",
      "Storybook",
      "Design Systems"
    ]

  };


  // =========================================
  // RESTORE SAVED DRAFT
  // =========================================

  useEffect(() => {

    const savedDraft =
      localStorage.getItem("onboardingDraft");


    if (savedDraft) {

      try {

        const parsedDraft =
          JSON.parse(savedDraft);

        setFormData(parsedDraft);

      }

      catch (error) {

        console.error(
          "Could not restore saved draft:",
          error
        );

      }

    }


    setDraftLoaded(true);

  }, []);


  // =========================================
  // AUTO-SAVE DRAFT
  // =========================================

  useEffect(() => {

    if (!draftLoaded) {
      return;
    }


    const timer = setTimeout(() => {

      localStorage.setItem(
        "onboardingDraft",
        JSON.stringify(formData)
      );


      setDraftSaved(true);


      setTimeout(() => {

        setDraftSaved(false);

      }, 2000);

    }, 500);


    return () => {

      clearTimeout(timer);

    };

  }, [formData, draftLoaded]);


  // =========================================
  // VALIDATE STEP 1
  // =========================================

  function validateStep1() {

    const newErrors = {};


    if (formData.name.trim() === "") {

      newErrors.name =
        "Name is required";

    }


    if (formData.email.trim() === "") {

      newErrors.email =
        "Email is required";

    }

    else {

      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


      if (
        !emailPattern.test(
          formData.email
        )
      ) {

        newErrors.email =
          "Enter a valid email";

      }

    }


    setErrors(newErrors);


    return Object.keys(newErrors).length === 0;

  }


  // =========================================
  // STEP 1 → STEP 2
  // =========================================

  function handleStep1Next() {

    const isValid =
      validateStep1();


    if (!isValid) {
      return;
    }


    setErrors({});

    setCurrentStep(2);

  }


  // =========================================
  // VALIDATE STEP 2
  // =========================================

  function validateStep2() {

    const newErrors = {};


    if (formData.track === "") {

      newErrors.track =
        "Primary track is required";

    }


    if (formData.experience === "") {

      newErrors.experience =
        "Experience level is required";

    }


    setErrors(newErrors);


    return Object.keys(newErrors).length === 0;

  }


  // =========================================
  // STEP 2 → STEP 3
  // =========================================

  function handleStep2Next() {

    const isValid =
      validateStep2();


    if (!isValid) {
      return;
    }


    setErrors({});

    setCurrentStep(3);

  }


  // =========================================
  // SUBMIT TO FASTAPI BACKEND
  // =========================================

  async function handleSubmit() {

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/onboarding",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)
        }
      );


      const data =
        await response.json();


      if (response.ok) {

        console.log(
          "Backend response:",
          data
        );

        setSubmitted(true);

      }

      else {

        console.error(
          "Backend error:",
          data
        );

        alert(
          "Failed to submit onboarding form."
        );

      }

    }

    catch (error) {

      console.error(
        "Connection error:",
        error
      );

      alert(
        "Could not connect to the backend."
      );

    }

  }


  // =========================================
  // RENDER
  // =========================================

  return (

    <div className="app">


      {/* =====================================
          TITLE
      ===================================== */}

      <h1>
        Onboarding Wizard
      </h1>


      {/* =====================================
          DRAFT SAVED
      ===================================== */}

      {draftSaved && (

        <p className="draft-saved">
          ✓ Draft Saved
        </p>

      )}


      {/* =====================================
          STEP INDICATOR
      ===================================== */}

      <div className="steps">

        <span
          className={
            currentStep >= 1
              ? "active"
              : ""
          }
        >
          1. Personal
        </span>


        <span
          className={
            currentStep >= 2
              ? "active"
              : ""
          }
        >
          2. Preferences
        </span>


        <span
          className={
            currentStep >= 3
              ? "active"
              : ""
          }
        >
          3. Tech Stack
        </span>


        <span
          className={
            currentStep >= 4
              ? "active"
              : ""
          }
        >
          4. Review
        </span>

      </div>


      {/* =====================================
          STEP 1
      ===================================== */}

      {currentStep === 1 && (

        <Step1Personal

          formData={formData}

          setFormData={setFormData}

          errors={errors}

          onNext={handleStep1Next}

        />

      )}


      {/* =====================================
          STEP 2
      ===================================== */}

      {currentStep === 2 && (

        <Step2Preferences

          formData={formData}

          setFormData={setFormData}

          errors={errors}

          onNext={handleStep2Next}

          onPrevious={() =>
            setCurrentStep(1)
          }

        />

      )}


      {/* =====================================
          STEP 3
      ===================================== */}

      {currentStep === 3 && (

        <Step3TechStack

          formData={formData}

          setFormData={setFormData}

          techOptions={techOptions}

          onNext={() =>
            setCurrentStep(4)
          }

          onPrevious={() =>
            setCurrentStep(2)
          }

        />

      )}


      {/* =====================================
          STEP 4
      ===================================== */}

      {currentStep === 4 && (

        <Step4Review

          formData={formData}

          onEdit={(step) =>
            setCurrentStep(step)
          }

          onPrevious={() =>
            setCurrentStep(3)
          }

          onSubmit={handleSubmit}

          submitted={submitted}

        />

      )}

    </div>

  );

}


export default App;