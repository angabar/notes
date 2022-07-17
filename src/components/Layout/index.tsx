import React from "react";

type layoutPropsType = {
    children: React.ReactNode;
};

const Layout = ({ children }: layoutPropsType) => {
    return (
        <div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Go</li>
                </ul>
            </nav>
            <div>{children}</div>
        </div>
    );
};

export default Layout;
