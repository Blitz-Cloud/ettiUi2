import { useEffect, useState } from "react";
import type { Route } from "../+types/root";
import { ApiRequest } from "~/lib/utils";

export default function PostView({ params }: Route.ComponentProps) {
  const postId = params.postId;
  const [content, setContent] = useState<string>("");
  console.log(postId);
  useEffect(() => {
    ApiRequest(`/post/${postId}`, {}).then((data) => {
      data.json().then((data) => {
        console.log(data);
        setContent(data.Content);
      });
    });
  }, []);
  if (content.length == 0) {
    return <div>Hello</div>;
  } else {
    return <div>{content}</div>;
  }
}
