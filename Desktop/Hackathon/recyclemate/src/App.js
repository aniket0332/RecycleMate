import HomePage from './Pages/HomePage';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>           
     <div>
         <Routes>          
           <Route exact path='/' element={<HomePage />} />
         </Routes>
        </div>  
     </BrowserRouter>
  )
}

export default App

