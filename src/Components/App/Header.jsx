import React from "react";
import clarus from "../../imgs/clarus_blue.png";

export default function Header() {
  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4 bg-blue-200 my-4">
      <img className="wd-20 h-20 row-span-4 " src={clarus} alt="calrus" />
    </div>
  );
}
