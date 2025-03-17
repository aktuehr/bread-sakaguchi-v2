import { MaterialSymbol } from "react-material-symbols";
import { LinkButton } from "../components/LinkButton";

export default function CategoryPage() {
  return (
    <main className="flex flex-col gap-8 py-8">
      <h1 className='text-2xl font-bold text-primary px-4'>SAKAGUCHIのパン紹介</h1>
      <p className="px-4">SAKAGUCHIでは毎日計100種類以上のパンを焼き上げています。種類毎にご紹介します。是非気になるパンを見つけてください。</p>
      <div className="grid grid-cols-2 gap-2 px-4">
        <div className="flex flex-col bg-secondary gap-2 px-2 py-4 rounded-2xl">
          <div className="text-lg/none font-bold text-primary">菓子パン</div>
          <p className="text-xs">SAKAGUCHIの菓子パンは、定番のものはもちろん、お子様に喜んでいただける様なかわいい形をした菓子パンや、大人のコーヒータイム・ティータイムにぴったりなこだわりの菓子パンまで種類が非常に豊富です。
          店頭には季節の菓子パンが並ぶこともありますので、是非お気に入りの菓子パンを見つけてください。</p>
          <LinkButton
            linkHref={''}
            linkText={"商品一覧"}
            rightIcon={<MaterialSymbol icon='chevron_right' size={24} />}
            />
        </div>
      </div>
    </main>
  );
}