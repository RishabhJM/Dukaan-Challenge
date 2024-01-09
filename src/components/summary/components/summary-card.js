import "./summary-card.css";

const SummaryCard = (props) => {
  return (
    <div className="summary-card-container">
      <div className="next-payout-text">
        <span>Next Payout</span>
        <img src="/assets/question-mark-circled.svg" alt="" />
      </div>

      <span className="amount">₹{props.amount}</span>
      <br />
      {props.payoutDate && <span className="payout-date-text">
        Next payout date: 
        <span className="payout-date">{props.payoutDate}</span>
      </span>
      }
      
      <br />
      <a href="/">View {props.noOfOrders} Orders</a>
    </div>
  );
};

export default SummaryCard;
