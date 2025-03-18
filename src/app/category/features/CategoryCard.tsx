'use client';

import { LinkButton, LinkButtonProps } from "@/app/components/LinkButton";
import { ReactNode } from "react";
import { MaterialSymbol } from "react-material-symbols";

type CategoryCardProps = {
  categoryName: string;
  children: ReactNode;
} & Pick<LinkButtonProps, "linkHref">;

const CategoryCard = ({
  categoryName,
  children,
  linkHref
}: CategoryCardProps) => (
  <div className="flex flex-col bg-secondary gap-2 px-2 py-4 rounded-2xl">
    <div className="text-lg/none font-bold text-primary">{categoryName}</div>
    <div className="text-xs">{children}</div>
    <LinkButton
      linkHref={linkHref}
      linkText={"商品一覧"}
      rightIcon={<MaterialSymbol icon='chevron_right' size={24} />}
      />
  </div>
);

export default CategoryCard