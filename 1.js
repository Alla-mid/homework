let user = {};

user.name = "Alex";
user.lastname = "Shevchenko";
console.log(user);

user.name = "Anna";
console.log(user);

userLastName = user.lastname;
console.log(userLastName);

delete user.lastname;
console.log(user);