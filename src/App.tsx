import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./screens/MainPage";
import GoPage from "./screens/Go";
import GoMainConcepts from "./screens/Go/chapters/MainConcepts";
import GoPrimitiveTypes from "./screens/Go/chapters/PrimitiveTypes";
import GoVariables from "./screens/Go/chapters/Variables";
import GoConstants from "./screens/Go/chapters/Constants";
import GoArrays from "./screens/Go/chapters/Arrays";
import GoMaps from "./screens/Go/chapters/Maps";
import GoStructs from "./screens/Go/chapters/Structs";
import GoControlFlow from "./screens/Go/chapters/ControlFlow";
import GoLoops from "./screens/Go/chapters/Loops";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/go-main-concepts" element={<GoMainConcepts />} />
                <Route
                    path="/go-primitive-types"
                    element={<GoPrimitiveTypes />}
                />
                <Route path="/go-variables" element={<GoVariables />} />
                <Route path="/go-constants" element={<GoConstants />} />
                <Route path="/go-arrays" element={<GoArrays />} />
                <Route path="/go-maps" element={<GoMaps />} />
                <Route path="/go-structs" element={<GoStructs />} />
                <Route path="/go-control-flow" element={<GoControlFlow />} />
                <Route path="/go-loops" element={<GoLoops />} />
                <Route path="/go" element={<GoPage />} />
                <Route path="/" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
