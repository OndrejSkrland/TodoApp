import {BrowserRouter, Routes, Route} from "react-router-dom";
import Fetch from "../Pages/Fetch";
import SharedLayout from "./SharedLayout";
import Home from '../Pages/Home'
import Error from "../Pages/Error";

const Browser = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SharedLayout/>}>
                    <Route path='/' element={<Home/>} />
                    <Route path='/fetch' element={<Fetch/>}/>
                    <Route path='*' element={<Error/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Browser