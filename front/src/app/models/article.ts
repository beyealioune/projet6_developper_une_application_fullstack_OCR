import { Theme } from "./themes";
import { User } from "./user";

export interface Article {

    id : number;
    title: string;
    content: string;
    createdAt: String | null;
    author: User ;
    theme: Theme | null;
    comments: Comment[] | null;
  }