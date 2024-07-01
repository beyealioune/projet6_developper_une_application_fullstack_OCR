import { Theme } from "./themes";
import { User } from "./user";

// article.model.ts
export interface Articles {

  title: string;
  content: string;
  createdAt: String | null;
  author: User ;
  theme: Theme | null;
  comments: Comment[] | null;
}