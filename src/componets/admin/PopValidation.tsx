import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
type Body = {
  _id: string;
  email: string;
  amount: string;
  status: string;
  date: string;
  expiresAt: string;
  __v: number;
};
type PopControlAndData = {
  popControl: React.Dispatch<React.SetStateAction<boolean>>;
  body: Body;
};
function PopValidation(props: PopControlAndData) {
  const color = (type: string): string | undefined => {
    if (type === "inreview") return "blue";
    if (type === "pending") return "orange";
    if (type === "rejected") return "red";
    if (type === "succesful") return "green";
  };
  const statusColor = color(props.body.status);
  const [onRequst, setOnRequst] = useState<boolean>(false);
  async function validatePayment() {
    if (onRequst) return;
    setOnRequst(true);
    try {
      const url =
        "https://digital-marketing-guide-backend.onrender.com/validate/payment/paid/admin";
      const body = {
        paymentId: props.body._id,
      };
      const requst = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const responds = await requst.json();
      if (!responds.ok)
        return (toast.error(responds.massage), setOnRequst(false));
      toast.success(responds.massage);
      setOnRequst(false);
    } catch (error) {
      toast.error(`Found Error : ${error}`);
      setOnRequst(false);
    }
  }
  async function rejectPayment() {
    if (onRequst) return;
    setOnRequst(true);
    try {
      const url =
        "https://digital-marketing-guide-backend.onrender.com/validate/payment/reject/admin";
      const body = {
        paymentId: props.body._id,
      };
      const requst = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const responds = await requst.json();
      if (!responds.ok)
        return (toast.error(responds.massage), setOnRequst(false));
      toast.success(responds.massage);
      setOnRequst(false);
    } catch (error) {
      toast.error(`Found Error : ${error}`);
      setOnRequst(false);
    }
  }
  return (
    <>
      <Toaster position="top-center" />
      <div className="flex justify-center w-full top-0  -ml-2 absolute z-10">
        <div className="bg-gray-100 pt-10 pb-10 pl-5 pr-5 flex justify-center w-full h-120 rounded-md">
          <div className="w-full max-w-100">
            <span className="flex w-full justify-end ">
              <i
                className="fa fa-xmark text-[1.5rem]"
                onClick={() => props.popControl(false)}
              ></i>
            </span>
            <div className="bg-[#aca6a6] w-full  mt-10 h-fit rounded-md pt-5 pl-2 pr-2 pb-5 flex flex-col gap-2 font-medium text-[1.1rem]">
              <span className="flex gap-2">
                <h5>Email:</h5>
                <h5>{props.body.email}</h5>
              </span>
              <span className="flex gap-2">
                <h5>Amount: </h5>
                <h5>₦{props.body.amount.toLocaleUpperCase()}</h5>
              </span>
              <span className="flex gap-2">
                <h5>Date: </h5>
                <h5>{props.body.date}</h5>
              </span>
              <span className="flex gap-2">
                <h5>Status: </h5>
                <h5
                  className=""
                  style={{
                    color: statusColor,
                  }}
                >
                  {props.body.status}
                </h5>
              </span>
            </div>
            <button
              className="mt-5 w-full pl-4 pr-4 pt-4 pb-4 border-2 border-green-800 bg-green-800 text-gray-200 font-bold text-[1.2rem] rounded-2xl"
              onClick={validatePayment}
            >
              I've seen payment
            </button>
            <button
              className="mt-3 w-full pl-4 pr-4 pt-4 pb-4 border-2 border-red-800 bg-red-800 text-gray-200 font-bold text-[1.2rem] rounded-2xl"
              onClick={rejectPayment}
            >
              Reject payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default PopValidation;
