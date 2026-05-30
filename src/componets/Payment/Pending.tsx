import { useParams, useNavigate } from "react-router-dom";
import pendingImg from "/images/pending.png";
function Pending() {
  const { id } = useParams();
  const urlNavigator = useNavigate();
  function toHome() {
    urlNavigator("/", { replace: true });
  }

  return (
    <>
      <div className="pl-5 pr-5  flex justify-center  mt-10">
        <div className="w-full">
          <span className="flex  justify-center ">
            <span className="block w-fit p-1 pl-5 pr-5 bg-[#07078dde] rounded-md text-gray-100 font-inter text-[1.1rem] ">
              <h5>Order Pending</h5>
            </span>
          </span>
          <div className="flex justify-center ">
            <div className="max-w-150">
              <div className="bg-white w-full flex flex-col  pt-7 pb-7 rounded-md mt-10 ">
                <span className="pl-5 pr-5">
                  <h5 className="text-[1.3rem] font-semibold">
                    Thank you for your purchase🎉
                  </h5>
                </span>
                <div className=" pl-5 pr-5  mt-2 w-full ">
                  <span className="w-full h-20">
                    <img
                      className="w-full h-full min-h-30 max-h-62.5"
                      src={pendingImg}
                    ></img>
                  </span>
                </div>
                <div className="flex flex-col pl-5 pr-5">
                  <span className="mt-10 flex justify-center text-center w-full text-[1.2rem] font-medium">
                    <div>
                      <h5>
                        Your payment for digital/affilate marketing guide is
                        currently in review
                      </h5>
                      <h5 className="mt-2 font-normal ">
                        We'll send a comfirmation to your email once it's
                        approved. This usually takes 2-10 minutes.
                      </h5>
                    </div>
                  </span>

                  <span className="flex justify-center mt-5 ">
                    <h5>
                      Check your inbox for <strong>{id}</strong> in the next few
                      minutes. Spam folder too, just in case
                    </h5>
                  </span>
                  <span className="flex justify-center mt-5">
                    <button
                      className="w-full h-fit border-2 border-blue-500 pt-2 pb-2 bg-blue-500 rounded-md text-gray-100 font-bold text-[1.2rem]"
                      onClick={toHome}
                    >
                      Back to Home
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Pending;
