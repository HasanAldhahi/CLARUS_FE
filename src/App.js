
// import Button from "./Components/Button"
import { QueryClient, QueryClientProvider } from "react-query"

import {BrowserRouter,  Route, Routes}  from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";

import Layout from './Components/App/Layout';
// import { increment } from "./Redux/counter";

import NavBar from './Components/Design/NavBar';
import Home from './Components/Design/Home';

const queryClient = new QueryClient()

function App() { 
// const {count}  = useSelector((state) => state.counter())
// const dispatch = useDispatch()

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
          {/* adding the following components to the page  */}
      <div className='-z-10 back-light transition-all'>
        {/* <Home /> */}
      {/* <div id="test-space" className="h-[5000px]"></div> */}
    </div>
    <NavBar setIsDarkMode = {setIsDarkMode}></NavBar>
      <main> 
        <Routes>
          <Route index element = {<Home  isDarkMode={isDarkMode} />}></Route>
          <Route path= 'about' element ={<Layout />} ></Route>
        </Routes>
      </main>
    </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;


