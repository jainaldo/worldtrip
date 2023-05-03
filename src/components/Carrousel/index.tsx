import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Slide, Slider, SliderProps } from "../Slider";

type SlideType= {
  title: string;
  subtitle: string;
  image: {
    url: string;
    alt: string;
  }
}

interface CarrouselProps {
  slides: SlideType[];
}                           

export function Carrousel({ slides }: CarrouselProps) {
  const settings: SliderProps = {
    spaceBetween: 4,
    slidesPerView: 1,
    navigation: true,
    draggable: true,
    pagination: {
      clickable: true,
    },
    loop: slides.length > 1

  }
  return (
    <Flex height="450px" mb="10">
      <Slider settings={settings}>
        {slides.map((slide) => (
          <Slide key={slide.title}>
            <Flex
              align="center"
              justify="center"
              direction="column"
              width="100%"
              height="100%"
              bgImage={slide.image.url}
              backgroundSize={"cover"}
              backgroundRepeat={"no-repeat"}
            >
              <Text fontSize="5xl" fontWeight="700" color="gray.100">
                {slide.title}
              </Text>
              <Text fontSize="2xl" fontWeight="700" color="gray.300" mt="4">
                {slide.subtitle}
              </Text>
            </Flex>
          </Slide>
        ))}
      </Slider>
    </Flex>
  );
}