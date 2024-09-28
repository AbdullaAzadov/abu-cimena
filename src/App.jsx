import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieProvider, useMovies } from "./contexts/movieContext";

import Home from "./pages/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <MovieProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </MovieProvider>
        </BrowserRouter>
    );
}

export default App;
