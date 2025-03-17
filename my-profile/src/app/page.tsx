'use client';
import { useEffect, useState } from 'react';
import { fetchProfile, Profile } from '../lib/api';

const MyProfile = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProfile = async () => {
      const response = await fetchProfile();
      // เนื่องจากข้อมูลอยู่ใน data[0], จึงต้องดึงออกมา
      setProfile(response.data[0]);
      setLoading(false);
    };

    getProfile();
  }, []);

  if (loading) {
    return <p className="text-center text-xl">Loading...</p>;
  }

  if (!profile) {
    return <p className="text-center text-xl text-red-500">Error fetching profile</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">{profile.personal_information.full_name}</h1>
        <p className="text-lg text-center text-gray-700">{profile.personal_information.address}</p>
        <p className="text-lg text-center text-gray-700">{profile.personal_information.phone_number}</p>
        <p className="text-lg text-center text-gray-700">{profile.personal_information.email}</p>

        <div className="flex justify-center space-x-4 mt-4">
          <a
            href={profile.personal_information.linkedin_profile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            LinkedIn
          </a>
          <a
            href={profile.personal_information.github_profile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            GitHub
          </a>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
          <ul className="list-disc pl-6 space-y-2">
            {profile.education.map((edu, index) => (
              <li key={index} className="text-lg text-gray-700">
                <strong>{edu.degree}</strong> - {edu.institution} ({edu.duration}) - GPA: {edu.gpa}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Work Experience</h2>
          <ul className="list-disc pl-6 space-y-2">
            {profile.work_experience.map((work, index) => (
              <li key={index} className="text-lg text-gray-700">
                <strong>{work.company_name}</strong> - {work.position} ({work.duration})<br />
                <span className="font-semibold">Responsibilities:</span> {work.responsibilities}<br />
                <span className="font-semibold">Achievements:</span> {work.achievements}
              </li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
          <h3 className="text-xl font-semibold text-gray-700">Technical Skills</h3>
          <ul className="list-disc pl-6 space-y-2">
            {profile.skills.technical_skills.map((skill, index) => (
              <li key={index} className="text-lg text-gray-700">{skill}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-4">Communication Skills</h3>
          <ul className="list-disc pl-6 space-y-2">
            {profile.skills.communication_skills.map((skill, index) => (
              <li key={index} className="text-lg text-gray-700">{skill}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-4">Teamwork Skills</h3>
          <ul className="list-disc pl-6 space-y-2">
            {profile.skills.teamwork_skills.map((skill, index) => (
              <li key={index} className="text-lg text-gray-700">{skill}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-4">Collaboration Tools</h3>
          <ul className="list-disc pl-6 space-y-2">
            {profile.skills.collaboration_tools.map((tool, index) => (
              <li key={index} className="text-lg text-gray-700">{tool}</li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
          {profile.projects.map((project, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-xl font-semibold text-gray-700">{project.project_name}</h3>
              <p className="text-lg text-gray-700">{project.description}</p>
              <p className="text-lg text-gray-700">Technologies Used: {project.technologies_used}</p>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Languages</h2>
          <ul className="list-disc pl-6 space-y-2">
            {profile.languages.map((language, index) => (
              <li key={index} className="text-lg text-gray-700">
                {language.language} - Proficiency: {language.proficiency}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
