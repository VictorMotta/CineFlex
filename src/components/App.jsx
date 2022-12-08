import Menu from "./Menu";
import SelectFilmePage from "../pages/SelectFilmePage";
import SelectSessionPage from "../pages/SelectSessionPage";
import SelectSeatsPage from "../pages/SelectSeatsPage";
import SucessPage from "../pages/SucessPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
    const [infoSucess, setInfoSucess] = useState([]);

    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<SelectFilmePage />} />
                <Route path='/sessoes/:idFilme' element={<SelectSessionPage />} />
                <Route
                    path='/assentos/:idSessao'
                    element={<SelectSeatsPage setInfoSucess={setInfoSucess} />}
                />
                <Route path='/sucesso' element={<SucessPage infoSucess={infoSucess} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
