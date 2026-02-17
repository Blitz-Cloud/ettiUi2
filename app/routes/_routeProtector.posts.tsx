import { Link } from "react-router";
import type { Route } from "./+types/home";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import DefaultLayout from "~/components/layout/default";
import {
  GetDescription,
  GetPrettyDate,
  GetPrettyUniYearAndSemester,
} from "~/lib/post";
import { ApiRequest } from "~/lib/utils";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Posts" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [posts, setPosts] = useState<Post[] | undefined>(undefined);

  useEffect(() => {
    ApiRequest("/posts", {}).then((data) => {
      data.json().then((data) => {
        console.log(data);
        setPosts(data);
      });
    });
  }, []);
  if (posts === undefined) {
    return <h1>Loading</h1>;
  }
  return (
    <DefaultLayout>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-3 gap-6 px-2">
        {posts.map((post) => {
          return (
            <Link to="" key={post.ID}>
              <Card className="min-h-[250px]">
                <CardHeader>
                  <CardTitle>{post.Title}</CardTitle>
                  <CardDescription>
                    {GetPrettyDate(post)} | {GetPrettyUniYearAndSemester(post)}
                  </CardDescription>
                </CardHeader>
                <CardContent>{GetDescription(post)}</CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </DefaultLayout>
  );
}
