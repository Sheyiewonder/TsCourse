"use strict";
function greetUser(name, role) {
    return `Sorry ${name}, you're not an admin!`;
}
const ay = greetUser("Emmanuel Adeoye", "user");
var subscriptions;
(function (subscriptions) {
    subscriptions["free"] = "FREE";
    subscriptions["premium"] = "PREMIUM";
    subscriptions["enterprise"] = "ENTERPRISE";
})(subscriptions || (subscriptions = {}));
let subscription = subscriptions.free;
console.log(ay, '\n', 'You are subscribed to the', subscription, 'plan');
let user;
user = (["Ade Ife", 23]);
console.log(user);
