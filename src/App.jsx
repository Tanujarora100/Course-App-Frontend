// App.js
import React, { useState, useEffect } from 'react';
import { apiUrl, filterData } from './utils/data';
import { toast } from "react-toastify";
import CourseHero from './components/CourseHero';
import Filter from './components/Filter';
const App = () => {
  const [courses, setCourses] = useState([]);


  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data.data);
      setCourses(data.data);
    }
    catch (err) {
      toast.error("Something went wrong");
    }
  }


  useEffect(() => {
    fetchData()
  }, []);

  console.log("App Rendered")
  return (
    <div className="flex flex-col ">
        <Filter filterData={filterData} courses={courses} filteredCourses={setCourses} />
      <CourseHero courses={courses}></CourseHero>
    
    </div>
  );
};

export default App;
