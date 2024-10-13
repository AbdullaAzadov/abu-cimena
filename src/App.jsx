import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages/Home/Home";
import AppLayout from "pages/AppLayout/AppLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/app" element={<AppLayout />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
