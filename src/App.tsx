import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {HomePage} from './pages/HomePage';
import {FavoritesPage} from './pages/FavoritesPage';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import {UsersPage} from './pages/UsersPage';
import {SetupPage} from './pages/SetupPage';
import {ProjectsPage} from './pages/ProjectsPage';
import {LoginPage} from './pages/LoginPage';
import {useAppSelector} from './hooks/redux';
import {RegisterPage} from './pages/RegisterPage';
import {AboutPage} from './pages/AboutPage';
import {pages} from './pages';

function App(): JSX.Element {
    // const ProtectedRoute = ({ component, ...rest })=>{
    //     const { isAuth } = useAppSelector((state) => state.auth);
    //     return <Component {...rest} />
    // }
    const {isAuth} = useAppSelector((state) => state.auth);
  return (
      <>
          {/*<ThemeProvider theme={theme}>*/}
          <Header />
          <Sidebar />
          <Routes>
              <Route key={pages.login} path={pages.login} element={<LoginPage/>}/>
              <Route key={pages.register} path={pages.register} element={<RegisterPage/>}/>
              <Route key={pages.home} path={pages.home} element={<HomePage/>}/>
              <Route key={pages.projects} path={pages.projects} element={<ProjectsPage/>}/>
              <Route key={pages.about} path={pages.about} element={<AboutPage/>}/>
              {isAuth && <Route key={pages.favorites} path={pages.favorites} element={<FavoritesPage/>}/>}
              {isAuth && <Route key={pages.users} path={pages.users} element={<UsersPage/>}/>}
              {/*{isAuth && <Route key={pages.projects} path={pages.projects} element={<ProjectsPage/>}/>}*/}
              {isAuth && <Route key={pages.setup} path={pages.setup} element={<SetupPage/>}/>}
              {!isAuth && <Route path='*' element={<Navigate to='/login'/>}/>}
          </Routes>
          {/*</ThemeProvider>*/}
       </>
  );
}

export default App;
