import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLaboratory from "../components/pages/laboratory/laboratory.component";
import AppExternalApi from "../components/pages/external-api/external-api.component";
function _Routes() {
    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<AppLaboratory />} />
                <Route exact path="/servicio-externo" element={<AppExternalApi />} />
            </Routes>
        </BrowserRouter>

    )
}

export default _Routes;