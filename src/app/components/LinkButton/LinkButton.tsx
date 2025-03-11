"use client";

import { Route } from 'next';
import Link from 'next/link';
import React, { ReactNode } from 'react';

export type LinkButtonProps = {
  linkHref: Route;
  linkText: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = (
  {
    linkText,
    leftIcon = '',
    rightIcon = ''
  }
) => (
  <Link
    href="/"
    className="px-4 py-2 bg-primary text-secondary font-extrabold rounded-lg inline-flex justify-center gap-1"
  >
    {leftIcon}
    <span className="inline-flex items-center">{linkText}</span>
    {rightIcon}
  </Link>
)

export default LinkButton;