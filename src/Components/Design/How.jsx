import React from "react";

const How = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="justify-center text-center font-bold txt-light mt-[10rem] mobile:text-[40px] lg:text-[64px] flex mobile:flex-col lg:flex-row">
        How does it <span className="txt-main">&nbsp;Work ?</span>
      </div>
      <div className="z-10 flex lg:flex-row mobile:flex-col mb-60 justify-center items-start mt-20">
        <div className="flex flex-col items-center justify-center px-10 lg:px-10 lg:flex-col mobile:flex-row mobile:px-0">
          <img
            className="mb-9 mobile:pr-4 lg:pr-0 lg:w-[157px] mobile:w-[20vw]"
            src="../imgs/one.png"
            alt=""
          />
          <div className="txt-light lg:text-[2rem] mobile:text-[1rem] text-center">
            Select the data <br /> registerd on our website
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-10 lg:px-10 lg:flex-col mobile:flex-row mobile:px-0">
          <img
            className="mb-9 mobile:pr-4 lg:pr-0 lg:w-[157px] mobile:w-[20vw]"
            src="../../public/assets/male-blue.png"
            alt=""
          />
          <div className="txt-light lg:text-[2rem] mobile:text-[1rem] text-center">
            Explore the Graph <br /> them on chat
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:px-10 lg:flex-col mobile:flex-row mobile:px-0 ">
          <img
            className="mb-9 mobile:pr-4 lg:pr-0 lg:w-[157px] mobile:w-[20vw]"
            src="../../public/assets/conversation-blue.png"
            alt=""
          />
          <div className="txt-light lg:text-[2rem] mobile:text-[1rem] text-center">
            Modify the Graph <br />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-10 lg:px-10 lg:flex-col mobile:flex-row mobile:px-0">
          <img
            className="mb-9 mobile:pr-4 lg:pr-0 lg:w-[157px] mobile:w-[20vw]"
            src="../imgs/one.png"
            alt=""
          />
          <div className="txt-light lg:text-[2rem] mobile:text-[1rem] text-center">
            Retrain or Predict <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
