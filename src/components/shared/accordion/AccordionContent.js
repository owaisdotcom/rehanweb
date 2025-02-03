// const AccordionContent = ({ children }) => {
//   return (
//     <div
//       className={`accordion-content transition-all duration-500  overflow-hidden h-0`}
//     >
//       <div className="content-wrapper">{children}</div>
//     </div>
//   );
// };

// export default AccordionContent;

const AccordionContent = ({ children, isActive }) => {
  return (
    <div
      className={`accordion-content transition-all duration-500 overflow-hidden ${
        isActive ? "max-h-screen" : "max-h-0"
      }`}
    >
      <div className="content-wrapper">{children}</div>
    </div>
  );
};

export default AccordionContent;
