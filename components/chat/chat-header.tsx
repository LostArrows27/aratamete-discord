import { Hash, Menu } from "lucide-react";
import MobileToggle from "../mobile-toggle";
import UserAvatar from "../user-avatar";
import SocketIndicator from "../socket-indicator";
import { ChatVideoButton } from "./chat-video-button";

type ChatHeaderProps = {
  serverId: string;
  name: string;
  type: "channel" | "conversation";
  imageUrl?: string;
};

const ChatHeader = ({ serverId, name, type, imageUrl }: ChatHeaderProps) => {
  return (
    <div className="text-md border-neutral-200 dark:border-neutral-800 flex items-center h-12 px-3 font-semibold border-b-2">
      {/* TODO: handle mobile view open drawer of lefside bar */}
      <MobileToggle serverId={serverId} />
      {type === "channel" && (
        <Hash className="text-zinc-500 dark:text-zinc-400 w-5 h-5 ml-2 mr-1" />
      )}
      {type === "conversation" && (
        <UserAvatar src={imageUrl} className="h-8 w-8 md:h-8 md:w-8 mr-2" />
      )}
      <p className="text-md dark:text-white font-semibold text-black">{name}</p>
      <div className="flex items-center ml-auto">
        {type === "conversation" && <ChatVideoButton />}
        <SocketIndicator />
      </div>
    </div>
  );
};

export default ChatHeader;
