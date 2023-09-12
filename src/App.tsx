import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header';
import '../styles/main.scss';
import Home from './components/pages/Home';
import Footer from './components/layouts/Footer';

function App() {

  return (
    <>
<div className='bg-dark'>
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
</Routes>
<Footer/>
</BrowserRouter>
</div>
    </>
  )
}

export default App
