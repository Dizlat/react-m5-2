import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import AboutPage from './pages/aboutPage/AboutPage';
import NewPage from './pages/newPage.js/NewPage';
import LoginPage from './pages/loginPage/LoginPage';
import ErrorPage from './pages/endPage/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path='about/:id' element={<AboutPage/>}/>
        <Route path='new' element={<NewPage/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
