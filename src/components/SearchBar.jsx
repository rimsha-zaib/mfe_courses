import React, { useState } from 'react';
import fetchCoursesApi from './courses/data/fetchCourses';

const SearchBar = () => {
  const courses = fetchCoursesApi();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle the search logic when the "Search" button is clicked
  const handleSearchClick = () => {
    const filteredCourses = courses.filter((course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredCourses);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search courses by name"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearchClick}>Search</button>

      {/* Render the search results here */}
      {searchResults.map((course) => (
         <Card key={course.name}>
         <Card.ImageCap
           src={course.media.image.raw}
           srcAlt="Card image"
           logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/EdX_newer_logo.svg/2560px-EdX_newer_logo.svg.png"
           fallbackLogoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/EdX_newer_logo.svg/2560px-EdX_newer_logo.svg.png"
           logoAlt="Card logo"
         />
         <Card.Header title={course.name} subtitle={course.number} />
         <Card.Footer>
         <Button as="a" href={`http://local.overhang.io:8000/courses/${course.course_id}/about`}>View Course</Button>
         </Card.Footer>
     </Card>
      ))}
    </div>
  );
};

export default SearchBar;
