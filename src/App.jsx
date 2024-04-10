import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Checkout from './Pages/Checkout'
import DetailsProduct from './Pages/DetailsProduct'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Checkout/>}/>
          <Route path='/details/:id' element={<DetailsProduct/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
