import React, { useState } from "react";
import MultiRangeSlider from "./MultiRangeSlider";

export default {
    title: 'MultiRangeSlider',
    parameters: {
        description: "This is fully customizable multi-range-slider developed using ReactJS by Om Prashant Londhe."
    }
}

export const MultiRangeSliderDefault = () => {
    const [value, setValue] = useState([1, 100]);
    return <MultiRangeSlider min={1} max={100} value={value} onChange={setValue} />
}
