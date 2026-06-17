import Image from "next/image";

type MenuItemCardProps = {
  image: string;
  imageLabel: string;
  name: string;
  description: string;
  price: string;
};

export default function MenuItemCard({
  image,
  imageLabel,
  name,
  description,
  price,
}: MenuItemCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#F1D8C8] bg-[#FFF8F1] shadow-sm">
      <div className="relative h-56 border-b border-[#F1D8C8]">
        <Image
          src={image}
          alt={imageLabel}
          fill
          className="object-cover object-[center-60%]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-lg font-bold text-[#3A2418]">{name}</h3>
        <p className="text-sm leading-6 text-[#5C4033]">{description}</p>
        <span className="text-base font-semibold text-[#B65A3C]">{price}</span>
      </div>
    </div>
  );
}
