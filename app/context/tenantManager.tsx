import { createContext, useEffect, useState, type Dispatch } from "react";
import { ApiRequest } from "~/lib/utils";
import type { Namespace } from "~/types/db";

interface TenantContextProps {
  tenant: Namespace | null;
  setTenant: Dispatch<React.SetStateAction<Namespace | null>>;
}

export const TenantContext = createContext<TenantContextProps>({
  tenant: null,
  setTenant: () => {},
});

type ThemeProvidersProps = {
  children: React.ReactNode;
};

export function TenantProvider({ children, ...props }: ThemeProvidersProps) {
  const [tenant, setTenant] = useState<Namespace | null>(null);

  useEffect(() => {
    ApiRequest("/namespace", {}).then((data) => {
      data.json().then((data) => {
        console.log(data);
        setTenant(data);
      });
    });
  }, []);

  const values = {
    tenant: tenant,
    setTenant: setTenant,
  };

  return (
    <TenantContext.Provider {...props} value={{ ...values }}>
      {children}
    </TenantContext.Provider>
  );
}

// nici nu cred ca am nevoie de asa ceva
