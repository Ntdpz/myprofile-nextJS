// src/app/page.tsx

'use client';
import { useEffect, useState } from 'react';
import { fetchProfile, Profile } from '../lib/api';

const MyProfile = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProfile = async () => {
      const data = await fetchProfile();
      setProfile(data);
      setLoading(false);
    };

    getProfile();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!profile) {
    return <p>Error fetching profile</p>;
  }

  return (
    <div>
      <h1>{profile.personal_information.full_name}</h1>
      <p>{profile.personal_information.address}</p>
      <p>{profile.personal_information.phone_number}</p>
      <p>{profile.personal_information.email}</p>
      <a href={profile.personal_information.linkedin_profile} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href={profile.personal_information.github_profile} target="_blank" rel="noopener noreferrer">GitHub</a>

      <h2>Education</h2>
      <ul>
        {profile.education.map((edu, index) => (
          <li key={index}>
            {edu.degree} - {edu.institution} ({edu.duration}) - GPA: {edu.gpa}
          </li>
        ))}
      </ul>

      <h2>Work Experience</h2>
      <ul>
        {profile.work_experience.map((work, index) => (
          <li key={index}>
            {work.company_name} - {work.position} ({work.duration})<br />
            Responsibilities: {work.responsibilities}<br />
            Achievements: {work.achievements}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyProfile;
