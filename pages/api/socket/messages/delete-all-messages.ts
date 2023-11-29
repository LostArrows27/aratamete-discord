import { NextApiRequest } from "next";
import { MemberRole } from "@prisma/client";

import { NextApiResponseServerIo } from "@/types/type";
import { currentProfilePages } from "@/lib/current-profile pages";
import { db } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIo,
) {
  if (req.method !== "DELETE" ) {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const profile = await currentProfilePages(req);
    const { messageId, serverId, channelId } = req.query;
    const { content } = req.body;

    if (!profile) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (!serverId) {
      return res.status(400).json({ error: "Server ID missing" });
    }

    if (!channelId) {
      return res.status(400).json({ error: "Channel ID missing" });
    }

    const server = await db.server.findFirst({
      where: {
        id: serverId as string,
        members: {
          some: {
            profileID: profile.id,
          }
        }
      },
      include: {
        members: true,
      }
    })

    if (!server) {
      return res.status(404).json({ error: "Server not found" });
    }

    const channel = await db.channel.findFirst({
      where: {
        id: channelId as string,
        serverID: serverId as string,
      },
    });
  
    if (!channel) {
      return res.status(404).json({ error: "Channel not found" });
    }

    const member = server.members.find((member) => member.profileID === profile.id);

    if (!member) {
      return res.status(404).json({ error: "Member not found" });
    }

    // let message = await db.message.findFirst({
    //   where: {
    //     id: messageId as string,
    //     channelId: channelId as string,
    //   },
    //   include: {
    //     member: {
    //       include: {
    //         profile: true,
    //       }
    //     }
    //   }
    // })

    // if (!message || message.deleted) {
    //   return res.status(404).json({ error: "Message not found" });
    // }

    // const isMessageOwner = message.memberId === member.id;
    // const isAdmin = member.role === MemberRole.ADMIN;
    // const isModerator = member.role === MemberRole.MODERATOR;
    // const canModify = isMessageOwner || isAdmin || isModerator;

    // if (!canModify) {
    //   return res.status(401).json({ error: "Unauthorized" });
    // }
    let messages = null
    if (req.method === "DELETE") {
        messages = await db.message.updateMany({
        where: {
          channelId: channelId as string,
          memberId: member.id,
          deleted: false,
        },
        data: {
          fileUrl: null,
          content: "This message has been deleted.",
          deleted: true,
        },
      })
    }

   

    const updateKey = `chat:${channelId}:messages:update`;

    res?.socket?.server?.io?.emit(updateKey, messages);

    return res.status(200).json(messages);
  } catch (error) {
    console.log("[MESSAGE_ID]", error);
    return res.status(500).json({ error: "Internal Error" });
  }
}