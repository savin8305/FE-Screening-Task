import React from "react";

function Computers() {
  return (
    <div className=" flex mt-20  flex-col lg:flex-row items-center justify-center lg:p-10">
      <div className="card  lg:pl-10 mb-8 lg:mb-0 lg:mr-8 w-full lg:w-72 group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2">
        <div className="card group-hover:duration-400 relative rounded-2xl w-full h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12 before:rounded-2xl before:absolute before:content[''] before:bg-neutral-700 before:right-3 before:top-0 before:w-full before:h-32 before:-z-10">
          <span className="text-3xl lg:text-5xl font-bold">4th Year</span>
          <p className="text-amber-300 font-thin text-xs lg:text-base">- College Student -</p>
        </div>
      </div>
      <div className="card lg:mr-8 mb-8 lg:mb-0 lg:pl-10 w-full lg:w-72 group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2">
        <div className="card group-hover:duration-400 relative rounded-2xl w-full h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12 before:rounded-2xl before:absolute before:content[''] before:bg-neutral-700 before:right-3 before:top-0 before:w-full before:h-32 before:-z-10">
          <span className="text-3xl lg:text-5xl font-bold">Jr</span>
          <p className="text-amber-300 font-thin text-xs lg:text-base">- Frontend Developer -</p>
        </div>
      </div>
      <div className="card lg:pl-10 w-full lg:w-72 group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2">
        <div className="card group-hover:duration-400 relative rounded-2xl w-full h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12 before:rounded-2xl before:absolute before:content[''] before:bg-neutral-700 before:right-3 before:top-0 before:w-full before:h-32 before:-z-10">
          <span className="text-3xl lg:text-5xl font-bold">Jr</span>
          <p className="text-amber-300 font-thin text-xs lg:text-base">- Backend Developer -</p>
        </div>
      </div>
    </div>
  );
}

export default Computers;
