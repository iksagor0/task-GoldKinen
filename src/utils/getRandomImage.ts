import image1 from "../assets/1.jpg";
import image10 from "../assets/10.jpg";
import image11 from "../assets/11.jpg";
import image12 from "../assets/12.jpg";
import image13 from "../assets/13.jpg";
import image14 from "../assets/14.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";
import image7 from "../assets/7.jpg";
import image8 from "../assets/8.jpg";
import image9 from "../assets/9.jpg";

const images: string[] = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
];

export function getRandomImage(): string {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}
