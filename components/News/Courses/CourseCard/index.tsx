// CourseCard.tsx

interface CourseCardProps {
    course: {
      _id: string;
      course_name: string;
      // Include other properties from ICourses if needed
    };
  }
  
  const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    return (
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h2 className="text-xl font-bold mb-2">{course.course_name}</h2>
        {/* Include other course details here */}
      </div>
    );
  };
  
  export default CourseCard;
  