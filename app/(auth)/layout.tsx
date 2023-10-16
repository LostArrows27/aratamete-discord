import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <div className="text-indigo-500">{children}</div>;
};

export default AuthLayout;
