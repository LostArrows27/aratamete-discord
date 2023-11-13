import { authMiddleware } from "@clerk/nextjs";

// route that not require authentication
export default authMiddleware({
  publicRoutes: ["/api/uploadthing"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
