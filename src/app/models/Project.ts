import {Category} from "./Category";
import {Picture} from "./Picture";
import {User} from "./User";

export class Project {
  id: number | null;
  name: string | null;
  description: string | null;
  category: Category | null;
  user: User | null;
  collected: number | null;
  target: number | null;
  picture: string | null;
  descriptionPictures: Array<Picture>;
  completed: boolean;
  createdDateTime: Date;

  constructor(
    id?: number,
    name?: string,
    description?: string,
    category?: Category,
    user?: User,
    collected?: number,
    target?: number,
    picture?: string,
    descriptionPictures?: Array<Picture>,
    completed?: boolean,
    createdDateTime?: Date
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category || new Category();
    this.user = user;
    this.collected = collected;
    this.target = target;
    this.picture = picture;
    this.descriptionPictures = new Array<Picture>();
    this.completed = completed;
    this.createdDateTime = createdDateTime;
  }
}
