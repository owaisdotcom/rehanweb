import FilterCards from "@/components/shared/courses/FilterCards";
import FilterController2 from "@/components/shared/courses/FilterController2";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import SectionName from "@/components/shared/section-names/SectionName";
import FilterControllerWrapper from "@/components/shared/wrappers/FilterControllerWrapper";

const CoursesFilter2 = ({ type }) => {
  return (
    <section>
      <div className="pt-20px pb-10 md:pt-30px md:pb-50px lg:pt-10 2xl:pt-50px 2xl:pb-70px bg-lightGrey7 dark:bg-lightGrey7-dark">
        <div
          className={`filter-container ${
            type ? "container-fluid-2" : " container"
          }`}
        >
          {/* courses Heading */}
          <div className="" data-aos="fade-up">
            
            <HeadingPrimary text="text-left ">
              Perfect For{" "}
              
                Your 
        
            
             <span className="text-[#EE9B33] "> Safety Needs</span> 
            </HeadingPrimary>
          </div>

          {/* courses tabs */}  
          {/* <FilterControllerWrapper>
            <FilterController2 />
          </FilterControllerWrapper> */}
          {/* course cards */}

          <FilterCards type={type} />
        </div>
      </div>
    </section>
  );
};

export default CoursesFilter2;
