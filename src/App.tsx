import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {HomePage} from './pages/HomePage';
import {FavoritesPage} from './pages/FavoritesPage';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import {UsersPage} from './pages/UsersPage';
import {store} from './store';
import {Provider} from 'react-redux';


function App(): JSX.Element {
  return (
      <>
          <Header />
          <Sidebar />
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/favorites' element={<FavoritesPage/>}/>
              <Route path='/users' element={<UsersPage/>}/>
          </Routes>
       </>
  );
}

export default App;
