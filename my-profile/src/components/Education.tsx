// src/components/Education.tsx
const Education = ({ education }: { education: any[] }) => {
    return (
      <div>
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <p>{edu.degree} at {edu.institution} ({edu.duration})</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Education;
  