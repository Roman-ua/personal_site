import {
  Box,
  Icon,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";

const RangeSlider = ({setSliderValue}) => {
  return (
    <Box alignSelf={'center'} width={'30%'}>
      <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} mb={2}>
        <Icon as={ChevronLeftIcon} color={'gray.400'}/>
        <Text  fontSize={12} color={'gray.400'}># move me</Text>
        <Icon as={ChevronRightIcon} color={'gray.400'}/>
      </Box>
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
