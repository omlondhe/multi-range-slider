# Two Thumb Range Slider
> A fully customizable multi-range slider component by Om Prashant Londhe.


## Context
😢 I spent 3 hours searching for a package that could provide two thumb range sliders with customisation but did not find anything similar to what I wanted.
🧑‍💻 After that, I went ahead and created my own in 2 hours.
😇 I am trying to provide this package to everyone so that you can customize it and use it according to your needs.

## Demo

https://github.com/omlondhe/two-thumb-range-slider/assets/61611599/aaee273e-8507-4ce8-901c-0cd946ebe13d



## How to install?
```
npm i two-thumb-range-slider
```

## How to use?
Usage in React powered application 👇:
```typescript
export const MultiRangeSliderBasicUsage = () => {
    const [value, setValue] = useState([1, 100]);
    return <MultiRangeSlider min={1} max={1000} value={value} onChange={setValue} />
}
```

Just do this and you are ready to rock! 🥳

## Required props
```typescript
min: number
max: number
value: number[]
onChange: Dispatch<SetStateAction<number[]>>
```

## Customisations
1. `height?: number;`: Defines the height of the slider container
2. `sliderInactiveBackgroundColor?: string;`: Background colour of inactive portion of the slider.
3. `sliderActiveBackgroundColor?: string;`: Background colour of the active portion of the slider.
4. `sliderHeight?: number;`: Defines the height of the slider.
5. `sliderInactiveRadius?: number;`: Radius for the inactive portion of the slider.
6. `sliderActiveRadius?: number;`: Radius for the active portion of the slider.
7. `thumbColor?: string;`: Thumb colour of the slider.
8. `thumbRadius?: number;`: Thumb radius for the slider.
9. `thumbBorder?: string;`: Border of thumb of the slider.
10. `thumbHeight?: number;`: Manages the height of the slider thumb.
11. `thumbWidth?: number;`: Manages the width of the slider thumb.

_More customisations are on the way......_


## Request
Please report bugs and contribute to this project if you want to give back to the community. 🙏
All contributions are welcome 🎉!
