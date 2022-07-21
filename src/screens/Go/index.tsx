import React from "react";
import { useNavigate } from "react-router-dom";

const GoPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <p onClick={() => navigate("/go-main-concepts")}>
                Conceptos básicos
            </p>
            <p onClick={() => navigate("/go-primitive-types")}>
                Tipos primitivos
            </p>
            <p onClick={() => navigate("/go-variables")}>Variables</p>
            <p onClick={() => navigate("/go-constants")}>Constantes</p>
            <p onClick={() => navigate("/go-arrays")}>Arrays</p>
            <p onClick={() => navigate("/go-maps")}>Maps</p>
            <p onClick={() => navigate("/go-structs")}>Structs</p>
            <p onClick={() => navigate("/go-control-flow")}>Estructuras de control</p>
            <p onClick={() => navigate("/go-loops")}>Bucles</p>
        </div>
    );
};

export default GoPage;
