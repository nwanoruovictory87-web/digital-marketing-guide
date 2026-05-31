type FecthRequst = {
  setRequst: React.Dispatch<React.SetStateAction<boolean>>;
};
function Footer(props: FecthRequst) {
  return (
    <div className="pl-5 pr5 mt-10 flex justify-center mb-20">
      <div className=" max-w-200 w-full flex justify-start">
        <div className=" w-full flex ">
          <button
            className="rounded-lg pl-4 pr-4 p-2 text-[1.2rem] font-medium flex items-center gap-1 bg-[#07078dde] text-gray-200"
            onClick={() => props.setRequst(true)}
          >
            Refresh
            <i className="fa fa-refresh"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Footer;
