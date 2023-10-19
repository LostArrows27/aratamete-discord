import { db } from "@/lib/db";
import { initailProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";

// when user access to the page
// 1. if user is not logged in, redirect to login page
// 2. if user is logged in, check if user has a server
const SetupPage = async () => {
  const profile = await initailProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileID: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/server/${server.id}`);
  }

  return <div>Create A Server</div>;
};

export default SetupPage;
