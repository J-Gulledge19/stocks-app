import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Main from "./pages/main"
import About from "./pages/about"
import Stocks from "./pages/stocks"
import Stock from "./pages/showstock"
import { stockLoader } from "./loader"


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route 
            path="/" 
            element={<App/>}
        >
            <Route
                path=''
                element={<Main/>}
            />
            <Route
                path='about'
                element={<About/>}
            />
            <Route
                path='stocks'
                element={<Stocks/>}
            />
            <Route
                path='stocks/:symbol'
                element={<Stock/>}
                loader={stockLoader}
            />
        </Route>
    )
);

export default router;