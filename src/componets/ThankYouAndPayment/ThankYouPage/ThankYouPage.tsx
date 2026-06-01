import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "../../Spinner";

type ServerEmailResponds = {
  ok: boolean;
  massage: string;
  redirectUrl: string;
};
function ThankYouPage() {
  const serverUrl = import.meta.env.VITE_BACKEND_API;
  const addminPass = import.meta.env.VITE_ADMIN_PASS;
  const urlNavigator = useNavigate();
  const [onRequst, setOnRequst] = useState<boolean>(false);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  async function toPayment() {
    if (onRequst) return;
    if (!inputRef.current?.value)
      return toast.error("please enter your email address");
    const userEmail = inputRef.current?.value.trim();
    const isEmailValied = (e: string): boolean => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
    };
    if (!isEmailValied(userEmail))
      return toast.error("please enter in a valide email address");
    const data = {
      email: userEmail,
    };
    if (userEmail === `${addminPass}`) {
      urlNavigator("/admin/dashboard/true", { replace: true });
      return;
    }
    setOnRequst(true);
    setIsloading(true);
    try {
      const url = `${serverUrl}/email`;
      const requst = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responds: ServerEmailResponds = await requst.json();
      setOnRequst(false);
      if (!responds.ok)
        return (toast.error(responds.massage), setIsloading(false));
      urlNavigator(responds.redirectUrl, { replace: true });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className=" transition-opacity">{isLoading && <Spinner />}</div>
      <div className="pl-5 pr-5 pt-10 pb-10 flex justify-center ">
        <div className="max-w-200">
          <Toaster position="top-center" />
          <span className="flex  justify-center ">
            <span className="block w-fit p-1 pl-5 pr-5 bg-[#07078dde] rounded-md text-gray-100 font-inter text-[1.1rem] ">
              <h5>Email Access</h5>
            </span>
          </span>
          <div className="flex  justify-center ">
            <span className="  w-fit mt-5 h-fit p-2 pl-5 pr-5 rounded-md max-w-200 text-center bg-[#6e6e0696]">
              <h2 className="text-[1.5rem] font-bold text-white">
                One Last Step Before You Get Access
              </h2>
            </span>
          </div>
          <div className="bg-gray-200 rounded-md pl-2 pt-10 pb-10 pr-2 mt-4">
            <span className="flex flex-col text-center">
              <h5 className="text-[1.2rem] font-medium ">
                You're just one step away from accessing the complete Digital
                Marketing / Affiliate Marketing Guide.
              </h5>
              <h5 className="mt-3 text-[1rem]">
                Enter your best email address below. Once your payment is
                confirmed, we'll instantly send your course materials, PDF
                guide, and access instructions directly to your inbox.
              </h5>
            </span>
            <span className="flex flex-col gap-3 mt-3">
              <span className="w-fit pb-2 text-[1.1rem] font-medium border-b-2 border-[#6e6e0696]">
                <h5>What You'll Receive</h5>
              </span>
              <ul className="space-y-3 list-disc pl-6 text-[1.1rem]">
                <li>Complete Digital Marketing / Affiliate Marketing Guide</li>
                <li>Step-by-Step Beginner Roadmap</li>
                <li>Access to 1,000+ Digital Products to Promote</li>
                <li>Proven Marketing Strategies</li>
                <li>Traffic & Promotion Methods</li>
                <li>Affiliate Marketing Resources & Tools</li>
                <li>Future Course Updates</li>
              </ul>
              <span className="w-fit pb-2 text-[1.1rem] font-medium border-b-2 border-[#6e6e0696] text-red-800">
                <h5>Important</h5>
              </span>
              <span className="text-[1rem] ">
                <h5>
                  Please enter an email address that you have access to. Your
                  course materials and download links will be delivered to this
                  email after purchase.
                </h5>
                <h5 className="mt-3">
                  Enter your email below and continue to secure your access.
                </h5>
              </span>
              <span className="mt-2 block">
                <input
                  className="w-full h-16 max-w-100 bg-[#3a38389a] rounded-md pl-2 "
                  placeholder="Enter you Email exp victory@gmail.com"
                  ref={inputRef}
                ></input>
                <button
                  className="w-full mt-4  bg-blue-500 hover:bg-blue-600  font-bold py-3 rounded-lg text-xl text-gray-200"
                  onClick={toPayment}
                >
                  Continue
                </button>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default ThankYouPage;
