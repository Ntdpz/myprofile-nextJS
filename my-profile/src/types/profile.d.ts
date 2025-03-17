// src/types/profile.d.ts
export interface PersonalInformation {
    full_name: string;
    address: string;
    phone_number: string;
    email: string;
    linkedin_profile: string;
    github_profile: string;
  }
  
  export interface Education {
    degree: string;
    institution: string;
    duration: string;
    major: string;
    gpa: string;
  }
  
  export interface WorkExperience {
    company_name: string;
    position: string;
    duration: string;
    responsibilities: string;
    achievements: string;
  }
  
  export interface Profile {
    personal_information: PersonalInformation;
    education: Education[];
    work_experience: WorkExperience[];
    skills: any;
    projects: any;
    languages: any;
  }
  