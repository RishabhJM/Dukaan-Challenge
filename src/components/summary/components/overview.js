import SummaryCard from "./summary-card";
import "./overview.css"

const Overview = () => {
  return (
    <div className="overview-box">
      <div className="overview-title">
        <span>Overview</span>
        <select name="period" id="time-range-dropdown">
          <option value="This Month">This Month</option>
        </select>
      </div>
      <div className="summary-components">
        <SummaryCard amount="92,312.30" payoutDate="Today, 4:00PM" noOfOrders="13"></SummaryCard>
        <SummaryCard amount="92,312.30" noOfOrders="13"></SummaryCard>
        <SummaryCard amount="92,312.30" noOfOrders="13"></SummaryCard>
      </div>
    </div>
  );
};

export default Overview;
