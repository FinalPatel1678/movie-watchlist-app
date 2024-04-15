import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-red-200 h-20 w-20"></div>
    </div>
  );
};

export default Loader;
