import Image from "next/image";
import Zoom from 'react-medium-image-zoom'


export default function EcoBagPage() {
  return (
    <main className="flex flex-col gap-8 py-8">
      <h1 className="text-2xl font-bold text-primary px-4">SAKAGUCHIオリジナルエコバッグ</h1>
      <p className="px-4">パン工房SAKAGUCHIでのお買い物が楽しみになるオリジナルエコバッグの紹介です</p>
      <div className="mx-auto button-shadow">
        <Zoom>
          <img
            src="/img/feature/eco-bag/eco-bag.png"
            alt="SAKAGUCHIオリジナルエコバッグ"
            className="max-w-xs"
            />
        </Zoom>
      </div>
      <div className="flex flex-col gap-2 px-4">
        <p>レジにてSAKAGUCHIのエコバッグを1枚108円(税込)で販売いたしております。</p>
        <p>SAKAGUCHIオリジナルエコバッグを持参いただいた方には、5円割引のサービスを行っておりますので、SAKAGUCHIへお越しの際はこのエコバッグを片手にご来店ください。</p>
      </div>
    </main>
  );
}