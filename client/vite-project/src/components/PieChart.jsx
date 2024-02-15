import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const Piechart = ({ data }) => {
  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };
  return (
    <>
      <ResponsiveContainer width={"100%"} height={500}>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="category"  />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="description" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="amount" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="payment_method" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};

export default Piechart;