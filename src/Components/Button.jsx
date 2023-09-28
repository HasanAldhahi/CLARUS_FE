import React from 'react';

<<<<<<< HEAD
const Button = ({ text , onClick }) => {
=======

const Button = ({ text }) => {
>>>>>>> 5847536cdda6b9c30f97f10a378a7535e0963c58
  return (
    <button onClick={onClick} className ="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out">
       {text}
       {console.log("i have pressed th upload button")}
        </button>
  );
};

export default Button;