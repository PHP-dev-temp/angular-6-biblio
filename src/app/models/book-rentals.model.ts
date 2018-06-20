import {User} from './user.model';

export class BookRentals {

  public id: number;
  public status: string;
  public created_at: string;
  public end_date: string;
  public user: User;

  constructor(
    id: number = 0,
    status: string = '',
    created_at: string = '',
    end_date: string = '',
    user: User = new User()) {

    this.id = id;
    this.status = status;
    this.created_at = created_at;
    this.end_date = end_date;
    this.user = user;
  }

}
