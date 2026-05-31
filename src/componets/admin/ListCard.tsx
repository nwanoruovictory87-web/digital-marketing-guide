import { useState } from "react";
import PopValidation from "./PopValidation";
type ProductsData = {
  body: {
    _id: string;
    email: string;
    amount: string;
    status: string;
    date: string;
    expiresAt: string;
    __v: number;
  };
};
function ListCard(props: ProductsData) {
  const [popUpControl, setPopUpControl] = useState<boolean>(false);
  function popControl() {
    setPopUpControl(!popUpControl);
  }
  const color = (type: string): string | undefined => {
    if (type === "inreview") return "blue";
    if (type === "pending") return "orange";
    if (type === "rejected") return "red";
    if (type === "succesful") return "green";
  };
  const statusColor = color(props.body.status);
  return (
    <>
      {popUpControl && (
        <PopValidation popControl={setPopUpControl} body={props.body} />
      )}
      <span
        className="grid grid-cols-3 min-[1000px]:grid-cols-4 h-fit"
        onClick={popControl}
      >
        <span className="overflow-hidden ">
          <h5>{props.body.email}</h5>
        </span>
        <span className="overflow-hidden  pl-4">
          <h5>{props.body.amount}</h5>
        </span>
        <span className="overflow-hidden hidden min-[1000px]:block pl-4">
          <h5>{props.body.date}</h5>
        </span>
        <span
          className="overflow-hidden pl-5 "
          style={{
            color: statusColor,
          }}
        >
          <h5>{props.body.status}</h5>
        </span>
      </span>
    </>
  );
}
export default ListCard;
