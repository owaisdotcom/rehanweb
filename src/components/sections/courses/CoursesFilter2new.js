import FilterCards from "@/components/shared/courses/FilterCards";
import FilterCardsNew from "@/components/shared/courses/FilterCardsnew";
import FilterController2 from "@/components/shared/courses/FilterController2";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import SectionName from "@/components/shared/section-names/SectionName";
import FilterControllerWrapper from "@/components/shared/wrappers/FilterControllerWrapper";

const CoursesFilter2New = ({ id }) => {
  return (
    <section>
      <div className="pt-50px pb-10 md:pt-70px md:pb-50px lg:pt-20 2xl:pt-100px 2xl:pb-70px bg-lightGrey7 dark:bg-lightGrey7-dark">
        <div
          className={`filter-container ${
            id ? "container-fluid-2" : " container"
          }`}
        >
          {/* courses Heading */}
          <div className="mb-5 md:mb-10" data-aos="fade-up">
            <div className="text-center">
              <SectionName>Our Main Categories</SectionName>
            </div>

            <HeadingPrimary text="center">
              Diverse Categories to{" "}
              <span className="relative after:w-full after:h-[7px] z-0 after:bg-[#EC9B31] after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:z-[-1]">
                Fullfil Your
              </span>
              <br />
              Safety Needs
            </HeadingPrimary>
          </div>

          {/* courses tabs */}
          {/* <FilterControllerWrapper>
            <FilterController2 />
          </FilterControllerWrapper> */}
          {/* course cards */}

          <FilterCardsNew id={id} />
        </div>
      </div>
    </section>
  );
};

export default CoursesFilter2New;
