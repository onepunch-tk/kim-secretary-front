import { Link } from "react-router-dom";

type MessageProps = {
  alarmCount: number;
};

export function Message({ alarmCount }: MessageProps) {
  return (
    <div
      id="message-container"
      className="mt-2.5 flex items-center justify-start text-sm"
    >
      <span className="min-w-[70px]">잔여 알림</span>
      <span>{alarmCount}</span>
      <Link
        className="ml-auto rounded-md bg-accent px-2 py-1 text-xs font-semibold text-black ring-1 ring-accent-secondary"
        to=""
      >
        충전
      </Link>
    </div>
  );
}
