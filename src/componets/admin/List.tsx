import ListCard from "./ListCard";
import Footer from "./Footer";
type ProductsData = {
  body: Products[];
  setRequst: () => void;
};
type Products = {
  _id: string;
  email: string;
  amount: string;
  status: string;
  date: string;
  expiresAt: string;
  __v: number;
};
function List(props: ProductsData) {
  const productsData: Products[] | [] = props.body;
  function isTodayTransaction(data: Products[]) {
    let result = 0;
    for (const element of data) {
      const date = element.date.split(" ")[0].toString();

      if (
        `${new Date().getDate()}/${new Date().getMonth() + 1 >= 10 ? new Date().getMonth() + 1 : "0" + (new Date().getMonth() + 1)}/${new Date().getFullYear()}` ===
          date ||
        new Date().toLocaleDateString() === date
      ) {
        result = result + 1;
      }
    }
    return result;
  }
  const todaysPayment = isTodayTransaction(productsData);
  return (
    <>
      <div className="flex justify-center  pl-5 pr-5 mt-10">
        <div className="w-full max-w-200 relative bg-white rounded-md pt-7 pb-7 min-h-70 max-h-120 overflow-hidden ">
          <div className="pl-2 pr-2 flex flex-col gap-2">
            <span className="flex gap-2 text-[1.2rem] font-bold">
              <h5>Total Transactions: </h5>
              <h5>{productsData.length}</h5>
            </span>
            <span className="flex gap-2 text-[1.2rem] font-bold">
              <h5>Todays Transactions: </h5>
              <h5>{todaysPayment}</h5>
            </span>
          </div>
          <div className="grid grid-cols-3 min-[1000px]:grid-cols-4 mt-5 pl-2 border-t-2 border-b-2 pt-2 pb-2 text-[1.1rem] font-bold">
            <span className="border-r-2">
              <h5>Email</h5>
            </span>
            <span className="border-r-2 pl-2">
              <h5>Amount</h5>
            </span>
            <span className="border-r-2 hidden min-[1000px]:block pl-2">
              <h5>Date</h5>
            </span>
            <span className=" pl-2">
              <h5>Status</h5>
            </span>
          </div>
          <div className="pl-2 pr-2 mt-2 pt-2 pb-5 grid grid-cols-1  gap-4 font-medium overflow-y-scroll  h-80 max-h-80">
            {productsData.map((e, i) => {
              return <ListCard key={`card-list-key-${i}`} body={e} />;
            })}
          </div>
        </div>
      </div>
      <Footer setRequst={props.setRequst} />
    </>
  );
}
export default List;
