function greetUser(name, role) {
    return "Sorry ".concat(name, ", you're not an admin!");
}
var ay = greetUser("Emmanuel Adeoye", "user");
var subscriptions;
(function (subscriptions) {
    subscriptions["free"] = "FREE";
    subscriptions["premium"] = "PREMIUM";
    subscriptions["enterprise"] = "ENTERPRISE";
})(subscriptions || (subscriptions = {}));
var subscription = subscriptions.free;
console.log(ay, '\n', 'You are subscribed to the', subscription, 'plan');
var user;
user = (["Ade Ife", 23]);
console.log(user);
