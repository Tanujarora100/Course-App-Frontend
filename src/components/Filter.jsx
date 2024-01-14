import React, { useState } from 'react';

const Filter = ({ filterData, courses, setFilteredCourses }) => {
  const handleFilter = (category) => {
    if (category.title === "All") {
      setFilteredCourses(courses);
      return;
    }
    const filteredCourses = courses.filter(course => {
      return course.category === category.title;
    });
    setFilteredCourses(filteredCourses);
  };

  return (
    <div className='flex align-middle justify-evenly'>
      {filterData.map((category) => (
        <button
          className='p-3 m-2 border-2 rounded-md'
          key={category.id}
          onClick={() => handleFilter(category)}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
