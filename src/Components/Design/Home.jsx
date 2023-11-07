import React from "react";
import How from "./How";
import Faq from "./Faq";
import Solutions from "./Solutions";
import BackGradients from "./BackGradients";
import { Link } from "react-router-dom";

const Home = ({ isDarkMode }) => {
  // const switchToDifferentTheme = (theme) => {
  //   return window["theme"];
  // };

  // if (isDarkMode == true) {
  //   return window["theme"];
  // }

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.body.classList.contains("dark-theme");
  //   }
  // }, [isDarkMode]);

  return (
    <>
      <div className="flex text-center justify-center items-center flex-col pt-[20px] ">
        <div className="z-10 mb-80 lg:mt-60 mobile:mt-40">
          <div className=" font-bold txt-light mobile:text-[40px] sm:mt-60 lg:text-[60px] sm:text-[60px]">
            Introducing
            <span className="txt-main lg:text-[60px]">&nbsp;CLARUS</span>
          </div>
          <div className="txt-ternary-light lg:text-[20px]  mt-5 md:flex-row flex mobile:flex-col mobile:items-center justify-center">
            <div>
              Interactive Explainable Platform for Graph Neural Networks can be
              used to better understand, validate and improve the decision
              making of Graph Neural Networks (GNN). Therefore, CLARUS allows
              you to visually explore and modify the graph data in order to test
              the resulting effects on the GNN prediction. CLARUS has been
              developed for simple, undirected, homogeneous graphs which
              represent a biological network.&nbsp;
            </div>
            {/* <div className="type mobile:w-[179px] w-auto">problems solved...</div> */}
          </div>
          <button className="text-white back-main px-[80px] py-[15px] mt-10 rounded-md text-[25px] hover:bg-blue-400 active:bg-blue-500 transition-all">
            <Link to="/about">Try it now</Link>
          </button>
        </div>
        {/* <div>
          <div className=" z-10 font-bold txt-main mt-[10rem] mobile:text-[40px] lg:text-[64px] mobile:flex-col flex lg:flex-row">
            Your confidentiality{" "}
            <span className="txt-light ">&nbsp;is our priority</span>
          </div>
          <button className="text-white back-main px-[80px] py-[15px] mt-10 mb-80 rounded-md text-[25px]  hover:bg-blue-400 active:bg-blue-500 transition-all">
            View more
          </button>
        </div> */}
        <How />
        <Faq />
        <Solutions />
        <BackGradients />
      </div>
    </>
  );
};

export default Home;
