import React from "react";
import {Link} from "react-router-dom";

const BackList = () => (
    <Link to={'/pokedex'} style={{ textDecoration: 'none'}}>
        <button>Back</button>
    </Link>
);

export default BackList;