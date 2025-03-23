const stickyHeader = () => {
  const header = document.querySelector("header");
  const stickyHeader = header?.querySelector(".sticky-header");

  if (stickyHeader) {
    // Apply Tailwind utility classes to keep it always fixed at the top
    stickyHeader.classList.add(
      "fixed",
      "top-0",
      "left-0",
      "w-full",
      "z-50",
      "shadow-md",
      "bg-white"
    );
  }
};

export default stickyHeader;
