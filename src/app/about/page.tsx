import { TitleAndContents } from '@/app/components/TitleAndContents';
import DescriptionCard from '../components/DescriptionCard/DescriptionCard';

export default function AboutPage() {
  return (
    <main className='bg-white flex flex-col gap-8 pt-8'>
      <h1 className='text-2xl font-bold text-primary px-4'>SAKAGUCHIのこだわり</h1>
      <TitleAndContents title="豊富なパンの種類">
        <p>パン工房SAKAGUCHIは、その名の通り「工房」が店舗と一緒になっています。毎日100種類以上のパンを焼き上げており、準備が出来次第すぐに店頭に並びます。</p>
        <p>定番のパンをはじめ、新作のパンもシーズンごとに焼き上げています。新作は、季節感を第一に試作を重ねて作り上げた店長のこだわりです。お気に入りのパンを探しに来てください。</p>
      </TitleAndContents>
      <TitleAndContents title="パン工房SAKAGUCHIの小麦粉">
        <p>SAKAGUCHIでは、北海道の製粉所にお願いして、北海道産小麦の専門粉を作りました。</p>
        <p>中力粉の「きたほなみ」、強力粉の「春よ恋」、超強力粉の「ゆめちから」を絶妙にブレンドしました。</p>
        <p>SAKAGUCHIのほとんどのパンは、この小麦粉を100%使用しております（パンドミー食パンとホテル食パンのみSAKAGUCHI専門小麦とカナダ産小麦をブレンドして使用しています）</p>
        <div className='flex flex-col gap-2'>
          <DescriptionCard
            title={'きたほなみ'}
            subTitle={'北海道産・中力小麦'}
          >
            北海道(日本国内)で最も多く栽培されています。風味豊かで、粘りがあり、もっちりした食感が特徴です。
          </DescriptionCard>
          <DescriptionCard
            title={'春よ恋'}
            subTitle={'北海道産・強力小麦'}
          >
            窯伸び(焼き上げ始めに温度上昇で生地が膨らむ事)に優れ、濃い甘み・香り・ソフトでしっとりとした食感が特徴です。
          </DescriptionCard>
          <DescriptionCard
            title={'ゆめちから'}
            subTitle={'北海道産・超強力小麦'}
          >
            中力粉とのブレンドで、優れた製パン適性を発揮します。弾力が強く、もっちりとした食感が特徴です。
          </DescriptionCard>
        </div>
      </TitleAndContents>

    </main>
  );
}