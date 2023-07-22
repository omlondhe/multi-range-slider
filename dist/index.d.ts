import PropTypes from 'prop-types';
import React, { Dispatch, SetStateAction } from 'react';

interface MultiRangeSliderProps {
    min: number;
    max: number;
    value: number[];
    onChange: Dispatch<SetStateAction<number[]>>;
    height?: number;
    sliderInactiveBackgroundColor?: string;
    sliderActiveBackgroundColor?: string;
    sliderHeight?: number;
    sliderInactiveRadius?: number;
    sliderActiveRadius?: number;
    thumbColor?: string;
    thumbRadius?: number;
    thumbBorder?: string;
    thumbHeight?: number;
    thumbWidth?: number;
}

declare const MultiRangeSlider: {
    ({ min, max, value, onChange, height, sliderInactiveBackgroundColor, sliderActiveBackgroundColor, sliderHeight, sliderActiveRadius, sliderInactiveRadius, thumbColor, thumbRadius, thumbBorder, thumbHeight, thumbWidth }: MultiRangeSliderProps): React.JSX.Element;
    propTypes: {
        min: PropTypes.Validator<number>;
        max: PropTypes.Validator<number>;
        onChange: PropTypes.Validator<(...args: any[]) => any>;
    };
};

export { MultiRangeSlider };
