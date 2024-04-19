import { memo } from "react";

function RangeSwitch({ el, handleIndex, isSelected, selectedID }) {
  return (
    <button
      onClick={() => handleIndex(el.id)}
      className={`px-3 py-1.5 ${
        isSelected && selectedID
          ? "bg-teal-400"
          : "bg-blue-700 hover:bg-blue-800"
      } rounded-2xl font-gilroy text-xs md:text-sm text-[#ffffff]`}
    >
      {el.title}
    </button>
  );
}

export default memo(RangeSwitch);
