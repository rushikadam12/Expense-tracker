import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



const Linechart = ({data}) => {
  return (
    <ResponsiveContainer width={"100%"} height={500}>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" stroke={'white'}/>
          <YAxis stroke={'white'}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="budget" stroke="#82ca9d" />
        </LineChart>
    </ResponsiveContainer>
  );
};

export default Linechart;
