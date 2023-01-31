// import React, { useState, useEffect } from 'react';
// import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
// import { Link, useHistory, useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import decode from 'jwt-decode';
// import './nav.css';
// import memoriesLogo from '../../images/memoriesLogo.png';
// import memoriesText from '../../images/memoriesText.png';
// import memoriesLogo9 from '../../images/memoriesLogo9.png';



// import * as actionType from '../../constants/actionTypes';
// import useStyles from './styles';

// const Navbar = () => {
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const history = useHistory();
//   const classes = useStyles();

//   const logout = () => {
//     dispatch({ type: actionType.LOGOUT });

//     history.push('/auth');

//     setUser(null);
//   };

//   useEffect(() => {
//     const token = user?.token;   

//     if (token) {
//       const decodedToken = decode(token);

//       if (decodedToken.exp * 1000 < new Date().getTime()) logout();
//     }

//     setUser(JSON.parse(localStorage.getItem('profile')));
//   }, [location]);

//   return (
//     <AppBar className={classes.appBar} position="static" color="inherit">
//       <Link to="/" className={classes.brandContainer}>
//       <img component={Link} to="/" src={memoriesText} alt="icon" height="45px" />
//         <img className={classes.image} src={memoriesLogo} alt="icon" height="40px" />
//         <img className={classes.image} src={memoriesLogo} alt="icon" height="40px" />
//         <img className={classes.image} src={memoriesLogo} alt="icon" height="40px" />
//         <Link component={Link} to="/profile" className={classes.brandContainer}>
//         <Button id='admin' component={Link} to="/profile" variant="contained" color="primary">ADMIN</Button>
//       </Link>
//       </Link>

    

     
//       <Toolbar className={classes.toolbar}>
//         {user?.result ? (
//           <div className={classes.profile}>
//             <Avatar id='arab3'  className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
//             <Typography style={{ textDecoration: 'none', color: '#673ab7', paddingLeft:'20px' }}  id='arab2' className={classes.userName} variant="h6">{user?.result.name}</Typography>
            
//             <Button  id='arab' variant="contained" className={classes.logout} color="secondary" onClick={logout}>خروج</Button>
//             {/* <Button id='liste' component={Link} to="/liste" variant="contained" className={classes.logout} color="primary">Liste</Button> */}
//             {user?.result.name === "afeef 999" && 
//   <Button  component={Link} to="/liste" variant="contained" className={classes.logout} color="primary" style={{display: "block"}}  id='arab1'>المستخدمين</Button>
// }
//           </div>
          
//         ) : (
          
//           <Button  id='arab1' component={Link} to="/auth" variant="contained" color="primary" >تسجـيل الدخول</Button>
        
          
//         ) }



        
       
//           {/* <Button id='admin' component={Link} to="/category" variant="contained" color="primary">ADMIN</Button> */}
          
//       </Toolbar>
//     </AppBar>
    
//   );
// };

// export default Navbar;
