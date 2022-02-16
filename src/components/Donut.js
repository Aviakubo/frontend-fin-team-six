import React from 'react';
import { PieChart, Pie} from 'recharts';
  
  
const Donut = () => {
  
// Sample data
const data = [
  {name: 'Income', amount: 400},
  {name: 'Assets', amount: 700},
  {name: 'Expenses', amount: 200},
  {name: 'Debt', amount: 1000}
];
  
  
return (
        <PieChart width={700} height={700}>
          <Pie data={data} dataKey="amount" outerRadius={250} innerRadius={150} fill="green" />
        </PieChart>
);
}
  
export default Donut;