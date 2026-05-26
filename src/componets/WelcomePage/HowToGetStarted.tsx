import courseImg from "/images/course.png";
import c1 from "/images/c1.jpg";
import c2 from "/images/c2.jpg";

function HowToGetStarted() {
  return (
    <div className="pl-5 pr-5 mt-5 flex justify-center ">
      <div className="rounded-md max-w-200 flex flex-col">
        <span className="flex justify-center ">
          <h5 className="text-[1.1rem] pb-2 pt-2 border-b-2 border-[#6e6e0696] font-semibold text-gray-100">
            Want to become a digital marketer ?
          </h5>
        </span>
        <span className="flex justify-center mt-3 text-center">
          <h5 className="text-[1.1rem] text-gray-100 ">
            If you made it this far congrats you are determined and you want to
            know more and how you could become a{" "}
            <strong>Digital/Affilate Marketer</strong> now you know what digital
            marketing is all about but this only the surface of what digital
            markting actually is i have put togther a full course, PDF, on how
            you could get started with degital marketing and how you could earn
            this a <strong>step-by-step</strong> guilde not just ment for
            beginners as it covers pretty much everything you need to know to
            get stated.
          </h5>
        </span>
        <div className="bg-[#07078dde] w-full flex justify-center rounded-md mt-5  p-1 h-fit">
          <div className="w-full flex flex-col sm:flex-row sm:gap-4 ">
            <div className="bg-white border-2 rounded-md sm:w-[50%]">
              <span className="w-full h-full block max-h-95">
                <img
                  className="w-full h-full  rounded-md"
                  src={courseImg}
                ></img>
              </span>
              <span className="w-full h-fit  pt-2 pb-2 flex gap-2  pl-3 pr-3  mt-2">
                <span className="w-full h-full text-center pl-3 pr-3 p-2">
                  <s className="text-[2rem] font-semibold text-[#420404]">
                    &#8358;7,000
                  </s>
                </span>
                <span className="w-full h-full pl-3 pr-3 p-2 rounded-md border-2 border-[#a36c04] bg-[#a36c04] text-center">
                  <h5 className="text-[2rem] font-semibold text-gray-200">
                    &#8358;3,500
                  </h5>
                </span>
              </span>
            </div>
            <div className=" mt-3 sm:mt-0 bg-white sm:w-[50%] rounded-md ">
              <span className="w-full flex justify-center">
                <h5 className="text-[1.1rem] pb-2 pt-2 border-b-2 border-[#6e6e0696] font-semibold text-gray-900">
                  What this Course Covers
                </h5>
              </span>
              <div className="mt-4 rounded-md h-fit flex flex-col gap-2">
                <span className="w-full h-full rounded-md">
                  <img
                    className="w-full h-full rounded-md sm:max-h-50"
                    src={c1}
                  ></img>
                </span>
                <span className="w-full h-full rounded-md">
                  <img
                    className="w-full h-full rounded-md sm:max-h-50"
                    src={c2}
                  ></img>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HowToGetStarted;
