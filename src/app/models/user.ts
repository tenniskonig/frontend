export class User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  geschlechtW: boolean;
  admin: boolean;

  constructor(id: number, username: string, firstName: string, lastName: string, geschlechtW: boolean, admin: boolean) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.geschlechtW = geschlechtW;
    this.admin = admin;
  }
}


