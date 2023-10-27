import React from 'react';
import { Card, Image } from '@edx/paragon';

const CourseCard = ({ course }) => (
  <Card>
    <Card.Image>
      {course.media && course.media.image && (
        <Image src={course.media.image.raw} alt={course.name} />
      )}
    </Card.Image>
    <Card.Body>
      <Card.Title>{course.name}</Card.Title>
      <Card.Text>Course ID: {course.course_id}</Card.Text>
      <Card.Text>Start Date: {course.start_display}</Card.Text>
      <Card.Text>Organization: {course.org}</Card.Text>
    </Card.Body>
  </Card>
);

export default CourseCard;
