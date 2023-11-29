import ServerSidebar from "@/components/server/server-sidebar";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const ServerIDLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    serverId: string;
  };
}) => {
  const profile = await currentProfile();

  if (!profile) {
    redirectToSignIn();
  }

  // only server exist and current profile is a member of the server
  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
      members: {
        some: {
          profileID: profile?.id,
        },
      },
    },
  });

  if (!server) {
    return redirect("/");
  }

  return (
    <div className="h-full">
      <div
        id="side"
        className="md-max:hidden w-60 fixed inset-y-0 flex-col h-full"
      >
        <ServerSidebar serverID={params.serverId} />
      </div>
      <main id="nav-2" className="md:pl-60 h-full">
        {children}
      </main>
    </div>
  );
};

export default ServerIDLayout;
