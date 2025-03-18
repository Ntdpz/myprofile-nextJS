// src/lib/api.ts
export interface Profile {
    personal_information: {
      full_name: string;
      address: string;
      phone_number: string;
      email: string;
      linkedin_profile: string;
      github_profile: string;
    };
    education: Array<{
      degree: string;
      institution: string;
      duration: string;
      major: string;
      gpa: string;
    }>;
    work_experience: Array<{
      company_name: string;
      position: string;
      duration: string;
      responsibilities: string;
      achievements: string;
    }>;
    skills: {
      technical_skills: string[];
      communication_skills: string[];
      teamwork_skills: string[];
      collaboration_tools: string[];
    };
    projects: Array<{
      description: string;
      project_name: string;
      technologies_used: string;
    }>;
    languages: Array<{
      language: string;
      proficiency: string;
    }>;
  }
  
  export const fetchProfile = async (): Promise<Profile | null> => {
    try {
      const response = await fetch('http://localhost:8080/getMe');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data: Profile = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;  // Return null or you can return a default object for error handling
    }
  };
  