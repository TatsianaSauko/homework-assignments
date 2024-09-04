import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

export const RootLayout: React.FC = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};
