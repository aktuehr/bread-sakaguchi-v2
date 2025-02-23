'use client';

type BusinessHourInfoProps = {
  title: string;
  content: string;
};

export default function BusinessHourInfo({ title, content }: BusinessHourInfoProps) {
  return (
    <div className="flex gap-x-2 items-center">
      <span className="py-1 px-2 bg-secondary font-bold text-primary rounded-md">{title}</span>
      <span className="text-secondary">{content}</span>
    </div>
  );
}
