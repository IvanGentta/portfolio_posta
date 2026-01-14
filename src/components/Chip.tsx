type TechBadgeProps = {
  name: string;
};

export default function Chip({ name }: TechBadgeProps) {
  return (
    <li className="px-3 py-1 text-xs font-medium bg-black/50 border border-white/30 rounded-full">
      {name}
    </li>
  );
}
