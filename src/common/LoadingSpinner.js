import React from "react";
import "./LoadingSpinner.css";

/** Loading message used by components that will fetch the API data */

const LoadingSpinner = () => {
    return (
        <div className="LoadingSpinner">
            Loading...
        </div>
    );
}

export default LoadingSpinner;