from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import engine, Base, SessionLocal
import models
from schemas import OnboardingCreate


# =========================================
# CREATE DATABASE TABLES
# =========================================

Base.metadata.create_all(bind=engine)


# =========================================
# CREATE FASTAPI APPLICATION
# =========================================

app = FastAPI()


# =========================================
# CORS CONFIGURATION
# =========================================

app.add_middleware(
    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)


# =========================================
# DATABASE SESSION
# =========================================

def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


# =========================================
# HOME / TEST API
# =========================================

@app.get("/")
def home():

    return {
        "message": "Tamasha Onboarding Backend is running!"
    }


# =========================================
# CREATE ONBOARDING SUBMISSION
# =========================================

@app.post("/onboarding")
def create_onboarding(
    data: OnboardingCreate,
    db: Session = Depends(get_db)
):

    # Create a new onboarding record
    onboarding = models.Onboarding(

        name=data.name,

        email=data.email,

        portfolio=data.portfolio,

        track=data.track,

        experience=data.experience,

        tech_stack=", ".join(data.techStack)

    )


    # Add the record to the database
    db.add(onboarding)


    # Save the record permanently
    db.commit()


    # Get the generated ID
    db.refresh(onboarding)


    return {

        "message": "Onboarding submitted successfully!",

        "id": onboarding.id

    }


# =========================================
# GET ALL ONBOARDING SUBMISSIONS
# =========================================

@app.get("/onboarding")
def get_onboarding(
    db: Session = Depends(get_db)
):

    # Get all records from the database
    submissions = db.query(
        models.Onboarding
    ).all()


    # Return all submissions
    return submissions