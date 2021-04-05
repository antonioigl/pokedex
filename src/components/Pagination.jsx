import React from "react";

const Pagination = ({ gotoNextPage}) => (
  <div>
    {gotoNextPage && <button onClick={gotoNextPage}>Show More</button>}
  </div>
);

export default Pagination;