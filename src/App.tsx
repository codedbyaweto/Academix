import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResultForm from "./components/ResultForm.tsx";
import ResultPage from "./pages/ResultPage.tsx";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ResultDetails from "./pages/ResultDetails.tsx";
import type { Result } from "./types/types.ts";
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer.tsx";
import { Toaster } from "react-hot-toast";

const App = () => {
    const [results, setResults] = useState<Result[]>([]);

    const addResult = (result: Result) => {
        setResults(prev => [...prev, result]);
    };

    return (
        <BrowserRouter>
            <div className="app-layout">
                <Navbar />
                <Toaster />

                <main className="app-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/add" element={<ResultForm onAdd={addResult} />} />
                        <Route path="/results" element={<ResultPage results={results} />} />
                        <Route path="/results/:id" element={<ResultDetails results={results} />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;