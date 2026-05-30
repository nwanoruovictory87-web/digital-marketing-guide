import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "../Spinner";
type ServerPaymentResponds = {
  ok: boolean;
  massage: string;
  redirectUrl: string;
};
function Payment() {
  const urlNavigator = useNavigate();
  const { id } = useParams();
  const [min, setMin] = useState<number>(10);
  const [sec, setSec] = useState<number>(59);
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const [isLoading, setIsloading] = useState<boolean>(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setSec((prevSec) => {
        if (prevSec === 0) {
          return (prevSec = 59);
        }
        return (prevSec -= 1);
      });
    }, 1000);
    if (isValidated) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isValidated]);
  useEffect(() => {
    if (sec === 0) {
      console.log("- 1min");
      setMin((prevMin) => (prevMin = prevMin - 1));
    }
  }, [sec]);
  useEffect(() => {
    if (min === 0) {
      if (sec === 1) {
        urlNavigator("/", { replace: true });
      }
    }
  }, [min, sec]);
  function copyFunction() {
    // 1. Get the text field element
    const copyText = "9034154937";

    // 2. Use the Clipboard API to copy the value
    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        // Success: You can add a visual confirmation here
        toast.success("Text copied: " + copyText);
      })
      .catch((err) => {
        // Failure: Log any errors
        toast.error("Failed to copy: ", err);
      });
  }
  async function validatePayment() {
    if (isValidated) return;
    setIsValidated(true);
    try {
      const data = {
        email: id,
      };
      setIsloading(true);
      const url = "http://localhost:3000/validate/payment";
      const validate = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responds: ServerPaymentResponds = await validate.json();
      if (!responds.ok) {
        setIsloading(false);
        toast.error(responds.massage);
        setTimeout(() => {
          urlNavigator("/", { replace: true });
        }, 3000);
      }
      if (responds.ok) {
        urlNavigator(responds.redirectUrl, { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className=" transition-opacity">{isLoading && <Spinner />}</div>
      <div className="pl-5 pr-5  flex justify-center  mt-10">
        <div className="w-full">
          <span className="flex  justify-center ">
            <span className="block w-fit p-1 pl-5 pr-5 bg-[#07078dde] rounded-md text-gray-100 font-inter text-[1.1rem] ">
              <h5>Payment Transfer</h5>
            </span>
          </span>
          <div className="flex justify-center ">
            <div className="max-w-150">
              <Toaster position="top-center" />
              <div className="bg-white w-full flex flex-col  pt-7 pb-7 rounded-md mt-10 ">
                <span className="pl-5 pr-5">
                  <h5 className="text-[1.3rem] font-semibold">Bank Transfer</h5>
                </span>
                <div className="flex justify-end pl-5 pr-5  mt-2 w-full border-b-2 pb-1 border-gray-400">
                  <span className="flex flex-col gap-2 ">
                    <h5 className="text-[1.2rem] font-medium">{id}</h5>
                    <h5 className="ml-auto text-[1.2rem] font-medium">
                      Pay{" "}
                      <strong className="ml-0.5 text-green-600">
                        NGN 3,500
                      </strong>
                    </h5>
                  </span>
                </div>
                <div className="flex flex-col pl-5 pr-5">
                  <span className="mt-10 flex justify-center w-full text-[1.2rem] font-medium">
                    <h5>Transfer NGN 3,500 to</h5>
                  </span>
                  <div className="mt-10 w-full bg-[#d8d4d4] pt-5 pb-5 rounded-md">
                    <div className="flex justify-center">
                      <div className="flex flex-col gap-4 text-[1.2rem] font-medium">
                        <span className="text-center">
                          <h5 className="font-bold">Account Name</h5>
                          <h5 className="mt-0.5">Victory Nwanoruo</h5>
                        </span>
                        <span className="text-center">
                          <h5 className="font-bold">Bank Name</h5>
                          <h5 className="mt-0.5">Opay</h5>
                        </span>
                        <span className="text-center">
                          <h5 className="font-bold">Account Number</h5>
                          <span className="flex justify-center items-center ">
                            <h5 className="mt-0.5">9034154937</h5>
                            <i
                              className="fa fa-link ml-2 text-blue-500"
                              onClick={copyFunction}
                            ></i>
                          </span>
                        </span>
                        <span className="flex justify-center gap-1 mt-2">
                          <h5>Expires in</h5>
                          <h5 className="text-[#860808]">
                            {min >= 10 ? min : "0" + min}:
                            {sec >= 10 ? sec : "0" + sec}
                          </h5>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="flex justify-center mt-5 ">
                    <h5>
                      Note only the sum of <strong>₦3,500</strong> should be
                      deposted to the above account !!{" "}
                    </h5>
                  </span>
                  <span className="flex justify-center mt-5">
                    <button
                      className="w-full h-fit border-2 border-blue-500 pt-2 pb-2 bg-blue-500 rounded-md text-gray-100 font-bold text-[1.2rem]"
                      onClick={validatePayment}
                    >
                      I've sent the money
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
export default Payment;
