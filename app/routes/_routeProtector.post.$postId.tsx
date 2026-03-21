import { useEffect, useState } from "react";
import type { Route } from "../+types/root";
import { ApiRequest } from "~/lib/utils";
import MarkdownRenderer from "~/components/my/mdRenderer";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Post" }, { name: "description", content: "" }];
}

export default function PostView({ params }: Route.ComponentProps) {
  const postId = params.postId;
  const [content, setContent] = useState("");
  console.log(postId);
  useEffect(() => {
    ApiRequest(`/post/${postId}`, {}).then((data) => {
      data.json().then((data) => {
        console.log(data);
        setContent(data);
      });
    });
  }, []);
  if (content.length == 0) {
    return <div>Hello</div>;
  } else {
    return (
      <div className="prose">
        <div className="my-2 ">
          <h1 className="text-2xl font-bold">{content.Title}</h1>
          <p>{content.Description}</p>
        </div>
        <MarkdownRenderer content={content.Content} />
      </div>
    );
  }
}
