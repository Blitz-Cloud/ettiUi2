import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { TenantContext } from "~/context/tenantManager";
import { ApiRequest } from "~/lib/utils";

export default function Navbar() {
  const tenantManager = useContext(TenantContext);
  const [name, setName] = useState<string>("");
  useEffect(() => {
    if (tenantManager.tenant?.Name == "root") {
      setName("BlitzCloud");
      return;
    }
    setName(tenantManager.tenant?.Name || "");
  }, [tenantManager.tenant]);
  return (
    <nav className="flex justify-between text-xl mb-5 px-2">
      <Link className="font-bold text-xl" to="/">
        {name.toUpperCase()}
      </Link>
      <div className="flex items-center">
        <Link to="/categories" className="mx-2">
          Categorii
        </Link>
        {/* <Link to="/labs/posts" className="mx-2">
          Labs
        </Link> */}
      </div>
    </nav>
  );
}
