import Head from "./Head";
import Proof from "./Proof";
import HowToGetStarted from "./HowToGetStarted";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
function WelcomePage() {
  return (
    <>
      <Head />
      <Proof />
      <HowToGetStarted />
      <AboutMe />
      <div className="fixed z-10  bottom-16 right-5 min-[1000px]:mr-[23%]">
        <a
          className="fa-brands fa-whatsapp text-green-500 text-[4rem] "
          href="https://wa.me/2348066869429?text=Hello%20Coach%20Victory%2C%20I%E2%80%99m%20interested%20in%20getting%20started%20with%20affiliate%20marketing.%20I%E2%80%99m%20still%20a%20beginner%20and%20would%20really%20love%20some%20guidance%20on%20how%20to%20start%20properly%20and%20avoid%20mistakes.%20I%20came%20across%20your%20page%20and%20it%20really%20caught%20my%20attention.%20I%E2%80%99d%20appreciate%20any%20tips%2C%20resources%2C%20or%20advice%20you%E2%80%99re%20willing%20to%20share.%20Thank%20you."
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
      <Footer />
    </>
  );
}
export default WelcomePage;
