import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

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
      return new NextResponse("Missing serverID", { status: 400 });
    }

    // cause only moderators can change the invite code
    const server = await db.server.update({
      where: {
        id: params.serverID,
        profileID: profile.id,
      },
      data: {
        inviteCode: uuid(),
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.log("[SERVER-ID]: ", params.serverID);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}
