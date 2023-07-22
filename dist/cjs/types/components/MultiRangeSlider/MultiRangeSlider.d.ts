import './multiRangeSlider.css';
import PropTypes from "prop-types";
import React from "react";
import { MultiRangeSliderProps } from './types';
declare const MultiRangeSlider: {
    ({ min, max, value, onChange, height, sliderInactiveBackgroundColor, sliderActiveBackgroundColor, sliderHeight, sliderActiveRadius, sliderInactiveRadius, thumbColor, thumbRadius, thumbBorder, thumbHeight, thumbWidth }: MultiRangeSliderProps): React.JSX.Element;
    propTypes: {
        min: PropTypes.Validator<number>;
        max: PropTypes.Validator<number>;
        onChange: PropTypes.Validator<(...args: any[]) => any>;
    };
};
export default MultiRangeSlider;
