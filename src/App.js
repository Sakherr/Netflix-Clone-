import Home from './Components/Home'
import FavList from './Components/FavList';
import NavBar from './Components/NavBar';
import {Routes,Route} from  'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <NavBar/>
     <Routes>
       <Route path='/' element={<Home />}/>
       
       
       <Route path='/favList' element={<FavList/>}/>
     </Routes>
   </>
  );
}

export default App;
