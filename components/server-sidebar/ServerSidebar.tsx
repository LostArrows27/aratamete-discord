import { db } from "@/lib/db";
import { ChannelType, Profile } from "@prisma/client";
import { redirect } from "next/navigation";
import ServerHeader from "../server/server-header";

type ServerSidebarProps = {
  serverID: string;
  profile: Profile | null;
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
    </div>
  );
};

export default ServerSidebar;
