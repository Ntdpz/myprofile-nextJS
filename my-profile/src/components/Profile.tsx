// src/components/Profile.tsx
const Profile = ({ profile }: { profile: any }) => {
    return (
      <div>
        <h2>{profile.full_name}</h2>
        <p>{profile.address}</p>
        <p>{profile.phone_number}</p>
        <p>{profile.email}</p>
        <a href={profile.linkedin_profile}>LinkedIn</a>
        <a href={profile.github_profile}>GitHub</a>
      </div>
    );
  };
  
  export default Profile;
  