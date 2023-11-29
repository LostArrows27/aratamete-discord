import { NextResponse } from "next/server";
import { Message } from "@prisma/client";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

const MESSAGES_BATCH = 10;

export async function DELETE(
  req: Request
) {
  try {
    const profile = await currentProfile();
    const { searchParams } = new URL(req.url);

    // const cursor = searchParams.get("cursor");
    const channelId = searchParams.get("channelId");
    const memberId = searchParams.get("memberId");
    // console.log(channelId, memberId)
    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
  
    if (!channelId) {
      return new NextResponse("Channel ID missing", { status: 400 });
    }
    // const member = server.members.find((member) => member.profileID === profile.id);

    if (!memberId) {
      return NextResponse.json({ error: "Member not found" });
    }
    let messages = undefined;
   
    if (req.method === "DELETE") {
        messages = await db.message.updateMany({
        where: {
          channelId: channelId as string,
          memberId: memberId,
          deleted: false,
        },
        data: {
          fileUrl: null,
          content: "This message has been deleted.",
          deleted: true,
        },
      })
    }
    // if (cursor) {
    //   messages = await db.message.findMany({
    //     take: MESSAGES_BATCH,
    //     skip: 1,
    //     cursor: {
    //       id: cursor,
    //     },
    //     where: {
    //       channelId,
    //     },
    //     include: {
    //       member: {
    //         include: {
    //           profile: true,
    //         }
    //       }
    //     },
    //     orderBy: {
    //       createdAt: "desc",
    //     }
    //   })
    // } else {
    //   messages = await db.message.findMany({
    //     take: MESSAGES_BATCH,
    //     where: {
    //       channelId,
    //     },
    //     include: {
    //       member: {
    //         include: {
    //           profile: true,
    //         }
    //       }
    //     },
    //     orderBy: {
    //       createdAt: "desc",
    //     }
    //   });
    // }

    // let nextCursor = null;

    // if (messages.length === MESSAGES_BATCH) {
    //   nextCursor = messages[MESSAGES_BATCH - 1].id;
    // }

    return NextResponse.json(messages);
  } catch (error) {
    console.log("[MESSAGES_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}