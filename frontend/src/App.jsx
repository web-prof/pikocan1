import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Layout from './pages/layout';
import Login from './pages/login';
import Register from './pages/register';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}  >
            <Route index element={<Home />} />

        <Route path='login' element={<Login/>}  />
        <Route path='register' element={<Register/>}  />
</Route>
    </Routes>
    </BrowserRouter>


  )
}

export default App
