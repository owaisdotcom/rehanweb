"use client";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import AboutContent from "@/components/shared/overviews/AboutContent";
import OurMissionContent from "@/components/shared/overviews/OurMissionContent";
import OurVissionContent from "@/components/shared/overviews/OurVissionContent";
import SectionName from "@/components/shared/section-names/SectionName";
import Counter2 from "../sub-section/Counter2";
import useIsTrue from "@/hooks/useIsTrue";
import EducationContent from "@/components/shared/overviews/EducationContent";

const Overview = () => {
  const isHome9 = useIsTrue("/home-9");
  const isHome9Dark = useIsTrue("/home-9-dark");
  const isAbout = useIsTrue("/about");
  const isAboutDark = useIsTrue("/about-dark");

  return (
    <section>
      <div
        className={`container ${
          isHome9 || isHome9Dark
            ? "pt-100px"
            : isAbout || isAboutDark
            ? "pb-5 md:pb-10 lg:pb-50px 2xl:pb-10"
            : ""
        }`}
      >
        {/* Overview Heading */}
        {isAbout || isAboutDark ? (
          ""
        ) : (
          <div className="mb-5 md:mb-10 " data-aos="fade-up">
            <div className="text-center">
              <SectionName>Overview</SectionName>
            </div>

            <HeadingPrimary text="center">
              Perfect University {" "}
              <span className="relative after:w-full after:h-[7px] z-0 after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:z-[-1]">
                Overview
              </span>{" "}
              <br />
              For Your Career
            </HeadingPrimary>
          </div>
        )}

        {/* Overview Content */}
        <div data-aos="fade-up" className="space-y-10 lg:space-y-20">
          <AboutContent />
          <OurMissionContent />
          <OurVissionContent />
          <EducationContent />
        </div>
      </div>
      {isAbout || isAboutDark ? "" : <Counter2 />}
    </section>
  );
};

export default Overview;
