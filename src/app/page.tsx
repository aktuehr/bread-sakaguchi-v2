import { EmblaCarousel } from "./components/EmblaCarousel";
import BusinessHourInfoSection from "./features/BusinessHourInfoSection";

export default function Home() {
  const slides = [
    <div>aaa</div>,
    <div>bbb</div>,
    <div>ccc</div>,
  ];

  return (
    <main>
      <BusinessHourInfoSection />
      <EmblaCarousel
        slides={slides}
      />
    </main>
  );
}
