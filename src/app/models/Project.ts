import {Category} from "./Category";

export class Project {
  id: number | null;
  name: string | null;
  description: string | null;
  category: Category | null;
  user: object | null; //TODO replace with User
  collected: number | null;
  target: number | null;
  picture: string | null;

  constructor(id?: number, name?: string, description?: string, category?: Category, user?: object, collected?: number, target?: number, picture?: string) {
    this.id = id || null;
    this.name = name || null;
    this.description = description || null;
    this.category = category || new Category();
    this.user = user || null;
    this.collected = collected || null;
    this.target = target || null;
    this.picture = picture || null;
  }
}
