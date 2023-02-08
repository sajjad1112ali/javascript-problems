class User {
  constructor(name, email){
    this.name = name;
    this.email = email;
    this.score = 0;
  }

  login(){
    console.log(`${this.name} has loged in`);
    return this;
  }

  logout(){
    console.log(`${this.name} has loged out`);
    return this;
  }

  updateScore(){
    this.score++;
    console.log(`${this.name} has score ${this.score}`);
    return this;
  }
  
}

class Admin extends User {
  deleteUser(user){
    users = users.filter((u) => u.email !== user.email)
  }
}
const u1 = new User('John Wick', 'john@gmail.com');
const u2 = new User('Michael Clark', 'clark@gmail.com');
u1.login().updateScore().updateScore().logout();

const admin = new Admin('Json Roy', 'json@gmail.com');
let users = [u1, u2, admin];
admin.deleteUser(u2);
console.log(users)