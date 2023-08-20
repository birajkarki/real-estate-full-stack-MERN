
import React, { Suspense } from 'react'
import "./App.css";
import Website from "./pages/Website";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...........</div>}>
        <Routes>
          <Route path="/" element={<Website />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
