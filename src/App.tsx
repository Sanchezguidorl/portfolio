import './firebase/config.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header';
import '../styles/main.scss';
import Home from './components/pages/Home';
import Footer from './components/layouts/Footer';
import ProjectsAdmin from './components/pages/ProjectsAdmin';
import StudiesAdmin from './components/pages/StudiesAdmin';
import FormEditStudies from './components/layouts/FormEditStudies';
import FormEditProjects from './components/layouts/FormEditProjects';

function App() {

  return (
    <>
<div className='bg-dark'>
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/projects' element={<ProjectsAdmin/>}/>
  <Route path='/studies' element={<StudiesAdmin/>}/>
  <Route path='/form/studies' element={<FormEditStudies/>}/>
  <Route path='/form/projects' element={<FormEditProjects/>}/>
</Routes>
<Footer/>
</BrowserRouter>
</div>
    </>
  )
}

export default App
