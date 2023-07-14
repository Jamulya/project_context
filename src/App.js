import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import './components/Style.css'
import { CartProvider } from './components/context';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Card from './components/Card';
import ContactsPage from './components/ContactsPage';

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
         <NavBar/>
         <Routes>
            <Route path='/homepage' element ={<HomePage/>}/>
            <Route path='/about' element ={<AboutPage/>}/>
            <Route path='/card' element ={<Card/>}/>
            <Route path='/contacts' element ={<ContactsPage/>}/>
            <Route path='/homepage' element ={<HomePage/>}/>
            <Route path='/homepage' element ={<HomePage/>}/>
         </Routes>
        </BrowserRouter>
        
      </CartProvider>

     
    </div>
  );
}

export default App;
