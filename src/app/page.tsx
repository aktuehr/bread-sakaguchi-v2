import Image from "next/image";
import { EmblaCarousel } from "./components/EmblaCarousel";
import BusinessHourInfoSection from "./features/BusinessHourInfoSection";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import MenuSection from "./features/MenuSection";
import { MaterialSymbol } from "react-material-symbols";
import 'react-material-symbols/rounded';
import { ROUTES } from "./constants/routes";
import NewsListItem from "./features/NewsListItem";
import Link from "next/link";

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

  const temporaryNoticeImages = [
    {
      src: "/bread-sakaguchi/img/temporary-notice/202503_point-card.png",
      alt: "ポイントカードサービスについて、6/1から500円でシール1枚進呈、30枚貯まったら台紙提示で300円引きと変更させていただきます。",
    },
  ]
  const slides = carouselImageInfo.map((info) =>
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
  );

  return (
    <main className="max-w-3xl bg-background-primary mx-auto">
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
      {
        temporaryNoticeImages &&
        temporaryNoticeImages.map((info) =>
          <div className="p-4 grid grid-cols-1 gap-4 bg-[var(--color-background-accent-pink)]">
            <h2 className="font-bold text-[var(--color-text-accent-pink)]">臨時のお知らせ</h2>
            <div className="mx-auto">
              <Zoom>
                <img
                  src={info.src}
                  alt={info.alt}
                  className="max-w-xs"
                  />
              </Zoom>
            </div>
          </div>
        )
      }
      <MenuSection
        title={'SAKAGUCHIのこだわり'}
        linkText={'SAKAGUCHIのこだわり'}
        linkHref={ROUTES.ABOUT}
        rightIcon={<MaterialSymbol icon='chevron_right' size={24} />}
      >
        <div className="grid grid-cols-1 gap-4">
          <Image
            src="/bread-sakaguchi/img/commitment.png"
            alt="おいしさの秘密は「北海道産小麦」へのこだわり。SAKAGUCHIが作り上げた北海道ブランド小麦のオリジナルブレンド"
            width={768}
            height={265}
          />
          <p>
            パンの命とも言える小麦は北海道産にこだわってブレンドしています。<br />
            小麦についてや、パンを作り上げる上で重要となる製法についてご紹介します。
          </p>
        </div>
      </MenuSection>
      <MenuSection
        title={'SAKAGUCHIのパン紹介'}
        linkText={'SAKAGUCHIのパン紹介'}
        linkHref={ROUTES.CATEGORY}
        rightIcon={<MaterialSymbol icon='chevron_right' size={24} />}
      >
        <div className="grid grid-cols-1 gap-4">
          <p>
            SAKAGUCHIでは毎日100種類以上のパンを焼き上げています。<br />
            ほぼ全てのパンが国産小麦のみを使用して焼き上げております。<br />
            お食事のシーンにぴったりの食べ応えのあるパンから、おやつのシーンにぴったりな甘〜いパンなど、きっとその日の気分にマッチしたパンが見つかると思います。<br />
            フランスパン・天然酵母のパン・サンドイッチなど、パンのジャンルに分けて紹介をしていますので、ご来店の際の参考にご覧ください。
          </p>
        </div>
      </MenuSection>
      <MenuSection
        title={'SAKAGUCHIへのアクセス'}
        linkText={'SAKAGUCHIへのアクセス'}
        linkHref={ROUTES.ACCESS}
        rightIcon={<MaterialSymbol icon='chevron_right' size={24} />}
      >
        <div className="grid grid-cols-1 gap-4">
          <p>
            パン工房SAKAGUCHIは、御池台センターの中にあります。<br />
            SAKAGUCHIへは車かバスが便利です。<br />
            駐車場も専用駐車場の他、御池台センターと共用の駐車場がございます。<br />
            具体的なアクセス方法や、地図・駐車場のご案内についての詳細はこちらからご確認ください。
          </p>
        </div>
      </MenuSection>
      <MenuSection
        title={'SAKAGUCHIへのお電話'}
        linkText={'SAKAGUCHIへのお電話'}
        linkHref={ROUTES.INQUIRY}
        rightIcon={<MaterialSymbol icon='chevron_right' size={24} />}
      >
        <div className="grid grid-cols-1 gap-4">
          <p>
            SAKAGUCHIへのお問い合わせや、パンのご予約はフリーダイヤルが便利です。<br />
            お電話にあたっての詳細情報はこちらからご確認ください。
          </p>
        </div>
      </MenuSection>
      <div className="p-4">
        <h2 className="font-bold text-primary">最新情報</h2>
        <div className="flex gap-1">
          <Image
            src={'/bread-sakaguchi/img/instagram.png'}
            width={150}
            height={184}
            style={{ width: '150px', height: '184px', objectFit: 'contain' }}
            alt={"パン工房SAKAGUCHIのInstagramアカウントのQRコード"}
            />
          <div className="flex flex-col gap-1 w-full">
            <div>最新情報はInstagramで随時更新しております。</div>
            <div className="p-1 grid gap-1">
              <NewsListItem emoji="🏠" emojiLabel="家の絵文字">店内・店頭の様子</NewsListItem>
              <NewsListItem emoji="🥐" emojiLabel="クロワッサンの絵文字">新作パン・期間限定パンのご紹介</NewsListItem>
              <NewsListItem emoji="🍞" emojiLabel="食パンの絵文字">各種人気パンのご紹介</NewsListItem>
              <NewsListItem emoji="📅" emojiLabel="カレンダーの絵文字">連休や年末年始等の営業のお知らせ</NewsListItem>
            </div>
            <div>
              など、営業日は毎朝更新しております。フォローよろしくお願いします。
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-center p-4">
        <Link href={ROUTES.TOPIC.ECOBAG}>    
          <div className="border border-primary rounded-lg overflow-hidden shadow-[0_2px_8px_0_rgba(0,0,0,0.4)] active:shadow-[0_1px_2px_0_rgba(0,0,0,0.4)] active:translate-y-0.5 transition-shadow duration-100">
            <Image
              src={'/bread-sakaguchi/img/feature/eco-bag/eco-bag-banner.png'}
              width={364}
              height={121}
              style={{ width: '364px', height: '121px' }}
              alt={"SAKAGUCHIオリジナルエコバッグの紹介です"}
              />
            <span className="block p-2">SAKAGUCHIオリジナルエコバッグの紹介です</span>
          </div>
        </Link>
      </div>
    </main>
  );
}
