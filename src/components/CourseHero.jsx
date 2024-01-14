// CourseHero.js
import React from 'react';
import Card from './Card';

const CourseHero = React.memo(({ courses }) => {
  return (
    <div className="courses-list">
      {Object.keys(courses).map(courseCategory => (
        <div key={courseCategory}>
          <div className="category-courses flex">
            {courses[courseCategory].map(course => (
              <Card key={course.id} {...course} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
});

export default CourseHero;
