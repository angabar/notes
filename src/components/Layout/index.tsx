import React from "react";
import { useNavigate } from "react-router-dom";

type layoutPropsType = {
    children: React.ReactNode;
};

const Layout = ({ children }: layoutPropsType) => {
    const navigate = useNavigate();

    return (
        <div>
            <nav>
                <ul>
                    <li onClick={() => navigate("/")}>Home</li>
                    <li onClick={() => navigate("/go")}>Go</li>
                </ul>
            </nav>
            <div>{children}</div>
        </div>
    );
};

export default Layout;
