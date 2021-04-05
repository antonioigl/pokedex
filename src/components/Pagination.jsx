import React from "react";

const Pagination = ({ gotoNextPage}) => (
  <div>
    {gotoNextPage && <button onClick={gotoNextPage}>Ver más</button>}
  </div>
);

export default Pagination;