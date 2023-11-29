type OwnerProps = {
  ownerName: string;
};

export function Owner({ ownerName }: OwnerProps) {
  return (
    <div
      id="owner-container"
      className="mt-5 flex items-center justify-start text-sm"
    >
      <span className="min-w-[70px]">점주</span>
      <span>{ownerName}</span>
    </div>
  );
}
