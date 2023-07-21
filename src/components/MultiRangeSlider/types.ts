import { Dispatch, SetStateAction } from "react"

export interface MultiRangeSliderProps {
    min: number
    max: number
    value: number[]
    onChange: Dispatch<SetStateAction<number[]>>
}