import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import List from "./List";
type ProductsData = {
  _id: string;
  email: string;
  amount: string;
  status: string;
  date: string;
  expiresAt: string;
  __v: number;
};
function NevBar() {
  const [staticProductsData, setStaticProductsData] = useState<ProductsData[]>(
    [],
  );
  const [productsData, setProductsData] = useState<ProductsData[]>([]);
  const [newRequst, setRequst] = useState<boolean>(false);
  const [switchControl, setSwitchControl] = useState<number>(4);
  useEffect(() => {
    const getData = async () => {
      try {
        const url = "http://localhost:3000/all/payment/transactions";
        const requst = await fetch(url, {
          method: "GET",
        });
        const responds = await requst.json();
        if (!responds.ok) {
          throw new Error(responds.massage);
        }
        if (switchControl === 4) {
          setProductsData(responds.data);
        }
        setStaticProductsData(responds.data);
        toast.success(responds.massage);
      } catch (error) {
        toast.error(`Found ${error}`);
      }
    };
    getData();
  }, [newRequst]);
  function newRequstControl() {
    setRequst((prevRequst) => !prevRequst);
  }
  function pendingPayments() {
    setSwitchControl(1);
  }
  function rejectedPayments() {
    setSwitchControl(2);
  }
  function succesfulPayments() {
    setSwitchControl(3);
  }
  function allPayments() {
    setSwitchControl(4);
  }
  useEffect(() => {
    switch (switchControl) {
      case 1:
        const filterProducts = staticProductsData.filter((e) => {
          if (e.status === "pending" || e.status === "inreview") return e;
        });
        setProductsData([...filterProducts]);
        break;
      case 2:
        const filterProducts2 = staticProductsData.filter((e) => {
          if (e.status === "rejected") return e;
        });
        setProductsData([...filterProducts2]);
        break;
      case 3:
        const filterProducts3 = staticProductsData.filter((e) => {
          if (e.status === "succesful") return e;
        });
        setProductsData([...filterProducts3]);
        break;
      case 4:
        setProductsData([...staticProductsData]);
        break;
      default:
        break;
    }
  }, [switchControl]);
  return (
    <>
      <Toaster position="top-center" />
      <div className="flex pl-5 pr-5 justify-center w-full">
        <div className="w-full max-w-200 flex flex-col gap-4 mt-10">
          <span className="flex items-center gap-2">
            <button
              className="bg-[#8f6008] cursor-pointer rounded-full text-gray-100 font-semibold text-[1.1rem] pl-4 pr-4 pt-1 pb-1 w-fit h-fit"
              onClick={pendingPayments}
            >
              Pending payment
            </button>
            {switchControl === 1 && (
              <i className="fa fa-arrow-left text-gray-200 text-[1.5rem]"></i>
            )}
          </span>
          <span className="flex items-center gap-2">
            <button
              className="bg-[#a10707] cursor-pointer rounded-full text-gray-100 font-semibold text-[1.1rem] pl-4 pr-4 pt-1 pb-1 w-fit h-fit"
              onClick={rejectedPayments}
            >
              Rejected payment
            </button>
            {switchControl === 2 && (
              <i className="fa fa-arrow-left text-gray-200 text-[1.5rem]"></i>
            )}
          </span>
          <span className="flex items-center gap-2">
            <button
              className="bg-[#035f03] cursor-pointer rounded-full text-gray-100 font-semibold text-[1.1rem] pl-4 pr-4 pt-1 pb-1 w-fit h-fit"
              onClick={succesfulPayments}
            >
              Successful payment
            </button>
            {switchControl === 3 && (
              <i className="fa fa-arrow-left text-gray-200 text-[1.5rem]"></i>
            )}
          </span>
          <span className="flex items-center gap-2">
            <button
              className="bg-[#07078dde] cursor-pointer rounded-full text-gray-100 font-semibold text-[1.1rem] pl-4 pr-4 pt-1 pb-1 w-fit h-fit"
              onClick={allPayments}
            >
              All payment
            </button>
            {switchControl === 4 && (
              <i className="fa fa-arrow-left text-gray-200 text-[1.5rem]"></i>
            )}
          </span>
        </div>
      </div>
      {/** */}
      <List body={productsData} setRequst={newRequstControl} />
    </>
  );
}
export default NevBar;
