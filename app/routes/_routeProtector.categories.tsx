import { Link } from "react-router";
import type { Route } from "./+types/home";
import { useContext, useEffect, useState } from "react";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";
import DefaultLayout from "~/components/layout/default";
import { ApiRequest } from "~/lib/utils";
import type { Category } from "~/types/categories";
import { TenantContext } from "~/context/tenantManager";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cagorii" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function CategoryView() {
  const [categories, setCategory] = useState<Category[] | undefined>(undefined);
  const tenantManager = useContext(TenantContext);
  useEffect(() => {
    if (tenantManager.tenant?.Name.length == 0) {
      return;
    }
    ApiRequest("/categories", {
      method: "GET",
    }).then((data) => {
      data.json().then((data) => {
        setCategory(data);
      });
    });
  }, [tenantManager.tenant]);
  if (categories === undefined) {
    return <h1>Loading</h1>;
  }
  return (
    <DefaultLayout>
      <h1 className="m-5">Categorii</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 sm:gap-3 gap-6 px-2">
        {categories.map((category) => {
          return (
            <Link to={`/${category.ID}/posts`} key={category.ID}>
              <Card className="min-h- [250px]">
                <CardHeader>
                  <CardTitle>
                    {category.Name.split("-")[1].toLocaleUpperCase()} | DEBUG:{" "}
                    {category.Name}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </DefaultLayout>
  );
}
