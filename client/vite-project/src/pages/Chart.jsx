import React from 'react';
import 'charts.css'
const AreaChart = () => {
  return (
    <div id="area-example-5" className='chart'>
      <table className="charts-css area multiple hide-data show-labels">
        <div className='px-2 py-1 flex gap-2'>
        <p className='px-3 py-1 bg-red-500 w-fit text-black rounded-lg'>Expense</p>
        <p className='px-3 py-1 bg-yellow-200 w-fit text-black rounded-lg'>Expense</p>
        </div>
        <thead>
          <tr>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">2010</th>
            <td style={{ '--start': 0.5, '--end': 0.8 }}>
              <span className="data ">20</span>
            </td>
            <td style={{ '--start': 0.2, '--end': 0.5 }}>
              <span className="data">50</span>
            </td>
            <td style={{ '--start': 0.4, '--end': 0.1 }}>
              <span className="data">10</span>
            </td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
};

export default AreaChart;
