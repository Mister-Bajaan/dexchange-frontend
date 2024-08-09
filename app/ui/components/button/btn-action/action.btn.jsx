import clsx from "clsx";

export default function ActionBtn({ children, bgColor, textColor, borderColor }) {
  return (
    <button className={clsx(`py-2 px-4 text-xs rounded-[10px] w-20 font-medium border ${textColor} ${bgColor} ${borderColor} flex items-center justify-center`, )}>
      {children }
    </button>
  );
}