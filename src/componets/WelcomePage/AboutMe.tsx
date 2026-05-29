import myImage from "/images/victory.jpg";
function AboutMe() {
  return (
    <div className="flex justify-center">
      <div className="pl-5 pr-5 mt-10 flex flex-col max-w-200">
        <span>
          <span className="flex w-fit pb-2 border-b-2 border-[#7761c9] font-semibold text-[#6e6e06] text-[0.9rem] min-[400px]:text-[1.1rem] sm:text-[1.3rem]">
            <h5>About Me </h5>
          </span>
        </span>
        <div className="flex flex-col  ">
          <span className="mt-4 w-40 h-40  rounded-full ">
            <img className="w-full h-full rounded-full" src={myImage}></img>
          </span>
          <div className="flex flex-col gap-4 mt-4 sm:mt-10">
            <span className="text-gray-200 font-semibold text-[0.9rem] min-[400px]:text-[1.1rem] sm:text-[1.3rem]">
              <h5>
                Hey there, I'm Victory — a Software Developer and Digital
                Marketer.
              </h5>
            </span>

            <span className="text-gray-200 text-[0.9rem] min-[400px]:text-[1.1rem] sm:text-[1.2rem] font-medium">
              <h5>
                I started my Digital Marketing journey in 2023, and to be
                honest, I was skeptical at first. Like many beginners, I wasn't
                sure if it was actually possible to make money online through
                affiliate marketing.
              </h5>

              <h5 className="mt-3">
                However, after making my first 4 sales within just 2 weeks,
                everything changed. Today, I consistently generate income online
                using nothing more than my smartphone, an internet connection,
                and the strategies I'll be sharing in this guide.
              </h5>
            </span>

            <div className="mt-3">
              <span className="text-[0.9rem] min-[400px]:text-[1.1rem] text-gray-200 font-semibold sm:text-[1.2rem]">
                <h5>Inside this guide, you'll discover:</h5>
              </span>

              <ul className="list-disc pl-5 mt-2 text-gray-200 font-medium text-[0.9rem] min-[400px]:text-[1.1rem] sm:text-[1.2rem]">
                <li>
                  My personal journey and experience as an Affiliate Marketer
                  since 2023
                </li>

                <li>
                  A complete step-by-step roadmap for getting started as a
                  Digital Affiliate Marketer
                </li>

                <li>
                  Access to an affiliate platform with 1,000+ digital products
                  you can promote and earn commissions from
                </li>

                <li>
                  How to find high-demand, top-selling products that have the
                  potential to generate consistent sales
                </li>

                <li>
                  How to promote products effectively without spamming on
                  WhatsApp, Facebook, X (Twitter), or other social media
                  platforms
                </li>

                <li>
                  Beginner-friendly strategies for generating traffic and
                  attracting buyers
                </li>

                <li>
                  How affiliate commissions work and how to receive payments
                  into your Nigerian bank account
                </li>

                <li>Common mistakes beginners make and how to avoid them</li>

                <li>
                  Practical tips and strategies I've learned from my own
                  experience
                </li>
              </ul>

              <span className="block mt-4 text-[0.9rem] min-[400px]:text-[1.1rem] text-gray-200 font-semibold sm:text-[1.2rem]">
                <h5>
                  Get instant access today for a one-time payment of ₦3,500.
                </h5>
              </span>

              <span className="block mt-2 text-gray-200 font-medium text-[0.9rem] min-[400px]:text-[1.1rem] sm:text-[1.2rem]">
                <h5>
                  If you're serious about learning a valuable online skill and
                  discovering how affiliate marketing works, this guide is the
                  perfect place to start.
                </h5>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
