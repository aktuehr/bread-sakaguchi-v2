'use client';

type NewsListItemProps = {
  emoji: string;
  children: string;
  emojiLabel?: string;
};

const NewsListItem = ({
  emoji,
  children,
  emojiLabel = children
}: NewsListItemProps) => (
  <div className="p-1 rounded bg-secondary flex gap-1">
    <span role="img" aria-label={emojiLabel}>{emoji}</span>
    <span>{children}</span>
  </div>
);


export default NewsListItem;