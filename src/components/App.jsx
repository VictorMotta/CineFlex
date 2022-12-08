import Menu from "./Menu";
import SelectFilmePage from "../pages/SelectFilmePage";
import SelectSessionPage from "../pages/SelectSessionPage";
import SelectSeatsPage from "../pages/SelectSeatsPage";
import SucessPage from "../pages/SucessPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<SelectFilmePage />} />
                <Route path='/sessoes/:idFilme' element={<SelectSessionPage />} />
                <Route path='/assentos/:idSessao' element={<SelectSeatsPage />} />
                <Route path='/sucesso' element={<SucessPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
