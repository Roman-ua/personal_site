import {Box, Slider, SliderFilledTrack, SliderThumb, SliderTrack} from "@chakra-ui/react";

const RangeSlider = ({setSliderValue}) => {
  return (
    <Box display={'flex'} alignContent={'flex-end'}>
      <Slider
        alignSelf={'flex-end'}
        maxW={'30%'}
        aria-label='slider-ex-6'
        step={1}
        min={0}
        max={4}
        onChange={(val) => setSliderValue(val)}>
        <SliderTrack>
          <SliderFilledTrack backgroundColor={'red'} />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  )
}
export default RangeSlider
