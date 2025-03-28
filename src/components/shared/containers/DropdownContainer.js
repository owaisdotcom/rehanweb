"use client";

const DropdownContainer = ({ children }) => {
  return (
    <div className="right-10 z-medium -mt-1 w-[1000px] max-w-[2000px] mx-auto shadow-dropdown px-3 py-5  bg-white dark:bg-whiteColor-dark overflow-y-auto max-h-dropdown">
      {children}
    </div>
  );
};

export default DropdownContainer;
