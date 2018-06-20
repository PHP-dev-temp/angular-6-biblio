export class Author {

  public id: number;
  public name: string;
  public bio: string;
  public image: string;

  constructor(id: number = 0, name: string = '', bio: string = '', image: string = '') {
    this.id = id;
    this.name = name;
    this.bio = bio;
    this.image = image;
  }

}
