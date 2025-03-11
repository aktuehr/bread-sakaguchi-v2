'use client';

import { LinkButton, LinkButtonProps } from "@/app/components/LinkButton";
import { ReactNode } from "react";

type MenuSectionProps = {
  title: string;
  children: ReactNode;
} & Omit<LinkButtonProps, 'children'>;

export default function MenuSection({
  title,
  children,
  ...linkButtonProps
}: MenuSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      <h2 className="font-bold text-primary">{title}</h2>
      {children}
      <LinkButton {...linkButtonProps} />
    </div>
  );
}
