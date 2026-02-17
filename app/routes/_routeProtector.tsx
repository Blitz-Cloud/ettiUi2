import { InteractionStatus } from "@azure/msal-browser";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { Navigate, Outlet } from "react-router";
import AuthenticatedTemplate from "~/components/my/AuthenticatedTemplate";
import UnauthenticatedTemplate from "~/components/my/UnauthenticatedTemplate";

export default function Home() {
  const { inProgress: msalStatus } = useMsal();
  if (msalStatus !== InteractionStatus.None) {
    return <div>Loading</div>;
  }

  return (
    <>
      <AuthenticatedTemplate>
        <Outlet />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Navigate to={"/auth?from=" + document.location.pathname}></Navigate>
      </UnauthenticatedTemplate>
    </>
  );
}
