import React from "react";
import img from "../asserts/p1.png";

const SecondColumn = () => {
  return (
    <React.Fragment>
      <section className="relative md:mt-20">
        <div className="w-full h-auto centered pt-28 ">
          <img
            src={img}
            alt="logoImage"
            className="w-40 h-auto md:absolute md:w-2/4 md:top-0 md:right-50%"
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default SecondColumn;
