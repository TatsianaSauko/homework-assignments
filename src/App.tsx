import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { RootLayout } from "./layouts/RootLayout";
import { AuthForm } from "./components/AuthForm";
import { useSelector } from "react-redux";
import { RootState } from "./redux/configure-store";

import "./App.css";

export default function App() {
    const email = useSelector((state: RootState) => state.auth.email);

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
