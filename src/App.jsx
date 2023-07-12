import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Crops from './pages/Farmer/Crops'
import Profile from './pages/Farmer/Profile'
import FarmRecords from './pages/Farmer/FarmRecords'
import AddProducts from './pages/Farmer/AddProducts'
import FarmHistory from './pages/Farmer/FarmHistory'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import UseFetch from './components/UseFetch'
import './App.css'

function App() {
  // const {data: products, loading, error} = UseFetch("https://dummyjson.com/products")
  const {data: products, loading, error} = UseFetch("https://fakestoreapi.com/products")


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/shop' element={ <Shop products={products} eroor={error} loading={loading} /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/farmerlogin' element={ <Login /> } />
          <Route path='/signup' element={ <Signup /> } />
          <Route path='/profile' element={ <Profile /> } />
          <Route path='/crops' element={ <Crops /> } />
          <Route path='/addproducts' element={ <AddProducts /> } />
          <Route path='/farmrecords' element={ <FarmRecords /> } />
          <Route path='/farmhistory' element={ <FarmHistory /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
