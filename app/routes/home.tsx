import { useContext } from "react";
import { Button } from "~/components/ui/button";
import { TenantContext } from "~/context/tenantManager";
// import * as React from "react";

export default function Home() {
  const tenantManager = useContext(TenantContext);

  return (
    <>
      <meta title={tenantManager.tenant?.Name} />
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Button>Click me</Button>
      </div>
    </>
  );
}
