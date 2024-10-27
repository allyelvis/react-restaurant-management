import React from 'react';

const SalesReport = () => {
  const salesData = [
    { date: '2024-10-01', sales: 200 },
    { date: '2024-10-02', sales: 300 },
  ];

  return (
    <div>
      <h2>Sales Report</h2>
      {salesData.map(data => (
        <div key={data.date}>
          Date: {data.date} - Sales: ${data.sales}
        </div>
      ))}
    </div>
  );
};

export default SalesReport;
