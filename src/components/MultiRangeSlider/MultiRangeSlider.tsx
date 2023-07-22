import './multiRangeSlider.css'
import PropTypes from "prop-types"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { MultiRangeSliderProps } from './types'

const MultiRangeSlider = ({
  min,
  max,
  value,
  onChange,
  height = 30,
  sliderInactiveBackgroundColor = '#e6e6e6',
  sliderActiveBackgroundColor = '#ffa255',
  sliderHeight = 2,
  sliderActiveRadius = 0,
  sliderInactiveRadius = 10,
  thumbColor = '#ffb366',
  thumbRadius = 20,
  thumbBorder = "none",
  thumbHeight = 20,
  thumbWidth = 20
}: MultiRangeSliderProps) => {
  const [minVal, setMinVal] = useState(value[0])
  const [maxVal, setMaxVal] = useState(value[1])
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

  useEffect(() => {
    document.documentElement.style.setProperty('--multi-range-slider-thumb-color', thumbColor)
    document.documentElement.style.setProperty('--multi-range-slider-border-radius', `${thumbRadius}px`)
    document.documentElement.style.setProperty('--multi-range-slider-border', thumbBorder)
    document.documentElement.style.setProperty('--multi-range-slider-height', `${thumbHeight}px`)
    document.documentElement.style.setProperty('--multi-range-slider-width', `${thumbWidth}px`)
  }, []);

  return (
    <div className="container" style={{
      height
    }}>
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
        data-bg={thumbColor}
        style={{
          // backgroundColor: thumbColor
        }}
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
        data-bg={thumbColor}
        style={{
          // backgroundColor: thumbColor
        }}
      />

      <div className="slider" style={{
        height: sliderHeight
      }}>
        <div className="slider__track" style={{
          backgroundColor: sliderInactiveBackgroundColor,
          borderRadius: sliderInactiveRadius
        }} />
        <div ref={range} className="slider__range" style={{
          backgroundColor: sliderActiveBackgroundColor,
          borderRadius: sliderActiveRadius
        }} />
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