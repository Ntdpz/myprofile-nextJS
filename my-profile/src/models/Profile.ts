// models/Profile.ts

export interface Profile {
    personal_information: PersonalInformation;
    education: Education[];
    work_experience: WorkExperience[];
    skills: Skills;
    projects: Project[];
    languages: Language[];
    image_base64: string;
  }
  
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
  
  export interface Skills {
    technical_skills: string[];
    communication_skills: string[];
    teamwork_skills: string[];
    collaboration_tools: string[];
  }
  
  export interface Project {
    project_name: string;
    description: string;
    technologies_used: string;
  }
  
  export interface Language {
    language: string;
    proficiency: string;
  }
  
  export interface ApiResponse {
    count: number;
    data: Profile[];
  }
  