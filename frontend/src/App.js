import React from 'react';
import GlobalStyle from 'styles/GlobalStyle';
import TeacherNav from 'components/Navbar/TeacherNav';
import { Routes, Route, Link, Router, BrowserRouter } from 'react-router-dom';
import Coloring from 'pages/art/Coloring';
import PresentationPage from 'pages/presentation/PresentationPage';
import ClassPage from 'pages/class/ClassPage';
import HeritageList from 'pages/heritage/HeritageList';
import WorkBookList from 'pages/quiz/WorkBookList';
import MainPage from 'pages/main/MainPage';
import DrawingPage from 'pages/art/Drawing';
import HeritageDetailPage from 'pages/heritage/HeritageDetailPage';
import Heritage3D from 'pages/heritage/Heritage3D';
import { RecoilRoot } from 'recoil';
import RoomPage from 'pages/presentation/RoomPage';
import LoginPage from 'pages/user/LoginPage';
import SignUpPage from 'pages/user/SignUpPage';
import FindPasswordPage from 'pages/user/FindPasswordPage';

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <div>
          <TeacherNav />
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/pwfind' element={<FindPasswordPage />} />
            <Route path='/main' element={<MainPage />} />
            <Route path='/class' element={<ClassPage />} />
            <Route path='/heritage' element={<HeritageList />} />
            <Route path='/heritage/:id' element={<HeritageDetailPage />} />
            <Route path='/heritage/:id/3d' element={<Heritage3D />} />
            <Route path='/quiz/workbooklist' element={<WorkBookList />} />
            <Route path='/presentation' element={<PresentationPage />} />
            <Route path='/room' element={<RoomPage />} />
            <Route path='/art' element={<Coloring />} />
            <Route path='/drawing' element={<DrawingPage />} />
          </Routes>
        </div>
      </RecoilRoot>
    </>
  );
}

export default App;
