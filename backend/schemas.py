from pydantic import BaseModel
from typing import List


class OnboardingCreate(BaseModel):
    name: str
    email: str
    portfolio: str
    track: str
    experience: str
    techStack: List[str]