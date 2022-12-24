import React from "react";
import FirstColumn from "./FirstColumn";
import SecondColumn from "./SecondColumn";

const MainPage = () => {
  return (
    <React.Fragment>
      <section>
        <div className="w-full h-screen grid grid-rows-2 md:grid-cols-11">
          <div div className=" bg-red-500 md:h-screen md:col-span-5">
            <FirstColumn/>
          </div>
          <div div className=" bg-red-100 md:h-screen md:col-span-6">
            <SecondColumn/>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MainPage;
