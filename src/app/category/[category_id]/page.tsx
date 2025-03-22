import { CategoryID } from "@/app/constants/categories";
import { breads } from "@/app/constants/breads";
import { notFound } from "next/navigation";
import { getCategoryById } from "@/app/lib/category";

type CategoryPageProps = {
  params: { category_id: CategoryID };
};

export function generateStaticParams() {
  const categories = Array.from(new Set(breads.map((bread) => bread.category)));

  return categories.map((category) => ({
    category_id: category,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category_id } = params;
  
  // 指定されたカテゴリのパンを取得
  const filteredBreads = breads.filter((bread) => bread.category === category_id);
  
  // 存在しないカテゴリの場合は 404 にする
  if (filteredBreads.length === 0) {
    return notFound();
  }

  const categoryInfo = getCategoryById(category_id);
  
  return (
    <main className="flex flex-col gap-4 py-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-primary px-4">{categoryInfo?.name}</h1>
        <p className="px-4">SAKAGUCHIの{categoryInfo?.name}の紹介です。</p>
      </div>
      <ul className="flex flex-col gap-4 px-4">
        {filteredBreads.map((bread) => (
          <li key={bread.id} className="flex flex-col border border-secondary rounded-2xl overflow-hidden">
            <div className="bg-secondary p-2">
              <h2 className="text-sm font-bold text-primary">{bread.name}</h2>
              {/* TODO: styling */}
              {bread.priceWithTax && <p>価格: {bread.priceWithTax}円 (税込)</p>}
            </div>
            {/* TODO: styling */}
            {bread.image && <img src={bread.image} alt={bread.name} width="200" />}
            <div className="text-xs p-2">{bread.description}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}