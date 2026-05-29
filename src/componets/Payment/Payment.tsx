function Payment() {
  return (
    <div className="pl-5 pr-5  flex justify-center  mt-10">
      <div className="w-full">
        <span className="flex  justify-center ">
          <span className="block w-fit p-1 pl-5 pr-5 bg-[#07078dde] rounded-md text-gray-100 font-inter text-[1.1rem] ">
            <h5>Payment Transfer</h5>
          </span>
        </span>
        <div className="flex justify-center ">
          <div className="max-w-150">
            <div className="bg-white w-full flex flex-col  pt-7 pb-7 rounded-md mt-10 ">
              <span className="pl-5 pr-5">
                <h5 className="text-[1.3rem] font-semibold">Bank Transfer</h5>
              </span>
              <div className="flex justify-end pl-5 pr-5  mt-2 w-full border-b-2 pb-1 border-gray-400">
                <span className="flex flex-col gap-2 ">
                  <h5 className="text-[1.2rem] font-medium">
                    nwanoruovictory87@gamil.com
                  </h5>
                  <h5 className="ml-auto text-[1.2rem] font-medium">
                    Pay{" "}
                    <strong className="ml-0.5 text-green-600">NGN 3,500</strong>
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
                          <i className="fa fa-link ml-2 text-blue-500"></i>
                        </span>
                      </span>
                      <span className="flex justify-center gap-1 mt-2">
                        <h5>Expires in</h5>
                        <h5 className="text-[#860808]">10:00</h5>
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
                  <button className="w-full h-fit border-2 border-blue-500 pt-2 pb-2 bg-blue-500 rounded-md text-gray-100 font-bold text-[1.2rem]">
                    I've sent the money
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Payment;
