import { MaterialSymbol } from "react-material-symbols";
import { LinkButton } from "../components/LinkButton";

export default function InquiryPage() {
  return (
    <main className="flex flex-col gap-4 py-8">
      <h1 className="text-2xl font-bold text-primary px-4">店舗へのお電話・ご予約</h1>
      <div className="flex flex-col gap-1 px-4 text-sm">
        <p>お電話は、営業日の営業時間内で承っております。</p>
        <p>ご予約は数日前までに店舗までご連絡をお願いいたします。（定休日や年末年始など長期休業を挟む場合はその数日前までにご連絡をお願いいたします）</p>
        <p>ご予約の際は、商品名と個数をお伝えください。また、お名前と日中に連絡の取れるお電話番号をお伺いいたします。</p>
        <p>当日のご予約やお取り置きにつきましては、商品が準備可能かを確認致しますので、少々お時間を頂戴致します。</p>
        <p>店内混雑時はお電話の応対が難しい場合もございますので、予めご了承お願いいたします。</p>
      </div>
      <div className="flex flex-col text-center px-4">
        <p className="text-xs">スマートフォンの場合、下のボタンからお電話いただけます</p>
        <LinkButton linkHref="tel:0120-685-398" linkText={"0120-685-398"} leftIcon={<MaterialSymbol icon="call" size={24} />} />
      </div>
    </main>
  );
}