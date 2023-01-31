import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import './post.css'
import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';


const Post = ({ post, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [likes, setLikes] = useState(post?.likes || []);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedPost = post && post.likes ? post.likes.find(like => like === userId) : false;


  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId)
        ? (
          <><ThumbUpAltIcon  fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined  fontSize="small" />&nbsp;Like</>;
  };

  const openPost = (e) => {
    // dispatch(getPost(post._id, history));

    history.push(`/posts/${post._id}`);
  };

  return (
    <Card id='arab' style={{ direction: 'rtl'}}  className={classes.card} raised elevation={6}>
      <ButtonBase  id='arab'
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      >
        <CardMedia  className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
        <div  className={classes.overlay} >
          <Typography  id='arab' variant="h6">{post.name}</Typography>
          <Typography  variant="body2" >{moment(post.createdAt).fromNow()}</Typography>
        </div>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator || user?.result.name === "afeef 999") && (
          
        <div  className={classes.overlay2} name="edit">
          <Button 
            onClick={(e) => {
              e.stopPropagation();
              setCurrentId(post._id);
              
            }}
            style={{ color: 'white' }}
            size="small"
          >
            <MoreHorizIcon  fontSize="default" />
          </Button>
        </div>
        )}
        <div  className={classes.details}>
          <Typography style={{ textDecoration: 'none', color: '#3f51b5' }} variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography  style={{ textDecoration: 'none', color: '#3f51b5' }}  id='arab' className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
        <CardContent>
          <Typography  id='arab' variant="body2" color="textSecondary" component="p">{post.message.split(' ').splice(0, 20).join(' ')}...</Typography>
        </CardContent>
      </ButtonBase>
      <CardActions   className={classes.cardActions}>
        <Button  id='arab' size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
          <Likes />
         
        </Button>
        
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator || user?.result.name === "afeef 999") && (
          <Button id='arab' size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon  fontSize="small" /> &nbsp; حذف
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;


























// import React, { useState } from 'react';
// import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core/';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import DeleteIcon from '@material-ui/icons/Delete';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
// import { useDispatch } from 'react-redux';
// import moment from 'moment';
// import { useHistory } from 'react-router-dom';
// import './post.css'
// import { likePost, deletePost } from '../../../actions/posts';
// import useStyles from './styles';



// const Post = ({ post, setCurrentId }) => {
//   const user = JSON.parse(localStorage.getItem('profile'));
//   const [likes, setLikes] = useState(post?.likes);
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const classes = useStyles();

//   const userId = user?.result.googleId || user?.result?._id;
//   const hasLikedPost = post && post.likes ? post.likes.find(like => like === userId) : false;

//   const handleLike = async () => {
//     try {
//       const updatedPost = await dispatch(likePost(post._id));
//       setLikes(updatedPost.likes);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const Likes = () => {
//     if (!likes) return null;  // added to handle case where likes is undefined
//     if (likes.length === 0) {  // added to handle case where likes has no length
//       return <>0 likes</>
//     }
//     return likes.find((like) => like === userId)
//       ? (
//         <><ThumbUpAltIcon  fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
//       ) : (
//         <>{likes.length > 2 ? `${likes.length} likes` : `${likes.length} like`}</>
//       );
//   };

//   const handleDelete = async () => {
//     try {
//       await dispatch(deletePost(post._id));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const openPost = (e) => {
//     history.push(`/posts/${post._id}`);
//   };

//   return (
//     <Card id='arab' style={{ direction: 'rtl'}}  className={classes.card} raised elevation={6}>
//       <ButtonBase  id='arab'
//         component="span"
//         name="test"
//         className={classes.cardAction}
//         onClick={openPost}
//       >
       

//         <CardMedia  className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
//         <div  className={classes.overlay} >
//           <Typography  id='arab' variant="h6">{post.name}</Typography>
//           <Typography  variant="body2" >{moment(post.createdAt).fromNow()}</Typography>
//         </div>
//         {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator || user?.result.name === "afeef 999") && (
          
//         <div  className={classes.overlay2} name="edit">
//           <Button 
//             onClick={(e) => {
//               e.stopPropagation();
//               setCurrentId();


//               setCurrentId(post._id);
              
//             }}
//             style={{ color: 'white' }}
//             size="small"
//           >
//             <MoreHorizIcon  fontSize="default" />
//           </Button>
//         </div>
//         )}
//         <div  className={classes.details}>
//           <Typography style={{ textDecoration: 'none', color: '#3f51b5' }} variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
//         </div>
//         <Typography  style={{ textDecoration: 'none', color: '#3f51b5' }}  id='arab' className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
//         <CardContent>
//           <Typography  id='arab' variant="body2" color="textSecondary" component="p">{post.message.split(' ').splice(0, 20).join(' ')}...</Typography>
//         </CardContent>
//       </ButtonBase>
//       <CardActions   className={classes.cardActions}>
//         <Button  id='arab' size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
//           <Likes />
         
//         </Button>
        
//         {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator || user?.result.name === "afeef 999") && (
//           <Button id='arab' size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
//             <DeleteIcon  fontSize="small" /> &nbsp; حذف
//           </Button>
//         )}
//       </CardActions>
//     </Card>
//   );
// };

// export default Post;
