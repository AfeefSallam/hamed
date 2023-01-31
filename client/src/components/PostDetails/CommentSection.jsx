import React, { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@material-ui/core/';
import { useDispatch } from 'react-redux';

import { commentPost } from '../../actions/posts';
import useStyles from './styles';

const CommentSection = ({ post }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const [comments, setComments] = useState(post?.comments);
  const classes = useStyles();
  const commentsRef = useRef();

  const handleComment = async () => {
    const newComments = await dispatch(commentPost(`${user?.result?.name}: ${comment}`, post._id));

    setComment('');
    setComments(newComments);

    commentsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div >
      <div  style={{ display: 'block'}} className={classes.commentsOuterContainer} >
        <div className={classes.commentsInnerContainer } >
          <Typography className={classes.Typography}  gutterBottom variant="h6" style={{ textDecoration: 'none', color: 'orange' }}>  التعليقات السابقة :</Typography>
          {comments?.map((c, i) => (
            <Typography   key={i} gutterBottom variant="subtitle1">
              
              <strong className={classes.Typography} style={{ textDecoration: 'none', color: '#3f51b5' }} >{c.split(': ')[0]}</strong>
             <small className={classes.Typography}>{c.split(':')[1]}</small>
            </Typography>
          ))}
          <div ref={commentsRef}  />
        </div>

        <div id='afeef' style={{ width: '70%',    position: 'relative', top: '15px' }}>
          <Typography className={classes.Typography}  gutterBottom variant="h6" style={{ direction: 'rtl',textDecoration: 'none',color: '#3f51b5'  }}  > كتابة تعليق </Typography >
          <TextField  fullWidth rows={4} variant="outlined" label="اكتب تعليق" multiline value={comment} onChange={(e) => setComment(e.target.value)}  style={{ direction: 'rtl',width: '300'}}/>
          <br />
          <Button className={classes.Typography}  style={{ marginTop: '10px' }} fullWidth disabled={!comment.length} color="primary" variant="contained" onClick={handleComment} >
          ارسال التعليق
          </Button>
        </div>

      </div>
    </div>
  );
};

export default CommentSection;
