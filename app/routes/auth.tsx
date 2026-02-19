import type { Route } from "./+types/home";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  useIsAuthenticated,
  useMsal,
  useMsalAuthentication,
} from "@azure/msal-react";
import { Navigate, useNavigate, useSearchParams } from "react-router";
import { Loader2Icon } from "lucide-react";
import { InteractionType } from "@azure/msal-browser";
import MicrosoftBtn from "~/components/my/microsftBtn";
import { useEffect, useState } from "react";
import AuthenticatedTemplate from "~/components/my/AuthenticatedTemplate";
import UnauthenticatedTemplate from "~/components/my/UnauthenticatedTemplate";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Autentificate" },
    { name: "description", content: "Pagina de autentificare" },
  ];
}

export default function Auth() {
  const { instance, accounts, inProgress } = useMsal();
  const [redirectUri, setRedirectUri] = useState<string>("");
  useEffect(() => {
    setRedirectUri(`https://${window.location.host}/etti/callback`);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="h-screen flex justify-center items-center">
      <AuthenticatedTemplate>
        <Navigate to="/etti/callback" />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Card className=" w-full max-w-sm text-center">
          <CardHeader>
            <CardTitle>Autentifica-te</CardTitle>
            <CardDescription>
              Pentru a obtine access trebuie sa folosesti contul de la
              facultate.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center w-full ">
              {inProgress !== "none" ? (
                <div className="flex justify-center">
                  <Loader2Icon className="animate-spin" />
                  <p className="ml-1">In curs de autentificare</p>
                </div>
              ) : (
                <MicrosoftBtn
                  onClick={() => {
                    instance.loginRedirect({
                      scopes: ["User.Read"],
                      prompt: "select_account",
                      redirectUri: redirectUri,
                    });
                  }}
                />
              )}
            </div>
          </CardContent>
        </Card>
      </UnauthenticatedTemplate>
    </div>
  );
}
