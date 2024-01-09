import React, { useState } from 'react';
import Button from "./button";
import Table from './table';
import "./table-summary.css"


const TableSummary = () => {
    const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };
  return (
    <div className="table-summary-box">
      <div className="summary-box-title">Transactions | This Month</div>
      <div className='btn-box'>
        <Button
          isSelected={selectedButton === 1}
          onClick={() => handleButtonClick(1)}
          btnTitle="Payouts"
          noOfItems="3"
        />
        <Button
          isSelected={selectedButton === 2}
          onClick={() => handleButtonClick(2)}
          btnTitle="Refunds"
          noOfItems="3"
        />
      </div>
      <Table></Table>
    </div>
  );
};

export default TableSummary;
