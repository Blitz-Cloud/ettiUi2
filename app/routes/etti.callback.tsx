import { AlertCircleIcon, Loader2Icon } from "lucide-react";
import type { Route } from "./+types/home";
import { Navigate, useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";
import { Alert, AlertTitle } from "~/components/ui/alert";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useAccount,
  useIsAuthenticated,
  useMsal,
} from "@azure/msal-react";
import { ApiRequest } from "~/lib/utils";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Callback() {
  const IsAuthenticated = useIsAuthenticated();
  const { instance, accounts, inProgress } = useMsal();
  const account = useAccount(accounts[0] || {});
  const navigate = useNavigate();
  const redirectLocation = localStorage.getItem("from");
  useEffect(() => {
    if (account) {
      instance
        .acquireTokenSilent({
          scopes: ["User.Read"],
          account: account,
        })
        .then((response) => {
          if (response) {
            console.log(response);
            ApiRequest("/auth/etti", {
              headers: {
                Authorization: `Bearer ${response.idToken}`,
              },
            }).then(() => {
              navigate("/categories");
            });
          }
        });
    }
  }, [account, instance]);
  return (
    <div className="h-[100vh] flex justify-center items-center ">
      <div className="flex justify-center">
        <Loader2Icon className="animate-spin" />
        <p className="ml-2">Vei fi redirectionat curand</p>
      </div>
    </div>
  );
}
