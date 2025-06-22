interface educationProps {
  Data: {
    year: string;
    course: string;
    degree: string;
  }
};

function Educationcard(props: educationProps) {
  const { year, course, degree } = props.Data;
  return (
      <div className="education-data">
        <h4 className="education-year">{year}</h4>
        <h2 className="education-course">{course}</h2>
        <p className="education-degree">{degree}</p>
      </div>
  )
}

export default Educationcard