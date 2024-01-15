import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {HomePage} from './pages/HomePage';
import {FavoritesPage} from './pages/FavoritesPage';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import {UsersPage} from './pages/UsersPage';
import {SetupPage} from './pages/SetupPage';
import {ProjectsPage} from './pages/ProjectsPage';
import {LoginPage} from './pages/LoginPage';

function App(): JSX.Element {
  return (
      <>
          <Header />
          <Sidebar />
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/favorites' element={<FavoritesPage/>}/>
              <Route path='/users' element={<UsersPage/>}/>
              <Route path='/projects' element={<ProjectsPage/>}/>
              <Route path='/setup' element={<SetupPage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
          </Routes>
       </>
  );
}

export default App;
