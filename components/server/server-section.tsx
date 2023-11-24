"use client";

import { ServerWithMembersWithProfiles } from "@/type";
import { ChannelType, MemberRole } from "@prisma/client";
import { ActionTooltip } from "../action-tooltip";
import { Plus, Settings } from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";

type ServerSectionProps = {
  label: string;
  role?: MemberRole;
  sectionType: "channel" | "member";
  channelType?: ChannelType;
  server?: ServerWithMembersWithProfiles;
};

// server section is the label of the channel category : text, audio, video
const ServerSection = ({
  label,
  role,
  sectionType,
  channelType,
  server,
}: ServerSectionProps) => {
  const { onOpen } = useModal();

  return (
    <div className="flex items-center justify-between py-2">
      <p className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold uppercase">
        {label}
      </p>
      {role !== MemberRole.GUEST && sectionType === "channel" && (
        <ActionTooltip label="Create Channel" side="top">
          <button
            onClick={() => {
              onOpen("createChannel");
            }}
            className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
          >
            <Plus className="w-4 h-4" />
          </button>
        </ActionTooltip>
      )}
      {role === MemberRole.ADMIN && sectionType === "member" && (
        <ActionTooltip label="Invite Member" side="top">
          <button
            onClick={() => {
              onOpen("members", { server });
            }}
            className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
          >
            <Settings className="w-4 h-4" />
          </button>
        </ActionTooltip>
      )}
    </div>
  );
};

export default ServerSection;
