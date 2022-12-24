import React from "react";
import logoImage from "../asserts/pp.jpg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const FirstColumn = () => {
  return (
    <React.Fragment>
      <section>
        <div>
          {/* logo section */}
          <div className="h-20 px-10 flex items-center md:w-4/5 md:mx-auto">
            <img src={logoImage} alt="logoImage" className="w-20 h-20 " />
          </div>

          {/* content section */}
          <div className="bg-white h-1/2 w-full px-10 absolute md:w-2/4 md:h-full">
            {/* button section */}
            <div className="flex justify-end mt-2 text-white text-2xl md:mt-10">
              <div className="h-10 w-10 bg-black centered">
                <IoIosArrowBack />
              </div>
              <div className="h-10 w-10 bg-red-500 centered">
                <IoIosArrowForward />
              </div>
            </div>

            {/* heading area */}
            <div className='space-y-3 mt-4 md:mx-auto md:w-4/5 md:mt-14'>
              <p className="text-5xl md:text-8xl capitalize font-bold">Christmas Gift</p>
              <p>
                Christmas and Partners (“We”) use cookies, to operate our
                website, to show you personalized content and manage our
                objectives as a business. Christmas and Partners (“We”) use
                cookies, to operate our website, to show you personalized
                content and manage our objectives as a business.
              </p>
              <button className="px-3 py-1 bg-red-500 capitalize text-sm text-white font-bold rounded-lg mt-4 md:px-3 md:py-2 md:text-xl">
                read more
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FirstColumn;
