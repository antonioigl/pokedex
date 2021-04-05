import React from "react";
import {Link} from "react-router-dom";

const BackList = ({ gotoNextPage}) => (
    <Link to={'/'} style={{ textDecoration: 'none'}}>
        <button>Back</button>
    </Link>
);

export default BackList;