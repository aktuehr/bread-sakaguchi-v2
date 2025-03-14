import { ReactNode } from "react";

type DescriptionCardProps = {
  title: string;
  subTitle: string;
  children: ReactNode;
};

const DescriptionCard = ({
  title,
  subTitle,
  children,
}: DescriptionCardProps) => (
  <div className="flex flex-col gap-2 p-2 bg-secondary rounded-lg">
    <div className="flex flex-col items-center">
      <div className="text-sm font-bold text-primary">{subTitle}</div>
      <div className="text-lg font-bold text-primary underline underline-offset-4 decoration-accent-pink decoration-4 ">{title}</div>
    </div>
    <div className="text-xs">{children}</div>
  </div>
);

export default DescriptionCard

