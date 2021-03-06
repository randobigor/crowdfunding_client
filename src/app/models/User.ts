export class User {
  id: number | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
  balance: number | null;
  picture: string | null;
  fullName: string | null;


  constructor(id?: number, firstName?: string, lastName?: string, email?: string, password?: string, balance?: number, picture?: string, fullName?: string) {
    this.id = id || null;
    this.firstName = firstName || null;
    this.lastName = lastName || null;
    this.email = email || null;
    this.password = password || null;
    this.balance = balance || 0;
    this.picture = picture || null;
    this.fullName = fullName || null;
  }
}
