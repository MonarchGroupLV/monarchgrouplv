export default function GoldRule({ width = 180 }: { width?: number }) {
  return (
    <div
      style={{ width }}
      className="h-px bg-gradient-to-r from-transparent via-gold to-transparent"
    />
  );
}
