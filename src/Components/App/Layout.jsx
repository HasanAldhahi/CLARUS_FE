import React from "react";

// import Session from "./Session";
import Session from "../../Redux/features/session/Session";

function Layout() {
  return (
    <section className="text-gray-600 body-font py-8">
      <div className="container px-5 py-24 mx-auto">
        <Session />
      </div>
    </section>
  );
}

export default Layout;
