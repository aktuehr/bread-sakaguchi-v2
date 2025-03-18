'use client';

import { ROUTES } from "../constants/routes";
import CategoryCard from "./features/CategoryCard";

export default function CategoryPage() {
  return (
    <main className="flex flex-col gap-8 py-8">
      <h1 className='text-2xl font-bold text-primary px-4'>SAKAGUCHIのパン紹介</h1>
      <p className="px-4">SAKAGUCHIでは毎日計100種類以上のパンを焼き上げています。種類毎にご紹介します。是非気になるパンを見つけてください。</p>
      <div className="grid grid-cols-2 gap-2 px-4">
        <CategoryCard categoryName={'菓子パン'} linkHref={ROUTES.CATEGORY.KASHIPAN}>
          <p>SAKAGUCHIの菓子パンは、定番のものはもちろん、お子様に喜んでいただける様なかわいい形をした菓子パンや、大人のコーヒータイム・ティータイムにぴったりなこだわりの菓子パンまで種類が非常に豊富です。</p>
          <p>店頭には季節の菓子パンが並ぶこともありますので、是非お気に入りの菓子パンを見つけてください。</p>
        </CategoryCard>
        <CategoryCard categoryName={'惣菜パン'} linkHref={ROUTES.CATEGORY.SOUZAIPAN}>
          <p>朝食にお弁当に大活躍の惣菜パン。</p>
          <p>SAKAGUCHIの惣菜パンはバリエーション豊かで毎日来ても飽きません。</p>
          <p>ピザシリーズはボリュームもたっぷり。意外な組み合わせのパンも絶品なのでお試しください。</p>
        </CategoryCard>
        <CategoryCard categoryName={'クロワッサン'} linkHref={ROUTES.CATEGORY.CROISSANT}>
          <p>バターをパン生地に練りこんで焼き上げるクロワッサン。サクサクとした食感と甘みが特徴的です。</p>
          <p>プレーンなクロワッサンはもちろん、SAKAGUCHI特製のクリームをサンドしたものなど、デザート感覚でお楽しみいただける商品も人気です。</p>
        </CategoryCard>
        <CategoryCard categoryName={'デニッシュ'} linkHref={ROUTES.CATEGORY.DANISH}>
          <p>デニッシュは、デンマーク発祥のパン。</p>
          <p>ミルフィーユ上に包みあげ焼き上げ、サクッとした食感が特徴です。SAKAGUCHIではフルーツやクリームを包み込んだスイーツ系が充実しています。</p>
          <p>惣菜系では、ゴルゴンゾーラのベーコンデニッシュは大人な味わいに仕上げています。</p>
        </CategoryCard>
        <CategoryCard categoryName={'フランスパン'} linkHref={ROUTES.CATEGORY.FRENCH_BREAD}>
          <p>SAKAGUCHIで焼き上げる自慢のフランスパン。</p>
          <p>外はカリッとした焼き上がりで、中はふんわりやわらかな食感に仕上げたソフトフランスです。</p>
          <p>バタールなど大きめのソフトフランスは、ご希望に応じてカットいたしますのでお申し付けください。</p>
          <p>ご自宅のホームパーティなどにいかがですか。</p>
          <p>また、惣菜パンとしても、菓子パンとしても楽しんでいただけるよう、ソフトフランスに相性ピッタリな具材をSAKAGUCHI流に組み合わせたパンもございます。こちらも是非お試しください。</p>
        </CategoryCard>
        <CategoryCard categoryName={'天然酵母のパン'} linkHref={ROUTES.CATEGORY.TENNENKOUBO}>
          <p>イーストではなく、天然の酵母でじっくりと発酵させて焼き上げた天然酵母のパン。</p>
          <p>SAKAGUCHIでは風味・香りがとても豊かなパンが引き立つような素材をチョイスしています。</p>
          <p>一見シンプルに見えるパンも、噛めば口の中から豊かな香りが広がっていきます。是非一度お試しください。</p>
        </CategoryCard>
        <CategoryCard categoryName={'ドーナツ'} linkHref={ROUTES.CATEGORY.DONUT}>
          <p>みんな大好きのドーナツ。SAKAGUCHIでは惣菜パンの定番「カレードーナツ」が人気。</p>
          <p>チーズフォンデュ入りや半熟卵入りもあり、食べ応えがあります。</p>
          <p>他にもおやつにぴったりな「ケーキドーナツ」など、菓子パンのドーナツも種類が豊富です。</p>
        </CategoryCard>
        <CategoryCard categoryName={'ロールパン・塩パン'} linkHref={ROUTES.CATEGORY.ROLLPAN}>
          <p>生地をくるくると巻き上げて焼き上げるロールパン。</p>
          <p>ブームになった塩パンも、ロールパンの一種です。</p>
          <p>SAKAGUCHIの塩パンは外はカリッとした食感で、中からバターの香りがお口いっぱいに広がります。是非お試しください。</p>
        </CategoryCard>
        <CategoryCard categoryName={'サンドイッチ'} linkHref={ROUTES.CATEGORY.SANDWICH}>
          <p>子供から大人まで人気のサンドイッチ。</p>
          <p>フレッシュな野菜やハム、たまご、カツなどをSAKAGUCHIの食パンでサンドしています。</p>
          <p>ラインナップも豊富で、いろんな種類を食べたい方のためのBOXも用意しています。また、フルーツサンドなど、デザート系のサンドイッチもございます。</p>
          <p>フルーツやクリームがたっぷりできっとお腹も満足いただけると思いますので、是非お試しください。</p>
        </CategoryCard>
        <CategoryCard categoryName={'食パン・ドーム型パン'} linkHref={ROUTES.CATEGORY.SHOKUPAN}>
          <p>SAKAGUCHIの自慢の専用ブレンド小麦の味を、存分に楽しんでいただける食パンや、ドーム型パン。</p>
          <p>バリエーションも豊富で、お好きなものを載せたり、トーストしたり、毎日の食卓にいかがでしょうか。</p>
        </CategoryCard>
        <CategoryCard categoryName={'菓子類'} linkHref={ROUTES.CATEGORY.SWEETS}>
          <p>SAKAGUCHIのパンから作ったラスクや、焼き菓子をご用意しています。 SAKAGUCHIで作るお菓子はどこか懐かしさを感じるやさしい甘さが特徴的。</p>
          <p>菓子パンだと少し食べ分けるのが難しかったり、おやつには少し多いかな、という方にピッタリ。</p>
          <p>プリンやチーズケーキは曜日・時間限定なので、出会えるとラッキーかも・・・？是非チェックしてみてください。</p>
        </CategoryCard>
      </div>
    </main>
  );
}