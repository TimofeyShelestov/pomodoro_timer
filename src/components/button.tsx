"use client";

export default function Button({
  title,
  onClick,
  className,
}: {
  title: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      className={`bg-green-500 text-black font-bold py-2 px-4 rounded hover:bg-green-900 hover:text-gray-400 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
