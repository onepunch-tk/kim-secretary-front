import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Ads() {
  return (
    <section
      id="ads-container"
      className="flex h-auto cursor-pointer items-center justify-start rounded-xl border p-2 md:p-3.5"
    >
      <div className="mr-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-black md:h-10 md:w-10">
        <FontAwesomeIcon icon={faShoppingBasket} className="md:text-xl" />
      </div>
      <div className="flex flex-col items-start py-0">
        <h2 className="mb-0.5 text-xs font-bold text-accent-secondary md:text-sm">
          김비서 스토어
        </h2>
        <span className="text-[10px] md:text-xs">샵 재료 구매까지 한번에!</span>
      </div>
    </section>
  );
}
