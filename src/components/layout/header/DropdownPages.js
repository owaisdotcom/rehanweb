import DropdownContainer from "@/components/shared/containers/DropdownContainer";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DropdownItems from "./DropdownItems";
import megaMenu2 from "@/assets/images/mega/mega_menu_2.png";

const DropdownPages = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://mathsflix-backend.vercel.app/api/products/categories");
        const data = await response.json();
        const formattedLists = data?.map(category => ({
          title: category?.name,
          path: `/category/${category?._id}`,
          items: category?.subcategories?.map(sub => ({
            name: sub?.name,
            status: null,
            path: `/category/${category?._id}/subcategory/${sub?._id}`
          })) || []
        }));
        setLists(formattedLists);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <DropdownContainer>
      <div className="grid grid-cols-4">
        {lists?.map((list, idx) => (
          <DropdownItems key={idx} list={list} />
        ))}
      </div>
    
    </DropdownContainer>
  );
};

export default DropdownPages;