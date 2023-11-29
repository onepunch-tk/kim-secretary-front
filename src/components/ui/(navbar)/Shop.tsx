import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

type ShopProps = {
  shopName: string;
};
export function Shop({ shopName }: ShopProps) {
  const [active, setActive] = useState(false);
  return (
    <div id="shop-container" className="flex items-center justify-between">
      <Link to="/">
        <h3 className="font-bold text-accent-secondary">{shopName}</h3>
      </Link>
      <button
        className="box-border flex h-5 w-5 items-center justify-center rounded-full border-2 p-1 text-xs"
        onClick={() => setActive((prev) => !prev)}
      >
        <FontAwesomeIcon icon={active ? faChevronUp : faChevronDown} />
      </button>
    </div>
  );
}
