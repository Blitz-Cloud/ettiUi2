function GetDescription(post: Post): string {
  if (post.Description.length == 0) {
    return "Nici o descriere gasita";
  }
  return post.Description;
}

function GetPrettyDate(post: Post): string {
  const date = new Date(post.PublishedDate);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

function GetPrettyUniYearAndSemester(post: Post): string {
  return `A:${Math.floor(post.UniYearAndSemester / 10)} S:${post.UniYearAndSemester % 10}`;
}
export { GetDescription, GetPrettyDate, GetPrettyUniYearAndSemester };
