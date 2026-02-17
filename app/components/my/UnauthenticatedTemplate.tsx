import { useContext, type ReactNode } from "react";
import { TenantContext } from "~/context/tenantManager";
import { UnauthenticatedTemplate as MsUnauthenticatedTemplate } from "@azure/msal-react";
import { Navigate } from "react-router";
import ErrorMessage from "./erroMessage";

interface UnauthenticatedTemplateProps {
  children: ReactNode;
}

const UnauthenticatedTemplate: React.FC<UnauthenticatedTemplateProps> = ({
  children,
}) => {
  const tenantManager = useContext(TenantContext);
  if (!tenantManager.tenant) {
    return (
      <ErrorMessage
        message="Unknown tenant"
        description="Te rog introdu adresa corecta"
      />
    );
    // return null;
  }

  switch (tenantManager.tenant.AuthFlow) {
    case "etti":
      return <MsUnauthenticatedTemplate>{children}</MsUnauthenticatedTemplate>;
    case "none":
      return <Navigate to={"/categories"} />;
    default:
      return (
        <ErrorMessage
          message="Unknown tenant"
          description="Te rog introdu adresa corecta"
        />
      );
  }
};

export default UnauthenticatedTemplate;
