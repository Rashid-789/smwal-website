type Props = {
  value: string;
  label: string;
};

export default function StatItem({ value, label }: Props) {
  return (
    <div className="text-center">
      <div className="select-none text-[52px] font-extrabold leading-none tracking-tight text-white/12 md:text-[56px]">
        {value}
      </div>
      <div className="mt-2 text-sm font-semibold text-white/85">{label}</div>
    </div>
  );
}
