import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Ads() {
  return (
    <div
      id="ads-container"
      className="flex cursor-pointer items-center justify-start rounded-xl border px-2 py-3.5"
    >
      <div className="mr-1.5 rounded-full bg-accent p-3 text-black">
        <FontAwesomeIcon icon={faShoppingBasket} size="lg" />
      </div>
      <div className="flex flex-col items-start px-3 py-0">
        <h2 className="mb-1.5 font-bold text-accent-secondary">
          김비서 스토어
        </h2>
        <span className="text-xs">샵 재료 구매까지 한번에!</span>
      </div>
    </div>
  );
}
