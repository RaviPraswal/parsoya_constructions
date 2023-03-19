import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import ListUserComponents from './ListUserComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeSection from './component/HomeSection';
import { Topbar } from './component/Topbar';
import { Footer } from './component/Footer';
import Services from './component/Services';
import We from './component/We';
import Portfolio from './component/Portfolio';
import Career from './component/Career';
import { Contact } from './component/Contact';

import Test from './Test';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Topbar></Topbar>
        <Routes>
          <Route path='/' element={<HomeSection></HomeSection>}></Route>
          <Route path='/we' element={<We />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/career' element={<Career />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
