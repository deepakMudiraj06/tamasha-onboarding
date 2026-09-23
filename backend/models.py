from sqlalchemy import Column, Integer, String
from database import Base


class Onboarding(Base):

    __tablename__ = "onboarding"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String, nullable=False)

    email = Column(String, nullable=False)

    portfolio = Column(String, nullable=True)

    track = Column(String, nullable=False)

    experience = Column(String, nullable=False)

    tech_stack = Column(String, nullable=True)