import Image from "next/image";
import { EmblaCarousel } from "./components/EmblaCarousel";
import BusinessHourInfoSection from "./features/BusinessHourInfoSection";

export default function Home() {
  const carouselImageInfo = [
    {
      src: "/bread-sakaguchi/img/carousel01.jpg",
      alt: "パン工房SAKAGUCHIのパンの写真",
      priority: true,
    },
    {
      src: "/bread-sakaguchi/img/carousel02.jpg",
      alt: "パン工房SAKAGUCHIの店外写真",
      priority: false,
    },
    {
      src: "/bread-sakaguchi/img/carousel03.jpg",
      alt: "パン工房SAKAGUCHIの店内の写真",
      priority: false,
    },
    {
      src: "/bread-sakaguchi/img/carousel04.jpg",
      alt: "パン工房SAKAGUCHIの食パンの写真",
      priority: false,
    },
    {
      src: "/bread-sakaguchi/img/carousel05.jpg",
      alt: "パン工房SAKAGUCHIの天然酵母ライ麦ブレッドの写真",
      priority: false,
    },
  ];
  const slides = carouselImageInfo.map((info) => [
    <div className="relative w-full pt-[66.67%]">      
      <Image 
        src={info.src}
        alt={info.alt}
        priority={info.priority}
        fill
        style={{ objectFit: 'cover'}}
        />,
    </div>
  ]);

  return (
    <main>
      <BusinessHourInfoSection />
      <EmblaCarousel
        slides={slides}
      />
    </main>
  );
}
