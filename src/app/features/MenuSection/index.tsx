'use client';

import Link from "next/link";
import { ReactNode } from "react";

type MenuSectionProps = {
  title: string;
  contents: ReactNode;
  buttonText: string;
  buttonHref: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export default function MenuSection({
  title,
  contents,
  buttonText,
  leftIcon = '',
  rightIcon = ''
}: MenuSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      <h2 className="font-bold text-primary">{title}</h2>
      {contents}
      {/* TODO: href */}
      {/* TODO: component */}
      <Link
        href="/"
        className="px-4 py-2 bg-primary text-secondary font-extrabold rounded-lg inline-flex justify-center gap-1"
      >
        {leftIcon}
        <span className="inline-flex items-center">{buttonText}</span>
        {rightIcon}
      </Link>
    </div>
  );
}
