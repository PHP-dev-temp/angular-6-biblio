import {Category} from './category.model';
import {Author} from './author.model';
import {Inventory} from './inventory.model';

export class Book {

  public id: number;
  public name: string;
  public description: string;
  public image: string;
  public author: Author;
  public inventory: Inventory;
  public categories: Category[];

  constructor(
    id: number = 0,
    name: string = '',
    description: string = '',
    image: string = '',
    author: Author = new Author(),
    inventory: Inventory = new Inventory() ,
    categories: Category[] = []) {

    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.author = author;
    this.inventory = inventory;
    this.categories = categories;
  }

}
