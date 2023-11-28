import { Shop } from "@components/ui/navbar/Shop.tsx";
import { Owner } from "@components/ui/navbar/Owner.tsx";
import { Message } from "@components/ui/navbar/Message.tsx";

type ProfileProps = {
  shopName: string;
  ownerName: string;
  alarmCount: number;
};

export function Profile({ shopName, ownerName, alarmCount }: ProfileProps) {
  return (
    <section className="p-3">
      <Shop shopName={shopName} />
      <Owner ownerName={ownerName} />
      <Message alarmCount={alarmCount} />
    </section>
  );
}
