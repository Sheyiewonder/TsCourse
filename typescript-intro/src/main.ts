function greetUser(name: string, role: "admin" | "user") {
    return `Sorry ${name}, you're not an admin!`
}

const ay = greetUser("Emmanuel Adeoye", "user")

enum subscriptions {
    free = "FREE",
    premium = "PREMIUM",
    enterprise = "ENTERPRISE"
  }
  
  let subscription: subscriptions = subscriptions.free;
    
console.log(ay, '\n', 'You are subscribed to the', subscription, 'plan',)

let user: ([name: string, age: number]) 

user = (["Ade Ife", 23])

console.log(user)