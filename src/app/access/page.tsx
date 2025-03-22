import Image from "next/image";

export default function AccessPage() {
  return (
    <main className="flex flex-col gap-8 py-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-primary px-4">SAKAGUCHIへのアクセス</h1>
        <p className="px-4">SAKAGUCHIへご来店いただく際のアクセス方法についてご案内いたします。</p>
      </div>
      <div>
        <Image
          src={"/img/map.png"}
          alt={"パン工房SAKAGUCHIの地図"}
          width={909}
          height={414}
          style={{ objectFit: 'cover', width: 'fill', height: 'auto'}}
        />
        <address className="bg-secondary px-2 py-1 not-italic">〒590-0134 大阪府堺市南区御池台3丁1-18</address>
      </div>
      <div className="flex flex-col gap-1 px-4">
        <div className="font-bold text-lg text-primary">車でお越しの方</div>
        <div className="flex flex-col gap-1 font-xs">
          <p>お車でお越しの方は、大阪府道61号 堺かつらぎ線（泉北2号線）からお越しいただくとわかりやすいです。「御池台2丁南」の交差点を住宅地方面に曲がっていただき、いちょう並木の坂を登りきって少し直進いただくと、御池台センターに通じる道に左折できます。</p>
          <p>駐車場はSAKAGUCHI専用・御池台センター共用がございますので、空いている方に駐車ください（※路上駐車は近隣の方々にご迷惑となりますのでおやめください）</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 px-4">
        <div className="font-bold text-lg text-primary">バスでお越しの方</div>
        <div className="flex flex-col gap-1 font-xs">
          <p>南海バス「御池台回り(32系統)」にて、栂・美木多駅より約7分「御池台センター」にて下車ください。下車後、徒歩3分ほどでお越しいただけます。</p>
        </div>
      </div>

    </main>
  );
}