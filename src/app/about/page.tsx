import { TitleAndContents } from '@/app/components/TitleAndContents';

export default function AboutPage() {
  return (
    <main className='bg-white flex flex-col gap-8 pt-8'>
      <h1 className='text-2xl font-bold text-primary px-4'>SAKAGUCHIのこだわり</h1>
      <TitleAndContents title="豊富なパンの種類">
        <p>パン工房SAKAGUCHIは、その名の通り「工房」が店舗と一緒になっています。毎日100種類以上のパンを焼き上げており、準備が出来次第すぐに店頭に並びます。</p>
        <p>定番のパンをはじめ、新作のパンもシーズンごとに焼き上げています。新作は、季節感を第一に試作を重ねて作り上げた店長のこだわりです。お気に入りのパンを探しに来てください。</p>
      </TitleAndContents>
    </main>
  );
}