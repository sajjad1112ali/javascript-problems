function User(name, email) {
  this.name = name;
  this.email = email;
  this.online = false;
}

User.prototype.login = function(){
  this.online = true;
  console.log(`${this.name} has loged in`);
}

User.prototype.logout = function(){
  this.online = false;
  console.log(`${this.name} has loged out`);
}

function Admin(...args) {
  User.apply(this, args)
}


Admin.prototype = Object.create(User.prototype)

Admin.prototype.deleteUser = function(user){
  users = users.filter((u) => u.email !== user.email)
}


const admin = new Admin('John Wick', 'john@gmail.com');
const u1 = new User('James Johny', 'johny@gmail.com');
const u2 = new User('Kim Thomas', 'kim@gmail.com');
let users = [u1,u2, admin];
console.log(admin.login())
console.log(users)
admin.deleteUser(u2);
console.log(users)

console.log(admin)

console.log(admin.logout())
console.log(admin)
