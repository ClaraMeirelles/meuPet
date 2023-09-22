import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Adocao } from "../paginas/Adocao/Adocao"
import Header from "../componentes/Header/Header"
import { MeusPets } from "../paginas/MeusPets.js/MeusPets"
import PetDetalhes from "../paginas/PetDetalhes.js/PetDetalhes"

export default function Router() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route index element={<MeusPets />} />
                <Route path="/adotar" element={<Adocao />} />
                <Route path="/meu-pet/:id" element={<PetDetalhes />} />
                <Route path="*" element={<h1>Deu ruim</h1>} />
            </Routes>
        </BrowserRouter>
    )
}
