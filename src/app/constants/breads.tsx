import { ReactNode } from "react";
import { categoryIds, CategoryID } from "./categories";

export type Bread = {
  id: string;
  name: string;
  description: ReactNode;
  price?: number;
  priceWithTax?: number;
  image?: string;
  category: CategoryID;
};

export const breads: Bread[] = [
  // 菓子パン
  {
    id: "mochimochi-kinako",
    name: "もちもちきなこ",
    description: (
      <>
        <p>もちもちしたデンプン入りの生地のパンを揚げて、たっぷりきなこをまぶしました。</p>
      </>
    ),
    category: categoryIds.kashipan
  },
  {
    id: "mushipan-kokutou-pan",
    name: "蒸しパン風黒糖パン",
    description: (
      <>
        <p>黒糖を練り込んだ生地を蒸しパンのように仕上げました。優しい甘さの中で、ドライフルーツがアクセントになっています。</p>
      </>
    ),
    category: categoryIds.kashipan
  },
  {
    id: "cream-bread",
    name: "クリームパン",
    description: (
      <>
        <p>しっとりしたパン生地と甘さ控えめに仕上げたカスタードクリームは、何度も食べたくなるやさしい味わいで、SAKAGUCHIのロングセラーの1つです。</p>
      </>
    ),
    category: categoryIds.kashipan
  },
  {
    id: "fresh-butter-bread",
    name: "フレッシュバターブレッド",
    description: (
      <>
        <p>しっとり仕上げた生地に、ケーキ生地をトッピングし、有塩バターをサンドしました。</p>
      </>
    ),
    category: categoryIds.kashipan
  },
  {
    id: "kirin-san-bread",
    name: "きりんさんブレッド",
    description: (
      <>
        <p>【卵不使用】</p>
        <p>きりんさんの首のような長いパン。中にはミルククリームが入っています。</p>
        <p>生地にもクリームにも卵不使用です。</p>
      </>
    ),
    category: categoryIds.kashipan
  },
  {
    id: "tsubuan-pan",
    name: "つぶあんぱん",
    description: (
      <>
        <p>十勝産あずきを使ったつぶあんをたっぷり詰めて、ふっくらと焼き上げました。控えめな甘さが特徴で、何度食べても飽きない味です。SAKAGUCHIのロングセラーの1つです。</p>
      </>
    ),
    category: categoryIds.kashipan
  },
  {
    id: "koshian-pan",
    name: "こしあんぱん",
    description: (
      <>
        <p>滑らかなこしあんをたっぷり詰めて、ふっくらと焼き上げました。</p>
      </>
    ),
    category: categoryIds.kashipan
  },
  {
    id: "maroyaka-melon-pan",
    name: "まろやかメロンパン",
    description: (
      <>
        <p>水を使わず生クリームと卵で仕込んだ贅沢なメロンパン。外はサクサク、中はしっとり。SAKAGUCHI自慢のメロンパンです。</p>
      </>
    ),
    category: categoryIds.kashipan
  },
  {
    id: "apple-custard-bread",
    name: "アップルカスタードブレッド",
    description: (
      <>
        <p>りんごのコンポートとカスタードクリームを、ふっくら焼き上げたパンの中に包みました。</p>
      </>
    ),
    category: categoryIds.kashipan
  },
  {
    id: "peanuts-butter-bread",
    name: "ピーナッツバターブレッド",
    description: (
      <>
        <p>ビスケ生地をトッピングしてふんわりと焼き上げたパンの中に、甘さ控えめのピーナッツバターをサンドしています。</p>
      </>
    ),
    category: categoryIds.kashipan
  },
  {
    id: "genmai-an-pan",
    name: "玄米あんぱん",
    description: (
      <>
        <p>玄米を混ぜた生地でふっくら焼き上げたあんぱんです。玄米の香ばしい香りが、北海道産小豆使用のつぶあんによく合います。</p>
      </>
    ),
    category: categoryIds.kashipan
  },
  {
    id: "choco-melon-pan",
    name: "チョコメロンパン",
    description: (
      <>
        <p>メロンパンの生地にチョコチップを混ぜて焼き上げました。メロンパンの甘さとチョコの甘さが合います</p>
      </>
    ),
    category: categoryIds.kashipan
  },
  {
    id: "mochimochi-ichigo-ring-bread",
    name: "もちもちのイチゴリングブレッド",
    description: (
      <>
        <p>もちもちの生地にイチゴジャムを混ぜ込んで焼き上げました</p>
      </>
    ),
    category: categoryIds.kashipan
  },
  {
    id: "kouign-amann",
    name: "クイニーアマン",
    description: (
      <>
        <p>フランスの伝統的な洋菓子をSAKAGUCHI風に菓子パンにアレンジしました。サクサクの食感とバターの香りとキャラメリゼされたグラニュー糖の甘さが絶妙です。</p>
      </>
    ),
    category: categoryIds.kashipan
  },
  {
    id: "koucha-melon-pan",
    name: "紅茶メロンパン",
    description: (
      <>
        <p>メロンパンのメロン生地に香り高い紅茶を混ぜて練り込みました。食べた瞬間に紅茶の香りが口いっぱいに広がります。</p>
      </>
    ),
    category: categoryIds.kashipan
  },
  {
    id: "cinnamon-roll",
    name: "シナモンロール",
    description: (
      <>
        <p>ふわもちな生地で、バター風味のシナモンフィリングを巻き込み、焼き上げました。甘いグレーズとシナモンの香りが絶品です。</p>
      </>
    ),
    category: categoryIds.kashipan
  },
  {
    id: "gatturi-choco-bread",
    name: "がっつりチョコブレッド",
    description: (
      <>
        <p>もっちりとしたパン生地の中に、溶けないキューブチョコレートをたっぷりと混ぜ込んで焼き上げました。</p>
      </>
    ),
    category: categoryIds.kashipan
  },
  {
    id: "raisin-twist",
    name: "レーズンツイスト",
    description: (
      <>
        <p>シナモンとラムレーズンを練り込んだ生地に、アーモンドシュガーをトッピングしました。</p>
      </>
    ),
    category: categoryIds.kashipan
  },
  {
    id: "kuri-an-pan",
    name: "栗あんぱん",
    description: (
      <>
        <p>栗の形をしたふわふわのパンの中には、栗がコロコロ入った栗あんがたっぷりつまっています。</p>
      </>
    ),
    category: categoryIds.kashipan
  },
  {
    id: "shirokuma-chan-choco-pan",
    name: "しろくまちゃんのチョコパン",
    description: (
      <>
        <p>しろくまちゃんの形をした菓子パンです。中にはチョコクリームがたっぷりと入っています。</p>
      </>
    ),
    category: categoryIds.kashipan
  },
  {
    id: "totoro-pan",
    name: "トトロパン",
    description: (
      <>
        <p>トトロの形をした菓子パンです。お腹の部分には、カスタードクリームがたっぷりと入っています。外側はメロンパン生地でできています。</p>
      </>
    ),
    category: categoryIds.kashipan
  },
  {
    id: "genmai-cheese",
    name: "玄米チーズ",
    description: (
      <>
        <p>玄米を混ぜた生地に、角切りにしたプロセスチーズを包み、焼き上げました。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "gatturi-cheese-bread",
    name: "がっつりチーズブレッド",
    description: (
      <>
        <p>もっちりとしたパン生地の中に、チェダーチーズとプロセスチーズをたっぷりと混ぜ込んで焼き上げました。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "mochi-mochi-mentaiko-bread",
    name: "もちもち明太子ブレッド",
    description: (
      <>
        <p>もちもちのパン生地の中に明太子・バター・マヨネーズで作ったオリジナル明太ソースを入れました。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "nozawana-bread",
    name: "野沢菜ブレッド",
    description: (
      <>
        <p>マヨネーズで味付けした野沢菜を入れて焼き上げた「おやき」のようなパンです。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "tamago-salad-bread",
    name: "たまごサラダブレッド",
    description: (
      <>
        <p>片手でも食べやすい形のふっくらパンに、たまごサラダをトッピングして焼き上げた惣菜パンです。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "croque-monsieur",
    name: "クロックムッシュ",
    description: (
      <>
        <p>ホワイトソース、ハム、たまごサラダをSAKAGUCHIの食パンでサンドして、こんがり香ばしいチーズをかけて焼き上げました。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "yaki-chuka-pan",
    name: "焼き中華パン",
    description: (
      <>
        <p>豚まんの具を包み込み、チーズをかけてパリッと焼きあげました。とても食べ応えのある惣菜パンです。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "chikuwa-pan",
    name: "ちくわパン",
    description: (
      <>
        <p>ふっくらパンの中には、ツナを詰め込んだちくわが入っています。北海道ではソウルフードとして愛されています。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "genmai-onion-pizza",
    name: "玄米のオニオンピザ",
    description: (
      <>
        <p>玄米を混ぜたピザ風生地の上に、玉ねぎとマヨネーズ、ブラックペッパーをトッピングして焼き上げました。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "gobou-salad-bread",
    name: "ごぼうサラダブレッド",
    description: (
      <>
        <p>片手でも食べやすい形のふっくらパンに、ごぼうサラダをトッピングして焼き上げた惣菜パンです。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "curry-pizza",
    name: "カレーピザ",
    description: (
      <>
        <p>ピザ風生地の上に、カレーソースとクリームチーズ、MIXチーズをトッピングしました。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "dry-tomato-pizza",
    name: "ドライトマトのピザ",
    description: (
      <>
        <p>ピザ風生地の上に、トマトソース、ドライトマト、コーン、ベーコンをトッピングして焼き上げました。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "pirikara-gorgonzola-negi-pizza",
    name: "ピリ辛ゴルゴンゾーラのネギピザ",
    description: (
      <>
        <p>ピザ風生地の上に、ゴルゴンゾーラチーズと、ネギをトッピングして焼き上げました。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "teriyaki-pizza",
    name: "てりやきピザ",
    description: (
      <>
        <p>ピザ風生地の上に、鶏のてりやきとマヨネーズソースをトッピングして焼き上げました。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "mochi-mentai-pizza",
    name: "もち明太ピザ",
    description: (
      <>
        <p>かねふくの明太子と、お餅をトッピングしたピザパンです。明太子の風味がピザパンによく合います。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "shaki-shaki-renkon-tartine",
    name: "シャキシャキ蓮根のタルティーヌ",
    description: (
      <>
        <p>丸い形のパンの上にチーズやマヨネーズソース、そして蓮根をトッピングして焼き上げました。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "arabiki-wiener-bread",
    name: "あらびきウインナーブレッド",
    description: (
      <>
        <p>片手でも食べやすい形のふっくらパンに、ボリュームたっぷりのあらびきシャウエッセンをトッピングして焼き上げました。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "bacon-egg-bread",
    name: "ベーコンエッグブレッド",
    description: (
      <>
        <p>平たくした生地の上にベーコンとたまごを落とし、スパイスとマヨネーズをトッピングして焼き上げました。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "meat-gratin-bread",
    name: "ミートグラタンブレッド",
    description: (
      <>
        <p>ミートソースとホワイトソースがいっぱい詰まったボリュームたっぷりの惣菜パンです。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "tuna-potato-bread",
    name: "ツナポテブレッド",
    description: (
      <>
        <p>片手でも食べやすい形のふっくらパンに、マイルドなポテトサラダとツナマヨをたっぷりとのせて焼き上げました。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "okinawa-kurobuta-wiener-bread",
    name: "沖縄黒豚ウィンナーブレッド",
    description: (
      <>
        <p>ジューシーで食べ応え抜群の沖縄黒豚ウインナーを、ふっくらとしたパン生地に合わせて焼き上げました。粒マスタードマヨネーズがアクセントになっています。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "hiroshimayaki-bread",
    name: "広島焼ブレッド",
    description: (
      <>
        <p>広島焼きに見立てて、パン生地をベースに、キャベツ、たまご、ソースをかけて焼き上げました。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "calzone",
    name: "カルツォーネ",
    description: (
      <>
        <p>ドライトマト、ベーコン、バジル、ピザソース、チーズとイタリアを感じさせる本格的な具材を、三日月型の生地の中に詰めて焼き上げました。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "panini",
    name: "パニーニ",
    description: (
      <>
        <p>ベーコンとオニオン、チーズを自家製のパンでサンドして焼き上げました。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "gobou-salad-panini",
    name: "ごぼうサラダのパニーニ",
    description: (
      <>
        <p>ごぼうサラダとチェダーチーズを自家製のパンではさみ、その上からミックスチーズをかけて焼き上げました。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "mustard-pirikara-chorizo-raimugi-bread",
    name: "マスタード味のピリ辛チョリソーのライ麦ブレッド",
    description: (
      <>
        <p>キャベツとチョリソーウインナーをライ麦パンにサンドしました。マスタードマヨネーズで味つけし、最後にチーズをかけて焼き上げています。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "awaji-tartar-juicy-chicken-raimugi-bread",
    name: "淡路島産タルタルとジューシーチキンのライ麦ブレッド",
    description: (
      <>
        <p>淡路島産の玉ねぎを使用したタルタルソースと、フライドチキン、サクサクキャベツを、香ばしいライ麦パンにサンドしました。</p>
      </>
    ),
    category: categoryIds.souzaipan
  },
  {
    id: "petit-france",
    name: "プチフランス",
    description: (
      <>
        <p>食べきりサイズのソフトフランスパンです。</p>
      </>
    ),
    category: categoryIds["french-bread"]
  },
  {
    id: "mentai-butter-france",
    name: "明太バターフランス",
    description: (
      <>
        <p>やまやの明太子にバター、マヨネーズを使用したオリジナルソースを、フランスパンに挟みました。</p>
      </>
    ),
    category: categoryIds["french-bread"]
  },
  {
    id: "potato-france",
    name: "ポテトフランス",
    description: (
      <>
        <p>ドーム状のソフトフランスの生地でポテトサラダを包み込んで焼き上げました。</p>
      </>
    ),
    category: categoryIds["french-bread"]
  },
  {
    id: "cheese-fondue-france",
    name: "チーズフォンデュフランス",
    description: (
      <>
        <p>ドーム状のソフトフランスの生地の中にチーズフォンデュソースを入れて焼き上げました。</p>
      </>
    ),
    category: categoryIds["french-bread"]
  },
  {
    id: "chorizo-france",
    name: "チョリソーフランス",
    description: (
      <>
        <p>フランス生地に、ピリ辛ロングウインナーを包みました。</p>
      </>
    ),
    category: categoryIds["french-bread"]
  },
  {
    id: "chorizo-france-half",
    name: "チョリソーフランス(ハーフ)",
    description: (
      <>
        <p>フランス生地にピリ辛ロングウインナーを包んだ「チョリソーフランス」のハーフサイズです。</p>
      </>
    ),
    category: categoryIds["french-bread"]
  },
  {
    id: "garlic-france",
    name: "ガーリックフランス",
    description: (
      <>
        <p>カットしたフランスパンにガーリックソースをたっぷりとかけました。</p>
      </>
    ),
    category: categoryIds["french-bread"]
  },
  {
    id: "france-wiener",
    name: "フランスウインナー",
    description: (
      <>
        <p>フランス生地でシャウエッセンを巻きました。</p>
      </>
    ),
    category: categoryIds["french-bread"]
  },
  {
    id: "batard",
    name: "バタール",
    description: (
      <>
        <p>自家製ルヴァン（発酵種）を使用して焼き上げたフランスパンです。</p>
      </>
    ),
    category: categoryIds["french-bread"]
  },
  {
    id: "bacon-cheese-france",
    name: "ベーコンチーズフランス",
    description: (
      <>
        <p>フランス生地に、ベーコン、マスタードマヨネーズ。MIXチーズを包みました。</p>
      </>
    ),
    category: categoryIds["french-bread"]
  },
  {
    id: "mentaiko-cheese-france",
    name: "明太子チーズフランス",
    description: (
      <>
        <p>フランス生地に、かねふくの明太子、プロセスチーズ、MIXチーズを包みました。</p>
      </>
    ),
    category: categoryIds["french-bread"]
  },
  {
    id: "tennnenkoubo-raimugi-petit-bread",
    name: "天然酵母ライ麦プチブレッド",
    description: (
      <>
        <p>天然酵母を使用した生地に、ライ麦を混ぜて、食べきりサイズにして焼き上げました。</p>
      </>
    ),
    category: categoryIds.tennenkoubo
  },
  {
    id: "tennenkoubo-raimugi-raspberry-bread",
    name: "天然酵母ライ麦のラズベリーブレッド",
    description: (
      <>
        <p>天然酵母の風味とラズベリージャムの甘酸っぱさが広がります。</p>
      </>
    ),
    category: categoryIds.tennenkoubo
  },
  {
    id: "tennenkoubo-shio-pan",
    name: "天然酵母の塩パン",
    description: (
      <>
        <p>天然酵母の風味を、ほんのり塩味が引き立てます。</p>
      </>
    ),
    category: categoryIds.tennenkoubo
  },
  {
    id: "tennenkoubo-ichijiku-bread",
    name: "天然酵母の無花果ブレッド",
    description: (
      <>
        <p>天然酵母を使用した生地に、ドライいちじくを混ぜで焼き上げました。</p>
      </>
    ),
    category: categoryIds.tennenkoubo
  },
  {
    id: "tennenkoubo-kuromame-maccha-whitechoco-bread",
    name: "天然酵母の黒豆と抹茶ホワイトチョコブレッド",
    description: (
      <>
        <p>天然酵母を使用した生地に、黒豆と抹茶ホワイトチョコを混ぜて焼き上げました。</p>
      </>
    ),
    category: categoryIds.tennenkoubo
  },
  {
    id: "tennenkoubo-cranberry-choco-bread",
    name: "天然酵母のクランベリーとチョコブレッド",
    description: (
      <>
        <p>天然酵母を使用した生地に、ドライクランベリーとチョコレートを混ぜて焼き上げました。</p>
      </>
    ),
    category: categoryIds.tennenkoubo
  },
  {
    id: "tennenkoubo-whitechoco-orange-bread",
    name: "天然酵母のホワイトチョコとオレンジのブレッド",
    description: (
      <>
        <p>天然酵母の生地に、まろやかな甘さのホワイトチョコと、爽やかな甘さと香りのオレンジピールを合わせました</p>
      </>
    ),
    category: categoryIds.tennenkoubo
  },
  {
    id: "tennenkoubo-apple-raisin-bread",
    name: "天然酵母のアップルレーズンブレッド",
    description: (
      <>
        <p>天然酵母を使用した生地に、りんごとレーズンを混ぜて焼き上げました。</p>
      </>
    ),
    category: categoryIds.tennenkoubo
  },
  {
    id: "tennenkoubo-cheese-bread",
    name: "天然酵母のチーズブレッド",
    description: (
      <>
        <p>天然酵母を使用した生地に、チーズを混ぜて焼き上げました。ブラックペッパーが香りと味のアクセントになっています。</p>
      </>
    ),
    category: categoryIds.tennenkoubo
  },
  {
    id: "tennenkoubo-raimugi-anchovies-dry-tomato-bread",
    name: "天然酵母ライ麦のアンチョビとドライトマトブレッド",
    description: (
      <>
        <p>天然酵母を使用したライ麦生地に、アンチョビとドライトマト、クリームチーズとMIXチーズをトッピングして焼き上げました。</p>
      </>
    ),
    category: categoryIds.tennenkoubo
  },
  {
    id: "tennenkoubo-raimugi-wiener-cheese-bread",
    name: "天然酵母ライ麦のウインナーチーズブレッド",
    description: (
      <>
        <p>天然酵母を使用したライ麦生地に、ウインナー、チーズをトッピングして焼き上げました。</p>
      </>
    ),
    category: categoryIds.tennenkoubo
  },
  {
    id: "tennnennkoubo-kurumi-cranberry-bread",
    name: "天然酵母のクルミとクランベリーブレッド",
    description: (
      <>
        <p>天然酵母を使用した生地に、たっぷりのクルミとクランベリーを混ぜて焼き上げました。</p>
      </>
    ),
    category: categoryIds.tennenkoubo
  },
  {
    id: "custard-danish-coronet",
    name: "カスタードデニッシュコロネ",
    description: (
      <>
        <p>コロネのような形に仕上げたサクサクのデニッシュの中に、カスタードとホイップをMIXしたオリジナルカスタードクリームをたっぷりとつめました。</p>
      </>
    ),
    category: categoryIds.danish
  },
  {
    id: "itachoco-danish",
    name: "板チョコデニッシュ",
    description: (
      <>
        <p>粒アーモンド入りのチョコをデニッシュ生地で巻き、焼き上げました。</p>
      </>
    ),
    category: categoryIds.danish
  },
  {
    id: "sweet-potato-danish",
    name: "スイートポテトデニッシュ",
    description: (
      <>
        <p>さつま芋ペーストを混ぜ込み、さつま芋の甘露煮をトッピングしました。</p>
      </>
    ),
    category: categoryIds.danish
  },
  {
    id: "kurumi-azuki-danish",
    name: "くるみとあずきのデニッシュ",
    description: (
      <>
        <p>アーモンドペーストとあずきを混ぜ込み、クルミをトッピングしました。</p>
      </>
    ),
    category: categoryIds.danish
  },
  {
    id: "3-shu-choco-danish",
    name: "3種のチョコデニッシュ",
    description: (
      <>
        <p>チョコ生地、チョコクリーム、クーベルチュールを使用しました。</p>
      </>
    ),
    category: categoryIds.danish
  },
  {
    id: "gorgonzola-bacon-danish",
    name: "ゴルゴンゾーラのベーコンデニッシュ",
    description: (
      <>
        <p>デニッシュ生地でベーコンを巻き、ゴルゴンゾーラとチーズをトッピングしました。</p>
      </>
    ),
    category: categoryIds.danish
  },
  {
    id: "mustard-egg-wiener-danish",
    name: "マスタード味のエッグウインナーデニッシュ",
    description: (
      <>
        <p>大きなシャウエッセン、たまごサラダ、マスタードを、サクサクのデニッシュ生地に挟みました。</p>
      </>
    ),
    category: categoryIds.danish
  },
  {
    id: "mini-croissant",
    name: "ミニクロワッサン",
    description: (
      <>
        <p>SAKAGUCHIのクロワッサンをお気軽に楽しめるミニサイズ。</p>
      </>
    ),
    category: categoryIds.croissant
  },
  {
    id: "croissant",
    name: "クロワッサン",
    description: (
      <>
        <p>生地とバターを幾重にも重ねて焼き上げました。サクサクの食感とバターの香りが楽しめます。</p>
      </>
    ),
    category: categoryIds.croissant
  },
  {
    id: "biscuit-croissant",
    name: "ビスケクロワッサン",
    description: (
      <>
        <p>SAKAGUCHIのクロワッサンにチョコチップビスケット生地をかけて焼き上げました。</p>
      </>
    ),
    category: categoryIds.croissant
  },
  {
    id: "melon-pan-croissant",
    name: "メロンパンクロワッサン",
    description: (
      <>
        <p>クロワッサンにクッキー生地を巻いて、焼き上げました。サクサクで優しい甘さのクッキー部分と、軽い食感でバターの香り豊かなクロワッサンとのコラボをお楽しみ下さい</p>
      </>
    ),
    category: categoryIds.croissant
  },
  {
    id: "sun-horn-croissant",
    name: "サンホルンクリームクロワッサン",
    description: (
      <>
        <p>SAKAGUCHIのクロワッサンに甘さ控えめのクリームをサンドしました。</p>
      </>
    ),
    category: categoryIds.croissant
  },
  {
    id: "custard-croissant",
    name: "カスタードクロワッサン",
    description: (
      <>
        <p>カスタードクリームを挟んだデザートクロワッサン。カスタードクリームがクロワッサンの甘さを引き立てます。</p>
      </>
    ),
    category: categoryIds.croissant
  },
  {
    id: "zeitaku-cheese-fondue-croissant",
    name: "贅沢チーズフォンデュクロワッサン",
    description: (
      <>
        <p>サクサクのクロワッサンに、ナチュラルチーズ、ミックスチーズを加えて、さらにチーズフォンデュソースをかけました。チーズの旨味たっぷりの贅沢なクロワッサンです。</p>
      </>
    ),
    category: categoryIds.croissant
  },
  {
    id: "butter-roll",
    name: "バターロール",
    description: (
      <>
        <p>バターを混ぜ込んだ生地をふっくらと焼き上げました。</p>
      </>
    ),
    category: categoryIds.rollpan
  },
  {
    id: "raisin-butter-roll",
    name: "レーズンバターロール",
    description: (
      <>
        <p>バターを混ぜ込んだ生地にラムレーズンとシナモンを入れて、ふっくらと焼き上げました。</p>
      </>
    ),
    category: categoryIds.rollpan
  },
  {
    id: "sakaguchi-shio-pan",
    name: "SAKAGUCHIの塩パン",
    description: (
      <>
        <p>外はカリカリ、中はもちもち。噛むたびに広がるバターの風味と塩の旨みをお楽しみください。</p>
      </>
    ),
    category: categoryIds.rollpan
  },
  {
    id: "kabocha-roll-pan",
    name: "かぼちゃのロールパン",
    description: (
      <>
        <p>かぼちゃペーストを練り込んだ生地をふっくらと焼き上げました。</p>
      </>
    ),
    category: categoryIds.rollpan
  },
  {
    id: "genmai-roll",
    name: "玄米ロール",
    description: (
      <>
        <p>炊いた玄米を混ぜ込んだ生地をふっくらと焼き上げました。</p>
      </>
    ),
    category: categoryIds.rollpan
  },
  {
    id: "kurumi-pan",
    name: "くるみパン",
    description: (
      <>
        <p>くるみを練り込んだ素朴な味のパンです。</p>
      </>
    ),
    category: categoryIds.rollpan
  },
  {
    id: "fuwafuwa-pan",
    name: "ふわふわパン",
    description: (
      <>
        <p>生地に卵を使わずに（※）作り上げたパンです。</p>
        <p>※製造工程は卵を使用する他の生地とあえて分けていません。</p>
      </>
    ),
    category: categoryIds.rollpan
  },
  {
    id: "an-shio-pan",
    name: "あん塩パン",
    description: (
      <>
        <p>SAKAGUCHIの塩パンの中に、あんこをつめました。塩味があんこの甘さを引き立てます。</p>
      </>
    ),
    category: categoryIds.rollpan
  },
  {
    id: "cream-cheese-shop-pan",
    name: "クリームチーズ塩パン",
    description: (
      <>
        <p>SAKAGUCHIの塩パンの生地で、クリームチーズを包みました。クリームチーズがバターの風味にマッチします。</p>
      </>
    ),
    category: categoryIds.rollpan
  },
  {
    id: "ebi-shio-pan",
    name: "えび塩パン",
    description: (
      <>
        <p>SAKAGUCHIの塩パンの生地に、桜海老を混ぜました。海老の香りが口いっぱいに広がります。</p>
      </>
    ),
    category: categoryIds.rollpan
  },
  {
    id: "satsumaimo-shio-pan",
    name: "さつまいもの塩パン",
    description: (
      <>
        <p>SAKAGUCHIの塩パンの生地に、やさいい甘さのさつまいもを包みました。さつまいもの甘さを塩パンの塩気が引き立てています。</p>
      </>
    ),
    category: categoryIds.rollpan
  },
  {
    id: "caramel-shio-pan",
    name: "キャラメル塩パン",
    description: (
      <>
        <p>SAKAGUCHIの塩パンの生地にキャラメルを包み込んで焼き上げました。バターの香りと塩気が、甘いキャラメルにとてもマッチします。</p>
      </>
    ),
    category: categoryIds.rollpan
  },
  {
    id: "frank-roll",
    name: "フランクロール",
    description: (
      <>
        <p>棒つきフランクにパン生地を巻きつけて焼き上げました。お子様にも大人気です。</p>
      </>
    ),
    category: categoryIds.rollpan
  },
  {
    id: "cake-donut",
    name: "ケーキドーナツ",
    description: (
      <>
        <p>おやつにぴったりの小さめサイズのドーナツです。</p>
      </>
    ),
    category: categoryIds.donut
  },
  {
    id: "kuri-an-donut",
    name: "栗あんドーナツ",
    description: (
      <>
        <p>ボール状のドーナツの中には栗あんが入っています。</p>
      </>
    ),
    category: categoryIds.donut
  },
  {
    id: "mini-an-donut",
    name: "ミニあんドーナツ",
    description: (
      <>
        <p>こしあんが入った小さめのドーナツです。</p>
      </>
    ),
    category: categoryIds.donut
  },
  {
    id: "ring-dounut",
    name: "リングドーナツ",
    description: (
      <>
        <p>外はこんがり、中はふっくらとしたドーナツです。</p>
      </>
    ),
    category: categoryIds.donut
  },
  {
    id: "an-donut",
    name: "あんドーナツ",
    description: (
      <>
        <p>つぶあんをパン生地の中につめて、こんがりと揚げました。</p>
      </>
    ),
    category: categoryIds.donut
  },
  {
    id: "curry-donut",
    name: "カレードーナツ",
    description: (
      <>
        <p>野菜カレーとキーマカレーのブレンドカレーをパン生地の中につめて、こんがりと揚げました。</p>
      </>
    ),
    category: categoryIds.donut
  },
  {
    id: "frank-donut",
    name: "フランクドーナツ",
    description: (
      <>
        <p>フランクソーセージにパン生地を巻きつけて、こんがりと揚げました。</p>
      </>
    ),
    category: categoryIds.donut
  },
  {
    id: "cheese-fondue-curry-donut",
    name: "チーズフォンデュのカレードーナツ",
    description: (
      <>
        <p>チーズとキーマカレーをパン生地の中につめて、こんがりと揚げました。チーズのまろやかさとスパイシーなカレーの味がマッチします。</p>
      </>
    ),
    category: categoryIds.donut
  },
  {
    id: "hanjuku-tamago-curry-donut",
    name: "半熟卵入りカレードーナツ",
    description: (
      <>
        <p>半熟卵とキーマカレーをパン生地の中につめて、こんがりと揚げました。半熟卵がスパイシーなカレーをまろやかにしてくれます。</p>
      </>
    ),
    category: categoryIds.donut
  },
  {
    id: "tamago-cake",
    name: "たまごケーキ",
    description: (
      <>
        <p>しっとりとやさしい味のたまごケーキです</p>
      </>
    ),
    category: categoryIds.sweets
  },
  {
    id: "bagel",
    name: "ベーグル",
    description: (
      <>
        <p>SAKAGUCHIのベーグルはモチモチです。</p>
      </>
    ),
    category: categoryIds.sweets
  },
  {
    id: "muffin-cake",
    name: "マフィンケーキ",
    description: (
      <>
        <p>しっとりふわふわのマフィンケーキです。</p>
      </>
    ),
    category: categoryIds.sweets
  },
  {
    id: "kamayaki-natsukasii-pudding",
    name: "【月曜午後・金曜午後限定】釜焼きの懐かしいプリン",
    description: (
      <>
        <p>昔懐かしい素朴な味のプリンです。カップの底にはカラメルが入っています。</p>
      </>
    ),
    category: categoryIds.sweets
  },
  {
    id: "sugar-toast",
    name: "【土曜・日曜限定】シュガートースト",
    description: (
      <>
        <p>厚切りにしたSAKAGUCHIの食パンに、バター、グラニュー糖をたっぷりと塗ってトーストしました。</p>
      </>
    ),
    category: categoryIds.sweets
  },
  {
    id: "korokoro-rusk",
    name: "コロコロラスク",
    description: (
      <>
        <p>SAKAGUCHIの食パンを使ったラスクです。シュガーとキャラメルソースをかけて二度焼きしています。</p>
      </>
    ),
    category: categoryIds.sweets
  },
  {
    id: "apple-cake",
    name: "アップルケーキ",
    description: (
      <>
        <p>しっとりふわふわのマフィンケーキ生地にりんごのコンポートをのせて焼き上げました。</p>
      </>
    ),
    category: categoryIds.sweets
  },
  {
    id: "jikasei-baked-cheese-cake",
    name: "【土曜限定】自家製ベイクドチーズケーキ",
    description: (
      <>
        <p>しっとりと濃厚で、ほどよい酸味が特徴のベイクドチーズケーキです。SAKAGUCHIの隠れた人気商品です。</p>
      </>
    ),
    category: categoryIds.sweets
  },
  {
    id: "tamago-roll",
    name: "たまごロール",
    description: (
      <>
        <p>マヨネーズたっぷりのサラダを、コッペパンにサンドしました。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "croquette-dog",
    name: "コロッケドッグ",
    description: (
      <>
        <p>甘辛いソースをかけたホクホクのコロッケと、千切りキャベツ、マヨネーズを、コッペパンにサンドしました。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "yakisoba-roll",
    name: "焼きそばロール",
    description: (
      <>
        <p>ソースをたっぷり含んだ焼きそばを、キャベツ・マヨネーズであえて、コッペパンにサンドしました。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "pastrami-goma-sand",
    name: "パストラミのごまサンド",
    description: (
      <>
        <p>ごまが入ったしっとり食感のフォカッチャに、パストラミと野菜をサンドしました。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "ebi-katsu-dog",
    name: "えびカツドッグ",
    description: (
      <>
        <p>えびカツと千切りキャベツ、たまごサラダをコッペパンにサンドしました。ケチャップがアクセントになっています。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "croquette-sand",
    name: "コロッケサンド",
    description: (
      <>
        <p>ボリュームたっぷりのコロッケを、SAKAGUCHIの食パンにサンドしました。お腹も大満足のサンドイッチです。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "tamago-salad-ham-katsu-sand",
    name: "たまごサラダとハムカツサンド",
    description: (
      <>
        <p>たまごサラダと、ソースをくぐったハムカツの2つの味が楽しめるサンドイッチです。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "ham-egg-sand",
    name: "ハムエッグサンド",
    description: (
      <>
        <p>ハムとたまごサラダを、SAKAGUCHIの食パンにサンドしました。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "sankaku-mix-sand",
    name: "三角ミックスサンド",
    description: (
      <>
        <p>ハム・レタス・トマト・たまごサラダの定番のミックスサンドです。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "herb-chicken-goma-sand",
    name: "ハーブチキンのごまサンド",
    description: (
      <>
        <p>ごまを混ぜたフォカッチャに、ハーブチキンと野菜をサンドしました。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "cheese-dog",
    name: "チーズドッグ",
    description: (
      <>
        <p>パルメザンチーズ味のコッペパンに濃厚なチーズと野菜をサンドしました。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "ham-cheese-sand",
    name: "ハムチーズサンド",
    description: (
      <>
        <p>ハムとチーズのコンビにレタスをサンドしました。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "ham-katsu-yasai-sand",
    name: "ハムカツ＆野菜サンド",
    description: (
      <>
        <p>ジューシーなハムカツのサンドと野菜サンドを1つずつ楽しめます。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "renkon-gobou-konsai-sand",
    name: "蓮根とごぼうの根菜サンド",
    description: (
      <>
        <p>蓮根とゴボウ、くるみをマヨネーズで和えて、レタスとサンドしました。シャキシャキ食感が楽しめるサンドイッチです。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "pastrami-yasai-sand",
    name: "パストラミの野菜サンド",
    description: (
      <>
        <p>パストラミとたっぷりの野菜をサンドしました。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "ebi-katsu-sand",
    name: "えびカツサンド",
    description: (
      <>
        <p>プリプリのえびが詰まったえびカツ、たまごサラダ、レタスをSAKGUCHIの自家製食パンでサンドしました。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "teriyaki-chicken-sand",
    name: "てりやきチキンサンド",
    description: (
      <>
        <p>たっぷりのてりやきチキンと、たまごサラダ、レタスをSAKAGUCHIの自家製食パンでサンドしました。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "fruit-sand",
    name: "フルーツサンド",
    description: (
      <>
        <p>フルーツとクリームをたっぷりとサンドしました。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "ham-katsu-sand-mini-box",
    name: "ハムカツサンド mini BOX",
    description: (
      <>
        <p>ハムカツサンドとたまごサラダが楽しめるミニBOXです。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "potato-ham-sand-mini-box",
    name: "ポテハムサンド mini BOX",
    description: (
      <>
        <p>ポテトサンドとハムレタスサンドが楽しめるミニBOXです。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "tuna-tamago-sand-mini-box",
    name: "ツナたまごサンド mini BOX",
    description: (
      <>
        <p>ツナサンドとたまごサラダのサンドが楽しめるミニBOXです。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "tuna-ham-sand-mini-box",
    name: "ツナハムサンド mini BOX",
    description: (
      <>
        <p>ツナサンドとハムレタスのサンドが楽しめるミニBOXです。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "sankaku-katsu-sand",
    name: "三角カツサンド",
    description: (
      <>
        <p>ジューシーなカツのサンドとハム、野菜をサンドしました。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "hire-katsu-ham-yasai-sand",
    name: "ヒレカツとハム野菜サンド",
    description: (
      <>
        <p>甘辛いソースにくぐらせたやわらかくて厚みのあるヒレカツのサンドと、フレッシュ野菜とハムのサンドの2つの味を楽しめます。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "mix-sand-box",
    name: "ミックスサンド BOX",
    description: (
      <>
        <p>たまごサンド、ハムレタスサンドのサンドイッチが楽しめるBOXです。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "potato-tamago-sand-box",
    name: "ポテたまサンド BOX",
    description: (
      <>
        <p>ポテトサラダとたまごサラダが楽しめる、ボリュームたっぷりのBOXです。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "yasai-sand-box",
    name: "野菜サンド BOX",
    description: (
      <>
        <p>レタス、トマト、ゆでたまごスライス、きゅうりと、野菜がたっぷりと入ったサンドイッチのBOXです。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "hire-katsu-sand",
    name: "ヒレカツサンド",
    description: (
      <>
        <p>やわらかくて厚みのあるヒレカツを、甘辛いソースにくぐらせて、キャベツと一緒にサンドしました。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "katsu-sand-box",
    name: "カツサンド BOX",
    description: (
      <>
        <p>たまごサンド、ハムレタスサンド、カツサンドの3種のサンドイッチが楽しめるBOXです。</p>
      </>
    ),
    category: categoryIds.sandwich
  },
  {
    id: "maccha-bread-half",
    name: "抹茶ブレッド（ハーフ）",
    description: (
      <>
        <p>生地に抹茶を混ぜて焼き上げました。お口の中で抹茶が香ります。トーストすると、抹茶の香りが引き立ちます。</p>
      </>
    ),
    category: categoryIds.shokupan
  },
  {
    id: "raisin-bread-half",
    name: "レーズンブレッド（ハーフ）",
    description: (
      <>
        <p>ラム酒漬けのレーズンをふんだんに混ぜ込んだ生地に、ほんのりと、シナモンを加え焼き上げました。</p>
      </>
    ),
    category: categoryIds.shokupan
  },
  {
    id: "tennnenkoubo-maarui-pan",
    name: "天然酵母のまぁるいパン",
    description: (
      <>
        <p>天然酵母を熟成させた生地をまぁるくふっくらと焼き上げました。豊かな香りがお口いっぱいに広がります。</p>
      </>
    ),
    category: categoryIds.shokupan
  },
  {
    id: "jikasei-shokupan",
    name: "自家製食パン",
    description: (
      <>
        <p>焼き上げる時にフタをかぶせ、四角く仕上げた食パンです。SAKAGUCHIで最初に出来上がった食パンです。</p>
      </>
    ),
    category: categoryIds.shokupan
  },
  {
    id: "pain-de-mie-shokupan",
    name: "パンドミー食パン",
    description: (
      <>
        <p>バターや生クリームなどの乳製品を使わずに、フランスパンのような味と食感に仕上げました。トーストするとよりサクサクになります。</p>
      </>
    ),
    category: categoryIds.shokupan
  },
  {
    id: "tennnenkoubo-shokupan",
    name: "天然酵母の食パン",
    description: (
      <>
        <p>イーストを使わずに仕上げました。卵も乳製品も使っていませんが、もちもちっとした食感と、酵母の香りが楽しめます。</p>
      </>
    ),
    category: categoryIds.shokupan
  },
  {
    id: "mocchiko-shokupan",
    name: "もちっこ食パン",
    description: (
      <>
        <p>北海道産小麦で練り上げた、もちもちの食感の食パンです。イーストフードを使わず仕上げているので、お子様にもどうぞ。</p>
      </>
    ),
    category: categoryIds.shokupan
  },

  {
    id: "hard-toast",
    name: "ハードトースト",
    description: (
      <>
        <p>SAKAGUCHI人気のソフトフランスパンの生地を使用して、外はパリパリに仕上げています。トーストすると、パリパリ感が増します。</p>
      </>
    ),
    category: categoryIds.shokupan
  },
  {
    id: "hotel-pan",
    name: "ホテルパン",
    description: (
      <>
        <p>卵と生クリームを使用しており、ほんのり甘く、ふんわり・しっとりとした食感が楽しめます。手土産にもいかがでしょうか。</p>
      </>
    ),
    category: categoryIds.shokupan
  },
  {
    id: "genmai-shokupan",
    name: "玄米食パン",
    description: (
      <>
        <p>北海道産小麦に、玄米を混ぜて仕込みました。玄米の香ばしさと、歯ごたえが特徴の、味わい深い食パンです。</p>
      </>
    ),
    category: categoryIds.shokupan
  },
  {
    id: "milk-soft-bread",
    name: "ミルクソフトブレッド",
    description: (
      <>
        <p>牛乳をたっぷりと使用することで、ふわふわな食パンが焼きあがりました。牛乳のほのかな甘さがリッチな気分にさせてくれます。</p>
      </>
    ),
    category: categoryIds.shokupan
  },
  {
    id: "zenryufun-shokupan",
    name: "全粒粉の食パン",
    description: (
      <>
        <p>「春よ恋」全粒粉とSAKAGUCHIの国産小麦をブレンドし、豆乳でまろやかに仕上げました。卵や油脂類は不使用です。</p>
      </>
    ),
    category: categoryIds.shokupan
  },
  {
    id: "cheese-toast",
    name: "チーズトースト（1本）",
    description: (
      <>
        <p>パンドミー食パンの生地に、サイコロ状のチーズを混ぜ込みました。トーストはもちろん、サンドイッチにもおすすめの食パンです。</p>
      </>
    ),
    category: categoryIds.shokupan
  },
  {
    id: "tennenkoubo-raimugi-bread",
    name: "天然酵母ライ麦ブレッド",
    description: (
      <>
        <p>天然酵母を使用した生地に、ライ麦を混ぜて焼き上げました。スライスして香り高いバゲットとしてお召し上がりいただけます。</p>
      </>
    ),
    category: categoryIds.shokupan
  },

]