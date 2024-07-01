import { Article } from "./article";
import { User } from "./user";

export interface Comments {
     content : String,
     createdAt: String,
     author: User,
     article: Article | null,
    }

