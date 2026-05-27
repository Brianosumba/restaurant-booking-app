type MenuCategoryTabsProps = {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function MenuCategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: MenuCategoryTabsProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = category === activeCategory;
        return (
          <button
            key={category}
            type="button"
            className={`rounded-full px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#FFFCF8] ${isActive ? "bg-[#B65A3C] text-white" : "border border-[#F1D8C8] text-[#3A2418] hover:bg-[#FFF8F1] transition-colors"}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
