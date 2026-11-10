import React from "react";

function CourseCard({ course, onSelect }) {
  return (
    <button type="button" className="course-card" onClick={() => onSelect(course)}>
      <span className={`course-art ${course.color}`} aria-hidden="true">{course.symbol}</span>
      <span className="course-title">{course.title}</span>
    </button>
  );
}
export default CourseCard;