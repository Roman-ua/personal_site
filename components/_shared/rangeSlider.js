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
        <Icon as={ChevronLeftIcon} color={'textColorLight'}/>
        <Text  fontSize={12} color={'textColorLight'}># move me</Text>
        <Icon as={ChevronRightIcon} color={'textColorLight'}/>
      </Box>
      <Slider
        aria-label='slider-ex-6'
        step={1}
        min={0}
        max={4}
        onChange={(val) => setSliderValue(val)}>
        <SliderTrack backgroundColor={useColorModeValue('bgItemDark', 'textColorLight')}>
          <SliderFilledTrack backgroundColor={useColorModeValue('cyanDefault', 'cyanLight')} />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  )
}
export default RangeSlider
