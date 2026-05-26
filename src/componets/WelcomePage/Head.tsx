import videoGuide from "/videos/whatsAffiliateMarketing.mp4";

function Head() {
  return (
    <div className="pl-5 pr-5 pt-10 flex justify-center ">
      <div className="">
        <span className="flex justify-center ">
          <span className="block w-fit p-1 pl-5 pr-5 bg-[#07078dde] rounded-md text-gray-100 font-inter text-[1.1rem] ">
            <h5>Degital marketing Guilde</h5>
          </span>
        </span>
        <div className="flex justify-center">
          <span className="block w-fit mt-5 h-fit p-2 pl-5 pr=5 rounded-md max-w-200 text-center bg-[#6e6e0696]">
            <h5 className="font-bold text-[1.5rem] text-white ">
              What If I Told You Could Be Earning ₦100k-₦400k/Month - All You
              Need Is A Phone, Good Internet, And 1hr/Day?
            </h5>
          </span>
        </div>
        <div className="flex justify-center max-w-200">
          <span className="block mt-3 pl-5 pr-5 text-center ">
            <h5 className="font-medium text-[1.1rem] text-white ">
              Yes you could be earning ₦100k-₦400k/Month and so much more from
              the comfort of your home with just your phone and a good internet
              connection as a digital affilate marketer
            </h5>
          </span>
        </div>
        <div className="flex justify-center mt-5 ">
          <div className="bg-[#07078dde] w-fit p-1 h-fit rounded-md">
            <span className="flex justify-center ">
              <h5 className="text-[1.1rem] pb-2 pt-2 border-b-2 border-[#6e6e0696] font-semibold text-gray-100">
                What is Digital Marketing ?
              </h5>
            </span>
            <span className="block max-w-190 max-h-100 mt-3">
              <video
                className="w-full h-full max-h-100"
                src={videoGuide}
                controls
              ></video>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Head;
