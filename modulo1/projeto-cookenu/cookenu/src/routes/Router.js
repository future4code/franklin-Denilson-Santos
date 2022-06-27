import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { TelaAdicionaReceita } from '../pages/TelaAdicionaReceita';
import { TelaCadastro } from '../pages/TelaCadastro';
import { TelaDetalheReceita } from '../pages/TelaDetalheReceita';
import { TelaListaReceitas } from '../pages/TelaListaReceitas';
import { TelaLogin } from '../pages/TelaLogin';


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route index element={<TelaLogin/>}/>
                <Route path='/list' element={<TelaListaReceitas/>}/>
                <Route path='/cadastro' element={<TelaCadastro/>}/>
                <Route path='/list/detalhes' element={<TelaDetalheReceita/>}/>
                <Route path='/list/create' element={<TelaAdicionaReceita/>}/>

            </Routes>
      </BrowserRouter>
    );
}