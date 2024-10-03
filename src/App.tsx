import {Route, Routes} from 'react-router-dom'
import { ProductPage } from './pages/ProductPage';
import { AboutPage } from './pages/AboutPage';

function App() {
  return(
    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}

export default App;
