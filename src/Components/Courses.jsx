import React from "react";
import "./Courses.css";

function Courses() {
    const courses = [
        { title: "Foundation Course", description: "Strengthen your basics for Class 11th & 12th with in-depth conceptual learning and regular assessments." },
        { title: "Target Board Exams", description: "Master your board syllabus with focused preparation, revision classes, and expert guidance." },
        { title: "Dropper Batch for NEET", description: "Specialized batch for NEET droppers focusing on speed, accuracy, and exam-oriented strategy." },
        { title: "Dropper Batch for JEE", description: "Exclusive program for JEE droppers to improve problem-solving and advanced concept mastery." },
        { title: "Target Batch for NDA", description: "Focused preparation for NDA aspirants with academic and personality development support." },
        { title: "Crash Course", description: "Fast-track revision course with intensive practice sessions and short-cut techniques." },
        { title: "Test Series", description: "Regular tests, performance analysis, and personalized feedback to boost confidence and accuracy." },
        { title: "Target Board Exams", description: "Master your board syllabus with focused preparation, revision classes, and expert guidance." },

    ];

    return (
        <section className="course-section" id="courses">
            <h2 className="course-heading">Our Courses</h2>

            <div className="course-grid">
                {courses.map((course, index) => (
                    <div className="course-card" key={index}>
                        <div className="course-content">
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <button className="explore-btn">Explore</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Courses;
