import Image from "next/image";
import clsx from 'clsx';

export default function LinksComponent({srcImage1,srcImage2, text, textColor}) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            width={16}
            height={16}
            src={srcImage1}
            alt="logo"
          />
          <h3 className={clsx(`text-base font-medium ${textColor}`)}>{text}</h3>
        </div>
        <Image
          width={16}
          height={16}
          src={srcImage2}
          alt="logo"
        />
      </div>
    </>
  );
}
