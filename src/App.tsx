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


function App(): JSX.Element {
    // const ProtectedRoute = ({ component, ...rest })=>{
    //     const { isAuth } = useAppSelector((state) => state.auth);
    //     return <Component {...rest} />
    // }
    const {isAuth} = useAppSelector((state) => state.auth);
  return (
      <>
          <Header />
          <Sidebar />
          <Routes>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/register' element={<RegisterPage/>}/>
              <Route path='/' element={<HomePage/>}/>
              {isAuth && <Route key="/favorites" path="/favorites" element={<FavoritesPage/>}/>}
              {isAuth && <Route key="/users" path="/users" element={<UsersPage/>}/>}
              {isAuth && <Route key="/projects" path="/projects" element={<ProjectsPage/>}/>}
              {isAuth && <Route key="/setup" path="/setup" element={<SetupPage/>}/>}
              {!isAuth && <Route path='*' element={<Navigate to='/login'/>}/>}
          </Routes>
       </>
  );
}

export default App;
