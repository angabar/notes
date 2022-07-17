import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./screens/MainPage";
import GoPage from "./screens/Go";
import GoMainConcepts from "./screens/Go/chapters/MainConcepts";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/go-main-concepts" element={<GoMainConcepts />} />
                <Route path="/go" element={<GoPage />} />
                <Route path="/" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
