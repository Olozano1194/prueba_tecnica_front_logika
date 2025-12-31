import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/auth/LoginPage';
import LayoutAdmin from './components/layout/LayoutAdmin';
import Home from './components/Home';
import ProtectRoute from './routes/ProtectRoute';
import Error404 from "./pages/Error404";

const App = () => {
  

  return (
    <Routes>
      <Route path="/" element={<Navigate to='/login' />} />
      <Route path="login" element={<Login />} />
      <Route element={<ProtectRoute />}>
        <Route path="admin" element={<LayoutAdmin />}>
        <Route index element={<Home />} />
        </Route>
      </Route>       
      <Route path="*" element={<Error404 />} />
    </Routes>        
  )
}

export default App;
