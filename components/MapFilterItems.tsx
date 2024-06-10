import { categoryItems } from "@/app/lib/categoryItems";
import Image from "next/image";
import Link from "next/link";

const MapFilterItems = () => {
  return (
    <div>
      {categoryItems.map((item) => (
        <Link key={item.id} href="">
          <div>
            <Image
              src={item.imageUrl}
              alt="category-image"
              className="w-6 h-6"
              width={24}
              height={24}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MapFilterItems;
