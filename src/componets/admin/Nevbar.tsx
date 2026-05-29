function NevBar() {
  return (
    <div className="flex pl-5 pr-5 justify-center w-full">
      <div className="w-full max-w-200 flex flex-col gap-4 mt-10">
        <span>
          <button className="bg-[#8f6008] cursor-pointer rounded-full text-gray-100 font-semibold text-[1.1rem] pl-4 pr-4 pt-1 pb-1 w-fit h-fit">
            Pending payment
          </button>
        </span>
        <span>
          <button className="bg-[#a10707] cursor-pointer rounded-full text-gray-100 font-semibold text-[1.1rem] pl-4 pr-4 pt-1 pb-1 w-fit h-fit">
            Rejected payment
          </button>
        </span>
        <span>
          <button className="bg-[#035f03] cursor-pointer rounded-full text-gray-100 font-semibold text-[1.1rem] pl-4 pr-4 pt-1 pb-1 w-fit h-fit">
            Soccessful payment
          </button>
        </span>
        <span className="flex items-center gap-2">
          <button className="bg-[#07078dde] cursor-pointer rounded-full text-gray-100 font-semibold text-[1.1rem] pl-4 pr-4 pt-1 pb-1 w-fit h-fit">
            All payment
          </button>
          <i className="fa fa-arrow-left text-gray-200 text-[1.5rem]"></i>
        </span>
      </div>
    </div>
  );
}
export default NevBar;
