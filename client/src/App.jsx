import './App.css'
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import Index from './components/Index';
import Login from './components/Login';
import Register from './components/Register';
import AddEventForm from './components/AddEventForm';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/add-event' element={<AddEventForm />} />
        <Route path='*' element={
                    <>
                        <p>
                            <h1>Error 404, aqui no hay nada de ná 😅</h1>
                            <Link to="/"> Volver al inicio</Link>
                        </p>
                    </>
                } />
    </Routes>
    </BrowserRouter>
  )
}

export default App
