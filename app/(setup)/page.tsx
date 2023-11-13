import { InitialModal } from "@/components/modals/initial-modal";
import { db } from "@/lib/db";
import { initailProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";

// when user access to the page
// 1. if user is not logged in, redirect to login page
// 2. if user is logged in, check if user has a server
// 3. if user has a  server => redirect to the first server found
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
    return redirect(`/servers/${server.id}`);
  }

  return <InitialModal />;
};

export default SetupPage;
