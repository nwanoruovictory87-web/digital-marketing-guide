import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Spinner from "../Spinner";
import courseImg from "/images/course.png";
import whatIsAffilateMarketing from "/images/what-is-affiliate-marketing.webp";
function HowToGetStarted() {
  const urlNavigator = useNavigate();
  const [isLoading, setIsloading] = useState<boolean>(false);
  function getEmail() {
    setIsloading(true);
    const url = "/email/access";
    urlNavigator(url, { replace: false });
  }
  return (
    <>
      <div className=" transition-opacity">{isLoading && <Spinner />}</div>
      <div className="pl-5 pr-5 mt-5 flex justify-center ">
        <div className="rounded-md max-w-200 flex flex-col">
          <span className="flex justify-center ">
            <h5 className="text-[1.1rem] text-center pb-2 pt-2 border-b-2 border-[#6e6e0696] font-semibold text-gray-100">
              Ready to Become a Successful Digital Marketer?
            </h5>
          </span>
          <span className="flex justify-center mt-3 text-center">
            <h5 className="text-[1.1rem] text-gray-100">
              If you've made it this far, congratulations! It shows that you're
              determined and eager to learn more about how to become a{" "}
              <strong>Digital/Affiliate Marketer</strong>. By now, you
              understand the basics of digital marketing, but what you've
              learned so far is only scratching the surface of what digital
              marketing truly involves.
              <br />
              <br />
              To help you go further, I've put together a comprehensive PDF
              course that teaches you how to get started in digital marketing
              and begin earning online. This is a{" "}
              <strong>step-by-step guide</strong> designed for both beginners
              and aspiring marketers, covering everything you need to know to
              start your journey with confidence.
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
                <span className="w-full h-fit   pb-3 flex gap-2  pl-3 pr-3  mt-2">
                  <span className="w-full border-2 flex flex-col justify-center items-center text-[1.5rem]   font-bold py-4 rounded-lg text-xl">
                    <h5>No longer</h5>
                    <h5 className="line-through ml-2 "> ₦7,500</h5>
                  </span>
                  <button
                    className="w-full CTAShake  CTAShake-shadow text-gray-50  bg-blue-500 hover:bg-blue-600  font-bold py-4 rounded-lg text-xl"
                    onClick={getEmail}
                  >
                    <h5>Get Access</h5>
                    <h5>₦3,500</h5>
                  </button>
                </span>
              </div>
              <div className=" mt-3 sm:mt-0 bg-white sm:w-[50%] rounded-md ">
                <div className="h-full rounded-md  ">
                  <span className=" w-full h-full rounded-md">
                    <img
                      className="w-full h-full  object-fill rounded-md "
                      src={whatIsAffilateMarketing}
                    ></img>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <span className="flex justify-center mt-3 text-center">
            <div>
              <h5 className="text-[1.1rem] text-gray-100">
                When you enroll in this course for just <strong>₦3,500</strong>,
                you'll get everything you need to start your Digital Marketing
                and Affiliate Marketing journey with confidence.
              </h5>
              <ul className="text-gray-100 text-[1.1rem] space-y-3 mt-4 list-disc pl-5 pr-5">
                <li>
                  <strong>Complete Beginner-to-Advanced PDF Guide</strong> –
                  Learn Digital Marketing and Affiliate Marketing from the
                  ground up.
                </li>

                <li>
                  <strong>Step-by-Step Blueprint</strong> – A clear roadmap
                  showing you exactly what to do and how to get started.
                </li>

                <li>
                  <strong>Access to an Affiliate Program</strong> – Get access
                  to an affiliate network where you can promote digital products
                  and earn commissions.
                </li>

                <li>
                  <strong>1,000+ Digital Products to Promote</strong> – Choose
                  from a wide variety of products across multiple categories.
                </li>

                <li>
                  <strong>Product Selection Guide</strong> – Learn how to
                  identify products with strong earning potential.
                </li>

                <li>
                  <strong>Traffic Generation Strategies</strong> – Discover how
                  to attract potential buyers using free and paid methods.
                </li>

                <li>
                  <strong>Social Media Marketing Training</strong> – Learn how
                  to market products on platforms like Facebook, Instagram,
                  TikTok, WhatsApp, and more.
                </li>

                <li>
                  <strong>Content Creation Tips</strong> – Learn how to create
                  posts and promotional content that attract attention and drive
                  sales.
                </li>

                <li>
                  <strong>Beginner-Friendly Lessons</strong> – No prior
                  experience or special skills required.
                </li>

                <li>
                  <strong>Lifetime Access to the PDF</strong> – Revisit the
                  guide anytime and learn at your own pace.
                </li>
              </ul>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
export default HowToGetStarted;
