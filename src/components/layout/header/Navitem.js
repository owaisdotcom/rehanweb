import Link from "next/link";

export default function Navitem({ navItem, idx, children }) {
  const { name, path, dropdown, isRelative } = navItem;

  return (
    <li
      key={idx}
      className={`nav-item group ${isRelative ? "relative" : ""} ${
        idx === 0 ? "bg-black text-white" : ""
      }`}
    >
      <Link
        href={path}
        className={`px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-2 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-white dark:text-whiteColor ${
          idx === 0 ? "flex items-center gap-1" : ""
        }`}
      >
        {idx === 0 && <span className="text-xl">☰</span>}
        {name} {dropdown && <i className=""></i>}
      </Link>

      {/* dropdown */}
      {children}
    </li>
  );
}
