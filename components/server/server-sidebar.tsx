import { db } from "@/lib/db";
import { ChannelType, MemberRole, Profile } from "@prisma/client";
import { redirect } from "next/navigation";
import ServerHeader from "./server-header";
import { ScrollArea } from "../ui/scroll-area";
import ServerSearch from "./server-search";
import { Hash, Mic, ShieldAlert, ShieldCheck, Video } from "lucide-react";

type ServerSidebarProps = {
  serverID: string;
  profile: Profile | null;
};

const iconMap = {
  [ChannelType.TEXT]: <Hash className="w-4 h-4 mr-2" />,
  [ChannelType.AUDIO]: <Mic className="w-4 h-4 mr-2" />,
  [ChannelType.VIDEO]: <Video className="w-4 h-4 mr-2" />,
};

const roleIconMap = {
  [MemberRole.GUEST]: null,
  [MemberRole.MODERATOR]: (
    <ShieldCheck className="w-4 h-4 mr-2 text-indigo-500" />
  ),
  [MemberRole.ADMIN]: <ShieldAlert className="text-rose-500 w-4 h-4 mr-2" />,
};

// Server channel inforamtion for a specific server
const ServerSidebar = async ({ serverID, profile }: ServerSidebarProps) => {
  if (!profile) {
    return redirect("/");
  }

  // query all channel in the server
  // and each channel query all members sort by their role
  const server = await db.server.findUnique({
    where: {
      id: serverID,
    },
    include: {
      channels: {
        orderBy: {
          createdAt: "asc",
        },
      },
      members: {
        include: {
          profile: true,
        },
        orderBy: {
          role: "asc",
        },
      },
    },
  });

  const textChannel = server?.channels.filter(
    (channel) => channel.type === ChannelType.TEXT
  );

  const voiceChannel = server?.channels.filter(
    (channel) => channel.type === ChannelType.AUDIO
  );

  const videoChannel = server?.channels.filter(
    (channel) => channel.type === ChannelType.VIDEO
  );

  // check all other member in the server
  const member = server?.members.filter(
    (member) => member.profileID !== profile.id
  );

  if (!server) {
    return redirect("/");
  }

  const userRole = server.members.find(
    (member) => member.profileID === profile.id
  )?.role;

  return (
    <div className="text-primary flex flex-col w-full h-full dark:bg-[#2B2D31] bg-[#F2F3F5] ">
      <ServerHeader role={userRole} server={server} />
      <ScrollArea className="flex-1 px-3">
        <div className="mt-2">
          <ServerSearch
            data={[
              {
                label: "Text Channels",
                type: "channel",
                data: textChannel?.map((channel) => ({
                  icon: iconMap[channel.type],
                  name: channel.name,
                  id: channel.id,
                })),
              },
              {
                label: "Voice Channels",
                type: "channel",
                data: voiceChannel?.map((channel) => ({
                  icon: iconMap[channel.type],
                  name: channel.name,
                  id: channel.id,
                })),
              },
              {
                label: "Video Channels",
                type: "channel",
                data: videoChannel?.map((channel) => ({
                  icon: iconMap[channel.type],
                  name: channel.name,
                  id: channel.id,
                })),
              },
              {
                label: "Members",
                type: "member",
                data: member?.map((person) => ({
                  icon: roleIconMap[person.role],
                  name: person.profile.name,
                  id: person.id,
                })),
              },
            ]}
          />
        </div>
      </ScrollArea>
    </div>
  );
};

export default ServerSidebar;
