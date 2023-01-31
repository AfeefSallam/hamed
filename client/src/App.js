// import React from 'react';
// import { Container } from '@material-ui/core';
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import Header from './header/Header';
// import PostDetails from './components/PostDetails/PostDetails';
// import Navbar from './components/Navbar/Navbar';
// import Home from './components/Home/Home';
// import Auth from './components/Auth/Auth';
// import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
// import { Category } from "./components/profile/Category"
// import ListeUser from './components/profile/ListeUser';
// import FileUpload from './components/profile/FileUpload';
// import 'bootstrap/dist/css/bootstrap.min.css';





// import {useDispatch, useSelector} from 'react-redux'
// import {dispatchLogin, fetchUser, dispatchGetUser} from './actions/authAction'

// import {useEffect} from 'react';
// import axios from 'axios';
// const App = () => {
//   const dispatch = useDispatch()
//   const token = useSelector(state => state.token)
//   const auth = useSelector(state => state.auth)

//   useEffect(() => {
//     const firstLogin = localStorage.getItem('firstLogin')
//     if(firstLogin){
//       const getToken = async () => {
//         const res = await axios.post('/user/refresh_token', null)
//         dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
//       }
//       getToken()
//     }
//   },[auth.isLogged, dispatch])

//   useEffect(() => {
//     if(token){
//       const getUser = () => {
//         dispatch(dispatchLogin())

//         return fetchUser(token).then(res => {
//           dispatch(dispatchGetUser(res))
//         })
//       }
//       getUser()
//     }
//   },[token, dispatch]);
//   const user = JSON.parse(localStorage.getItem('profile'));

//   return (
//     <BrowserRouter>
//       <Container maxWidth="xl">
//         <Navbar />
//         <Header/>
//         <Switch>
//           <Route path="/" exact component={() => <Redirect to="/posts" />} />
//           <Route path="/posts" exact component={Home} />
//           <Route path="/posts/search" exact component={Home} />
//           <Route path="/posts/:id" exact component={PostDetails} />
//           <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
//           <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
//           <Route path="/category" exact component={Category} />
//           <Route path="/liste" exact component={ListeUser} />
//           <Route path="/fileUpload" exact component={FileUpload} />
//         </Switch>
//       </Container>
//     </BrowserRouter>
//   );
// };

// export default App;







import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './header/Header';
import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import { Category } from "./components/profile/Category"
import ListeUser from './components/profile/ListeUser';
import FileUpload from './components/profile/FileUpload';
import 'bootstrap/dist/css/bootstrap.min.css';





import {useDispatch, useSelector} from 'react-redux'
import {dispatchLogin, fetchUser, dispatchGetUser} from './actions/authAction'

import {useEffect} from 'react';
import axios from 'axios';
const App = () => {
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin){
      const getToken = async () => {
        const res = await axios.post('/user/refresh_token', null)
        dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
      }
      getToken()
    }
  },[auth.isLogged, dispatch])

  useEffect(() => {
    if(token){
      const getUser = () => {
        dispatch(dispatchLogin())

        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }
  },[token, dispatch]);
  const user = JSON.parse(localStorage.getItem('profile'));

  const PostsPage = () => (
    <>
      <Header />
      <Home />
    </>
  );
  
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Route path="/posts" exact component={PostsPage} />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          {/* <Route path="/posts" exact component={Home} /> */}
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
          <Route path="/category" exact component={Category} />
          <Route path="/liste" exact component={ListeUser} />
          <Route path="/fileUpload" exact component={FileUpload} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;









