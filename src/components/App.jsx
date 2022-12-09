import Menu from "./Menu";
import SelectFilmePage from "../pages/SelectFilmePage";
import SelectSessionPage from "../pages/SelectSessionPage";
import SelectSeatsPage from "../pages/SelectSeatsPage";
import SucessPage from "../pages/SucessPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

function App() {
    const [infoSucess, setInfoSucess] = useState(undefined);
    const [rotaHome, setRotaHome] = useState(true);
    return (
        <BrowserRouter>
            <Menu rotaHome={rotaHome} />
            <Routes>
                <Route path='/' element={<SelectFilmePage setRotaHome={setRotaHome} />} />
                <Route
                    path='/sessoes/:idFilme'
                    element={<SelectSessionPage setRotaHome={setRotaHome} />}
                />
                <Route
                    path='/assentos/:idSessao'
                    element={
                        <SelectSeatsPage setInfoSucess={setInfoSucess} setRotaHome={setRotaHome} />
                    }
                />
                <Route
                    path='/sucesso'
                    element={
                        infoSucess != undefined ? (
                            <SucessPage infoSucess={infoSucess} setRotaHome={setRotaHome} />
                        ) : (
                            <Navigate to='/' />
                        )
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
