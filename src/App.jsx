import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/movieContext";

import Home from "./pages/Home/Home";
import AppLayout from "./pages/AppLayout/AppLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/app"
                    element={
                        <MovieProvider>
                            <AppLayout />
                        </MovieProvider>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
