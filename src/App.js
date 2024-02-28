import Home from './Pages/Home';
import Error from './Pages/Error';
import Video from './Pages/Video';
import '../src/Estilos/estilos.scss';
import Menu from './Componentes/Menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Componentes/Footer';
function App() {

  return (
    <BrowserRouter>
       <Menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/video' element={<Video />} />
            <Route path="*" element={<Home />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        <Footer />
    </ BrowserRouter>
  )
}

export default App;
