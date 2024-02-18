import React from "react";
import DateFromat from "../utility/DateFromat";

const ExpenseTable = ({ data }) => {
  return (
    <>
      <div className="overflow-x-auto bg-slate-500  rounded-2xl font-semibold">
        <table className="table">
          <thead className="">
            <tr className="font-extrabold">
              <th>Recent Expense</th>
              <th>Name</th>
              <th >Description</th>
              <th >Date</th>
              <th>Payment Method</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item.category}</td>
                  <td>{item.description}</td>
                  <td >{DateFromat(item.date)}</td>
                  <td className="text-center"><span className="p-2 bg-green-300 w-fit rounded-xl whitespace-pre text-black">{item.payment_method}</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ExpenseTable;
