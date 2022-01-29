import {Box, Slider, SliderFilledTrack, SliderThumb, SliderTrack, useColorModeValue} from "@chakra-ui/react";

const RangeSlider = ({setSliderValue}) => {
  return (
    <Box alignSelf={'center'} width={'20%'}>
      <Slider
        aria-label='slider-ex-6'
        step={1}
        min={0}
        max={4}
        onChange={(val) => setSliderValue(val)}>
        <SliderTrack backgroundColor={useColorModeValue('gray.600', 'gray.300')}>
          <SliderFilledTrack backgroundColor={useColorModeValue('cyan.600', '#64ffda')} />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  )
}
export default RangeSlider
