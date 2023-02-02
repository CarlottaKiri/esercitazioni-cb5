import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function Gallery() {
  return (
    <Slider autoplay={1000}>
      <Image
        src="https://picsum.photos/700/400?grayscale"
        width={700}
        height={400}
      />
      <Image src="https://picsum.photos/700/400" width={700} height={400} />
      <Image
        src="https://picsum.photos/seed/picsum/700/400?grayscale"
        width={700}
        height={400}
      />
    </Slider>
  );
}
