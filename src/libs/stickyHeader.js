const stickyHeader = () => {
  const header = document.querySelector("header");
  const stickyHeader = header?.querySelector(".sticky-header");

  if (stickyHeader) {
    window.addEventListener("scroll", () => {
      const stickyHeaderHeight = stickyHeader.offsetHeight;
      const scrollCount = window.scrollY;

      // if (scrollCount - headerHeight < 0 && scrollCount - headerHeight > -5) {

      // }
      if (scrollCount < 300) {
        
          stickyHeader.removeAttribute("style");
          stickyHeader.classList.remove("active");
      
      }
      
    });
  }
};
export default stickyHeader;
