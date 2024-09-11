


import React, { useState } from "react";
import DateComponent from "./datecomponent";

export default function Breakfast() {
    // Use state to manage whether the DateComponent is shown
    const [showDateComponent, setShowDateComponent] = useState(false);

    const handleDatepicker = () => {
        // Toggle the state to show or hide the DateComponent
        setShowDateComponent(!showDateComponent);
    };

    return (
        <>
            <button onClick={handleDatepicker}>Breakfast</button>
            {/* Conditionally render DateComponent based on state */}
            {showDateComponent && <DateComponent foodtype="Breakfast"/>}
        </>
    );
}
