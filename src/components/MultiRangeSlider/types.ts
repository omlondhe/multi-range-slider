import { Dispatch, SetStateAction } from "react"

export interface MultiRangeSliderProps {
    min: number
    max: number
    value: number[]
    onChange: Dispatch<SetStateAction<number[]>>

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