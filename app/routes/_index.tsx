import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <>
      <meta title="Home" />
      <div className="flex min-h-svh flex-col items-center justify-center ">
        <div className="text-center">
          <h1 className="font-bold text-4xl">Bine ai venit</h1>
          <p>Aceasta pagina este inca in constructie </p>
          <Button variant="outline" className="mt-2">
            <Link to="/auth">Autentificate</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
