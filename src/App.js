
// import Button from "./Components/Button"
import React ,{createContext} from "react";
import { QueryClient, QueryClientProvider } from "react-query"
import {BrowserRouter  as Router ,   Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";

import Layout from './Components/App/Layout';
import Debug  from './Components/App/Debug';
import NavBar from './Components/Design/NavBar';
import Home from './Components/Design/Home';



import clarus from "./imgs/clarus_blue.png";
import { Link } from "react-router-dom";
import Session from "./Components/App/Session";
const queryClient = new QueryClient()

function App() { 

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
       <Router>
                <NavBar />
    <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<Layout />} />
    </Routes>
    </Router>
  </QueryClientProvider>

  );
}

export default App;


