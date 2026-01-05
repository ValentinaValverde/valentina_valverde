export default function Pill({ text, url }: { text: string; url: string }) {
  return (
    <a href={url} target="_blank">
      <div className="bg-[var(--foreground)] border border-[var(--background)] py-4 px-12 w-fit rounded-full">
        <p className="text-3xl text-[var(--background)]">{text}</p>
      </div>
    </a>
  );
}
