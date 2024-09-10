import Footer from './Component/Footer'
import Home from './Component/Home'
import NavBar from './Component/NavBar'
import AddTask from './Component/AddTask/AddTask'
import EditUser from './Component/EditUser/EditUser'
import NotFound from './Component/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
   <>
     <BrowserRouter>
     <NavBar/>
     <Routes>
     <Route path="/" element={<Home /> } />
     <Route path="/add-task" element={<AddTask />} />
     <Route path="/edit/:id" element={<EditUser />} />
     <Route path='/*' element={<NotFound />} />
     </Routes>
     <Footer/>
     </BrowserRouter>
   
   </>
  )
}

export default App
