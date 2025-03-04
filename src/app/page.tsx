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
    <div className="relative w-full">      
      <Image 
        src={info.src}
        alt={info.alt}
        priority={info.priority}
        width={768}
        height={512}
        style={{ objectFit: 'cover', width: 'fill', height: 'auto' }}
        />
    </div>
  ]);

  return (
    <main className="max-w-3xl bg-background-primary">
      <BusinessHourInfoSection />
      <EmblaCarousel
        slides={slides}
      />
      <div className="p-4">
        <p>
          1985年に泉北・御池台にオープンして以来、お子様からご年配の方まで多くのお客様に愛していただいています。<br />
          朝6時のオープンから次々とパンが焼き上がっていき、1日のうちに、定番商品から新作の限定商品も含めて、100種類以上のパンを焼き上げています。新作パンは季節感を第一に試作を重ねたものを焼き上げています。新しいパンの情報は最新情報(Instagram/Facebook)をチェックしてください。
        </p>
      </div>
    </main>
  );
}
