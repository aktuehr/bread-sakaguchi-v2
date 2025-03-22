"use client";

import { Route } from 'next';
import Link from 'next/link';
import React, { ReactNode } from 'react';

export type LinkButtonProps = {
  linkHref: string;
  linkText: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = (
  {
    linkHref,
    linkText,
    leftIcon,
    rightIcon
  }
) => {
  const isExternal = /^https?:\/\//.test(linkHref);
  const isSpecialLink = /^(tel:|mailto:|sms:)/.test(linkHref);

  return isExternal || isSpecialLink ? (
    <a
      href={linkHref}
      className="px-4 py-2 bg-primary text-secondary font-extrabold rounded-lg inline-flex justify-center gap-1"
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {leftIcon && leftIcon}
      <span className="inline-flex items-center">{linkText}</span>
      {rightIcon && rightIcon}
    </a>
  ) : (
    <Link
      href={linkHref}
      className="px-4 py-2 bg-primary text-secondary font-extrabold rounded-lg inline-flex justify-center gap-1"
    >
      {leftIcon && leftIcon}
      <span className="inline-flex items-center">{linkText}</span>
      {rightIcon && rightIcon}
     </Link>
  )
}

export default LinkButton;