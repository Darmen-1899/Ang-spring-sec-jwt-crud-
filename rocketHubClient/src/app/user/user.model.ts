export class User {
  id!:number
  username!: string;
  password!: string;
  firstname!: string;
  lastname!: string;
  avatar!: string;
  position!: string;
  role!: string;



  isEmpty(): boolean {
    return this.username != '' &&
      this.password != '' &&
      this.firstname != '' &&
      this.lastname != '' &&
      this.position != ''
  }


  constructor() {
  }
}
