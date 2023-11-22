import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  {
    params,
  }: {
    params: { serverID: string };
  }
) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!params.serverID) {
      return new NextResponse("Server ID is missing", { status: 400 });
    }

    // admin can't leave server + user have to belong to server
    const server = await db.server.update({
      where: {
        id: params.serverID,
        profileID: {
          not: profile.id,
        },
        members: {
          some: {
            profileID: profile.id,
          },
        },
      },
      data: {
        members: {
          deleteMany: {
            profileID: profile.id,
          },
        },
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.log("[SERVER_ID_LEAVE]: ", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
