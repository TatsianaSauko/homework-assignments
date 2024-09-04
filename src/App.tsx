import './App.css';
import { AuthForm } from './components/AuthForm';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { RootLayout } from './layouts/RootLayout';

export default function App() {
  const email = localStorage.getItem('email');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {email ? (
            <>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="auth" element={<AuthForm />} />
              <Route path="*" element={<Navigate to="/auth" />} />
              <Route index element={<Navigate to="/auth" />} />
            </>
          )}
        </Route>
      </Routes>
    </Router>
  );
}
