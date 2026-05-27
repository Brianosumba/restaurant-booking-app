type MenuItemCardProps = {
  imageLabel: string;
  name: string;
  description: string;
  price: string;
};

export default function MenuItemCard({
  imageLabel,
  name,
  description,
  price,
}: MenuItemCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#F1D8C8] bg-[#FFF8F1] shadow-sm">
      <div className="h-44 bg-[#B65A3C]/20 border-b border-[#F1D8C8] flex items-center justify-center text-sm font-medium text-[#B65A3C]">
        {imageLabel}
      </div>
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-lg font-bold text-[#3A2418]">{name}</h3>
        <p className="text-sm leading-6 text-[#5C4033]">{description}</p>
        <span className="text-base font-semibold text-[#B65A3C]">{price}</span>
      </div>
    </div>
  );
}
