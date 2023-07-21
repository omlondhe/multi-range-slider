import './multiRangeSlider.css'
import PropTypes from "prop-types"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { MultiRangeSliderProps } from './types'

const MultiRangeSlider = ({
  min,
  max,
  value,
  onChange
}: MultiRangeSliderProps) => {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const range = useRef<HTMLDivElement>(null)
  const minValRef = useRef<HTMLInputElement>(null)
  const maxValRef = useRef<HTMLInputElement>(null)

  // Convert to percentage
  const getPercent = useCallback((value: number) => {
    return Math.round(((value - min) / (max - min)) * 100)
  }, [min, max])

  useEffect(() => {
    setMinVal(value[0])
    setMaxVal(value[1])
  }, [value])

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal)
      const maxPercent = getPercent(+maxValRef.current.value) // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [minVal, getPercent])

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value)
      const maxPercent = getPercent(maxVal)

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [maxVal, getPercent])

  // Get min and max values when their state changes
  useEffect(() => {
    onChange([minVal, maxVal])
  }, [minVal, maxVal, onChange])

  return (
    <div className="container">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1)
          setMinVal(value)
          event.target.value = value.toString()
        }}
        className={`thumb thumb--zindex-3 ${
          minVal > max - 100 ? "thumb--zindex-5" : ""
        }`}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1)
          setMaxVal(value)
          event.target.value = value.toString()
        }}
        className="thumb thumb--zindex-4"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
      </div>
    </div>
  )
}

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default MultiRangeSlider