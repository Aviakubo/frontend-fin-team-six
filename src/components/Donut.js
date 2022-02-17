import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

export default function App({assetValues, incValues, expValues, debtValues}) {
  // console.log({assetAmount})
  // console.log({assetValues})

  let totalAssetAmount = 0;
  let totalIncAmount = 0;
  let totalExpAmount = 0;
  let totalDebtAmount = 0;

  const assetTotal = () => {
    for(let i=0; i<assetValues.length; i++){
      totalAssetAmount += Number(assetValues[i].name)
    }
    return totalAssetAmount
  }

  const incTotal = () => {
    for(let i=0; i<incValues.length; i++){
      totalIncAmount += Number(incValues[i].name)
    }
    return totalIncAmount
  }

  const expTotal = () => {
    for(let i=0; i<expValues.length; i++){
      totalExpAmount += Number(expValues[i].name)
    }
    return totalExpAmount
  }

  const debtTotal = () => {
    for(let i=0; i<debtValues.length; i++){
      totalDebtAmount += Number(debtValues[i].name)
    }
    return totalDebtAmount
  }

  const data = [
    { name: "Expenses", value: expTotal(), fill: "#023E8A" },
    { name: "Income", value: incTotal(), fill: "#00B4D8"},
    { name: "Asset", value: assetTotal(), fill: "#023E8A" },
    { name: "Debt", value: debtTotal(), fill: "#00B4D8"}
  ];
  
  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`$ ${value}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999">
        </text>
      </g>
    );
  };
  

  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <PieChart style={{
      position: 'relative', left: '50%', top: '50%',
      transform: 'translate(-50%)'
    }} width={600} height={600}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={300}
        cy={300}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  );
}
