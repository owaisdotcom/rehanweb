import React from "react";
import DropdownItem from "./DropdownItem";
import Link from "next/link";

const DropdownItems = ({ list }) => {
  const { title, items,path } = list;
  return (
    <div>
     <Link href={path}>
     <h3 className="text-lg text-blackColor font-semibold border-b border-borderColor dark:text-blackColor-dark p-10px mb-10px">
        {title}
      </h3>
     </Link>
      <ul>
        {items?.map((item, idx) => (
          <DropdownItem key={idx} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default DropdownItems;
