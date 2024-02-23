import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const AnalyticsComp = ({data}) => {


  return (
    <>
    <ResponsiveContainer width={'99%'} height={500}>
      <AreaChart data={data} width={400} height={500}>
  
        <XAxis dataKey="date"  tickFormatter={(date) => new Date(date).toLocaleDateString('en-UB')}/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <CartesianGrid strokeDasharray="5 5" stroke="grey"/>
        <Area type="monotone" dataKey="amount" stroke="#2563eb" fill="#3b82f6" stackId={1}/>
        
        
      </AreaChart>
      </ResponsiveContainer>

    </>
  );
};
export default AnalyticsComp;
