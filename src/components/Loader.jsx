import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const Loader = () => {
    return (
        <div className="Loader">
            <LoadingSpinner/>
            <h6>Loading</h6>
        </div>
    );
}

export default Loader;