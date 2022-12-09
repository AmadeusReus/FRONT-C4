import { Container } from 'react-bootstrap';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { CargoPage } from './CargoPage';
import { ContactoPage } from './ContactoPage';
import { HomePage } from './HomePage';
import {Menu} from './Menu';
import { NotFound } from './NotFound';
import { UsuariosPage } from './UsuariosPage';


function App() {
  return (
    
    <Container className='mt-5'>
    <Menu/>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contacto" element={<ContactoPage/>}/>
        <Route path="/usuarios" element={<UsuariosPage/>}/>
        <Route path="/cargo" element={<CargoPage/>}/>
        <Route path="*" element={<NotFound/>}/>
       
      </Routes>
    </HashRouter>
   </Container>
    
  );
}
export default App;
