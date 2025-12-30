import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/LoginPage';
import Error404 from "./pages/Error404";

const App = () => {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to='/login' />} />
        <Route path="login" element={<Login />} /> 
        <Route path="*" element={<Error404 />} />
      </Routes>
    
      
    </Router>
  )
}

export default App;
