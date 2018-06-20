export class User {

  public id: number;
  public name: string;
  public email: string;
  public address: string;
  public city: string;
  public phone: string;
  public role: string;

  constructor(id: number = 0,
              name: string = '',
              email: string = '',
              address: string = '',
              city: string = '',
              phone: string = '',
              role: string = '') {

    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
    this.city = city;
    this.phone = phone;
    this.role = role;
  }
}

