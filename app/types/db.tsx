export interface Namespace {
  Id: string;
  TenantId: string;
  CallbackUri: string;
  Name: string;
  Protected: boolean;
  Categories: Category[];
  AuthFlow: string;
}

export interface Category {
  Id: string;
  NamespaceId: string;
  Name: string;
  Protected: boolean;
  Visible: boolean;
  Posts: Post[];
}

export interface Post {
  ID: string;
  CategoryId: string;
  Title: string;
  Description: string;
  UniYearAndSemester: number;
  Content: string;
  Protected: boolean;
  PublishedDate: string;
  RestrictedTo: string;
  Visible: boolean;
}
