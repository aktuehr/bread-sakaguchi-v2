'use client';

import { categories } from "../constants/categories";
import CategoryCard from "./features/CategoryCard";

export default function CategoryPage() {
  return (
    <main className="flex flex-col gap-8 py-8">
      <h1 className='text-2xl font-bold text-primary px-4'>SAKAGUCHIのパン紹介</h1>
      <p className="px-4">SAKAGUCHIでは毎日計100種類以上のパンを焼き上げています。種類毎にご紹介します。是非気になるパンを見つけてください。</p>
      <div className="grid grid-cols-2 gap-2 px-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} categoryName={category.name} linkHref={`/category/${category.id}`}>
            {category.description}
          </CategoryCard>
        ))}
      </div>
    </main>
  );
}