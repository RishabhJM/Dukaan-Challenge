import { useState } from "react";
import "./table.css";

const TABLE_DATA = [
  {
    orderId: 1,
    status: "Processing",
    transactionId: "ABC123",
    refundDate: "2024-01-09",
    orderAmount: "$50.00",
  },
  {
    orderId: 2,
    status: "Shipped",
    transactionId: "DEF456",
    refundDate: "2024-01-10",
    orderAmount: "$75.00",
  },
  {
    orderId: 3,
    status: "Delivered",
    transactionId: "GHI789",
    refundDate: "2024-01-11",
    orderAmount: "$120.00",
  },
  {
    orderId: 4,
    status: "Completed",
    transactionId: "JKL012",
    refundDate: "2024-01-12",
    orderAmount: "$90.00",
  },
  {
    orderId: 5,
    status: "Cancelled",
    transactionId: "MNO345",
    refundDate: "2024-01-13",
    orderAmount: "$30.00",
  },
  {
    orderId: 6,
    status: "Processing",
    transactionId: "ABC123",
    refundDate: "2024-01-09",
    orderAmount: "$50.00",
  },
  {
    orderId: 7,
    status: "Shipped",
    transactionId: "DEF456",
    refundDate: "2024-01-10",
    orderAmount: "$75.00",
  },
  {
    orderId: 3,
    status: "Delivered",
    transactionId: "GHI789",
    refundDate: "2024-01-11",
    orderAmount: "$120.00",
  },
  {
    orderId: 4,
    status: "Completed",
    transactionId: "JKL012",
    refundDate: "2024-01-12",
    orderAmount: "$90.00",
  },
  {
    orderId: 5,
    status: "Cancelled",
    transactionId: "MNO345",
    refundDate: "2024-01-13",
    orderAmount: "$30.00",
  },
  {
    orderId: 1,
    status: "Processing",
    transactionId: "ABC123",
    refundDate: "2024-01-09",
    orderAmount: "$50.00",
  },
  {
    orderId: 2,
    status: "Shipped",
    transactionId: "DEF456",
    refundDate: "2024-01-10",
    orderAmount: "$75.00",
  },
  {
    orderId: 3,
    status: "Delivered",
    transactionId: "GHI789",
    refundDate: "2024-01-11",
    orderAmount: "$120.00",
  },
  {
    orderId: 4,
    status: "Completed",
    transactionId: "JKL012",
    refundDate: "2024-01-12",
    orderAmount: "$90.00",
  },
  {
    orderId: 5,
    status: "Cancelled",
    transactionId: "MNO345",
    refundDate: "2024-01-13",
    orderAmount: "$30.00",
  },
];

const Table = () => {
  const entriesPerPage = 5; //
  const [currentPage, setCurrentPage] = useState(1);
  const totalEntries = TABLE_DATA.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;

  const currentEntries = TABLE_DATA.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="table-container">
      <div className="table-top-bar">
        <div class="search-container-table">
          <img src="/assets/search.png" alt="" />
          <input
            type="text"
            class="search-input-table"
            placeholder="order ID or transaction ID"
          />
        </div>
        <div class="table-top-bar-buttons">
          <button>
            Sort <img src="/assets/Vector.png" alt="" />
          </button>
          <button>
            <img src="/assets/download.png" alt="" />
          </button>
        </div>
      </div>
      <div>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Status</th>
              <th>Transaction ID</th>
              <th>Refund Date</th>
              <th>Order Amount</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((row, index) => (
              <tr key={index}>
                <td>{row.orderId}</td>
                <td>{row.status}</td>
                <td>{row.transactionId}</td>
                <td>{row.refundDate}</td>
                <td>{row.orderAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div class="pagination">
          <button class="arrow" id="prevPage" onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}>
            ← <span class="nav-text">PREV</span>
          </button>
          <div className="pages">
        {[...Array(totalPages)].map((_, index) => (
          <div
            key={index + 1}
            className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </div>
        ))}
      </div>
          <button class="arrow" id="nextPage" onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}>
            <span class="nav-text">NEXT</span> →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
