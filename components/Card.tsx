'use client';

export default function Card({
  imageUrl,
  link,
  title,
  subtitle,
}: {
  imageUrl: string;
  link: string;
  title: string;
  subtitle: string;
}) {
  return (
    <>
      <a href={link}>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[350px] object-cover rounded-sm grayscale hover:grayscale-0 transition duration-300"
        />

        <div className="space-y-2 my-4">
          <p className="text-xs">{title}</p>
          <p className="text-xl">{subtitle}</p>
        </div>
      </a>
    </>
  );
}
