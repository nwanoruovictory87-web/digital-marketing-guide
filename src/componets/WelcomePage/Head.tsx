import videoGuide from "/videos/whatsAffiliateMarketing.mp4";
import { useRef } from "react";
function Head() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playRef = useRef<HTMLSpanElement | null>(null);
  const pauseRef = useRef<HTMLSpanElement | null>(null);
  const playVideo = async () => {
    if (!videoRef.current || !playRef.current || !pauseRef.current) return;
    await videoRef.current.play();
    playRef.current.classList.remove("pointer-click");
    playRef.current.classList.add("pointer-none");
    pauseRef.current.classList.remove("pointer-none");
    pauseRef.current.classList.add("pointer-click");
  };
  const pauseVideo = () => {
    if (!videoRef.current || !playRef.current || !pauseRef.current) return;
    videoRef.current.pause();
    pauseRef.current.classList.remove("pointer-click");
    pauseRef.current.classList.add("pointer-none");
    playRef.current.classList.remove("pointer-none");
    playRef.current.classList.add("pointer-click");
  };
  return (
    <div className="pl-5 pr-5 pt-10 flex justify-center ">
      <div className="">
        <span className="flex justify-center ">
          <span className="block w-fit p-1 pl-5 pr-5 bg-[#07078dde] rounded-md text-gray-100 font-inter text-[1.1rem] ">
            <h5>Degital marketing Guilde</h5>
          </span>
        </span>
        <div className="flex justify-center">
          <span className="block w-fit mt-5 h-fit p-2 pl-5 pr-5 rounded-md max-w-200 text-center bg-[#6e6e0696]">
            <h2 className="text-[1.5rem] font-bold text-white">
              What If I Told You That You Could Be Earning ₦100,000–₦400,000 Per
              Month?
              <br />
              All You Need Is a Phone, a Reliable Internet Connection, and Just
              1 Hour a Day.
            </h2>
          </span>
        </div>
        <div className="flex justify-center max-w-200">
          <span className="block mt-3 pl-5 pr-5 text-center ">
            <h5 className="text-[1.1rem] font-medium text-gray-100">
              Yes, it's possible to earn ₦100,000–₦400,000 per month—and
              potentially even more—from the comfort of your home. With just a
              smartphone, a reliable internet connection, and the right
              knowledge, you can start your journey as a Digital Affiliate
              Marketer and build an online income stream.
            </h5>
          </span>
        </div>
        <div className="flex justify-center mt-5 ">
          <div className="bg-[#07078dde] w-fit p-1 h-fit rounded-md">
            <span className="flex justify-center ">
              <h5 className="text-[1.1rem] text-center pb-2 pt-2 border-b-2 border-[#6e6e0696] font-semibold text-gray-100">
                What Exactly Is Digital Marketing?
              </h5>
            </span>
            <div className="w-fit h-fit relative">
              <span className="block max-w-190 max-h-100 mt-3">
                <video
                  className="w-full h-full max-h-100"
                  src={videoGuide}
                  ref={videoRef}
                ></video>
              </span>
              <div className="w-full h-full absolute flex justify-center top-0 z-10">
                <span
                  className="w-full h-full  flex justify-center items-center pointer-click  transition-all"
                  onClick={playVideo}
                  ref={playRef}
                >
                  <span className="fa fa-play text-[3rem] text-[#d4d4d49f]  "></span>
                </span>
                <span
                  className="w-full h-full  flex justify-center items-center pointer-none  transition-all"
                  onClick={pauseVideo}
                  ref={pauseRef}
                >
                  <span className="fa fa-pause text-[3rem] text-[#d4d4d49f]  "></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Head;
