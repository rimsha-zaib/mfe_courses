import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import React from 'react';
import Alert from '@mui/material/Alert';
import { useEffect } from 'react';


const CourseCard = (props) =>  {
  const dispatch = useDispatch();
  const showAlert = useSelector((state) => state.course.showAlert);
  const showDeleteAlert = useSelector((state) => state.teacher.showAlert);
  console.log("deleteslert",showDeleteAlert)
  const userId = localStorage.getItem('userId');
  const courseId = { course_id: props.id};

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        dispatch(hideDeleteAlert())
        dispatch(hideAlert())
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [showAlert,showDeleteAlert]);

const enrollHandler = () => {
  dispatch(enrollCourse(courseId,userId)); 
};
const unenrollHandler = () => {
  dispatch(unenrollCourse(courseId,userId));
};
const deleteHandler = () => {
  const course_id= props.id
  console.log("course id = ",course_id)
  dispatch(deleteCourse(userId,courseId))
};
  return (
    <div>
    {showAlert && (
      <Alert variant="filled" severity="success" 
      sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' ,width: '100%',}}>
        {showAlert}
      </Alert>
    )}
    {showDeleteAlert && (
      <Alert variant="filled" severity="success" 
      sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' ,width: '100%',}}>
        {showDeleteAlert}
      </Alert>
    )}
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.course_img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <b>Duration:</b>{props.duration}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           <b>Teacher:</b> {props.teacher_name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {props.button === 'enroll' ? (
          <Button size="small" color="primary" onClick={enrollHandler}>
            Enroll
          </Button>
        ) : props.button === 'unenroll' ? (
          <Button size="small" color="primary" onClick={unenrollHandler}>
            UNEnroll
          </Button>
        ) : props.button === 'delete' ? (
          <Button size="small" color="primary" onClick={deleteHandler}>
            Delete
          </Button>
        ) : null}
      </CardActions>
    </Card>
  </div>
  );
}

export default CourseCard;