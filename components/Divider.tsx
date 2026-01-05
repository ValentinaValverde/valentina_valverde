export default function Divider({ text }: { text: string }) {
  return (
    <div className="m-6 space-y-4">
      <p className="!font-mono">{text}</p>
      <div className="w-full h-[0.7] bg-[var(--foreground)]" />
    </div>
  );
}
