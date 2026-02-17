import { useContext, type ReactNode } from "react";
import { TenantContext } from "~/context/tenantManager";
import { AuthenticatedTemplate as MsAuthenticatedTemplate } from "@azure/msal-react";
import { Navigate } from "react-router";
import ErrorMessage from "./erroMessage";

interface AuthenticatedTemplateProps {
  children: ReactNode;
}

const AuthenticatedTemplate: React.FC<AuthenticatedTemplateProps> = ({
  children,
}) => {
  const tenantManager = useContext(TenantContext);
  console.log(tenantManager);
  if (!tenantManager.tenant) {
    // return (
    //   <ErrorMessage
    //     message="Unknown tenant"
    //     description="Te rog introdu adresa corecta"
    //   />
    // );
    return null;
  }

  switch (tenantManager.tenant.AuthFlow) {
    case "etti":
      return <MsAuthenticatedTemplate>{children}</MsAuthenticatedTemplate>;
    case "none":
      return <>{children}</>;
    default:
      return (
        <ErrorMessage
          message="Unknown tenant"
          description="Te rog introdu adresa corecta"
        />
      );
  }
};

export default AuthenticatedTemplate;
