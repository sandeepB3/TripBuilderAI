import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell,Tooltip,Legend } from 'recharts';
import { Grid } from "@material-ui/core";
import '../styles/Itinerary.css';

export default function PriceBreakupChart({ travelBudget, stayBudget, miscellaneous }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Calculate the base price, taxes, and fees
    

    // Update the state with chart data
    const data = [
      { name: 'Travel Budget', value: travelBudget },
      { name: 'Stay Budget', value: stayBudget },
      { name: 'Food and Attractions:', value: miscellaneous },
    ];
    setChartData(data);
  }, [travelBudget,stayBudget,miscellaneous]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div>
      <br></br>
      <h2 style={{fontWeight: "bold", fontSize: 30, textAlign: "center", fontFamily: "Arial"}}>Price Breakup</h2>
      {/* <Grid className=' inner-graphs'> */}
        {/* <Grid className='inner-grid' itesm xs={12}> */}
        
        {/* <div style={{ marginBottom: 0}}> */}
        <PieChart width={500} height={450} style={{textAlign: "center", alignItems: "center"}}>
        <Pie
          dataKey="value"
          data={chartData}
          cx={200}
          cy={200}
          outerRadius={140}
          fill="#8884d8"
          labelLine={true}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
      {/* </div> */}
        {/* </Grid> */}
      {/* </Grid> */}
    </div>
  );
}

// export default PriceBreakupChart;

     {/* <table>
        <tbody>
          {chartData.map((entry,index) => (
            <tr key={entry.name}>
              <td>{entry.name}:</td>
              <td>${entry.value.toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td>Total Price:</td>
            <td>${totalPrice.toFixed(2)}</td>
          </tr>
        </tbody>
      </table> */}