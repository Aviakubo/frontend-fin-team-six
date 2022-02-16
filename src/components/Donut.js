import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
  
  
const Donut = () => {
  
// Sample data
const data = [
  {name: 'Income', amount: 400, fill: 'green'},
  {name: 'Assets', amount: 700, fill: 'green'},
  {name: 'Expenses', amount: 200, fill: 'red'},
  {name: 'Debt', amount: 500, fill: 'red'}
];
  
  
return (
    <>
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="amount" outerRadius={125} innerRadius={75} label/>
        </PieChart>
    </>
);
}
  
export default Donut;