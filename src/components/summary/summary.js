import Overview from "./components/overview";
import TopBar from "./components/top-bar";
import TableSummary from "./components/table-summary";

const Summary = ()=> {
    return (
        <div className="summary-box">
            <TopBar></TopBar>
            <Overview></Overview>
            <TableSummary></TableSummary>
        </div>
    );
}

export default Summary;