# Section 2 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded.

As a quick guide, check the following before submitting:

- [] Answered all parts of every question
- [] No typos or grammar mistakes (use grammarly!)
- [] Accurately uses relevant technical terminology
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Responses are concise and easy to comprehend

---

## Question 1

In your own words, explain what does _encapsulation_ refer to? Why is this concept beneficial when programming?

Provide a code snippet to illustrate _encapsulation_.

## Response 1

Encapsulation is the process of bundling and organizing data and specific methods that utilize that data into a single cohesive unit, such as a class. Encapsulation also refers to restricting access to certain data. It's how you hide and protect certain data, allowing certain parts of the system to interact with it. Encapsulation helps prevent unintentional changes. Encapsulation makes your code easier to understand and modify.

````javascript
 class Pizzeria {
  #secretSauce = 'tomato + garlic + onion'
  makeBurger(){
    return 'A special burger with our special sauce!'
  }

  makePizza(){
    return 'A delicious pizza with our special sauce!'
  }
 }
 const PapaJoes = new Pizzeria
 console.log(place.makeBurger())
 console.log(place.makePizza())
place.#secretSauce
// #secretSauce is private so it can't be accessed
```

---

## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

In the code snippet below, what does `this` refer to?

```js
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterA.increment();
counterA.increment();

counterB.increment();

console.log(counterA.count);
console.log(counterB.count);
````

## Response 2

the `this` keyword is used to refer to the object currently using the code. It means "this is the object I'm in right now." So, in this example, the `this` keyword refers to the class `counter`.

---

## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

## Response 3

Polymorphism occurs when different objects can be used in the same way or perform similar actions because they share the same method names. Even though the names may be the same, they can still be used slightly differently. While inheritance ensures polymorphism, it is not needed to use polymorphism, and it can be used outside of classes.



```javascript
class Pencil {
    constructor(leadType,color){
        this.leadType=leadType
        this.color=color
    }
write(){
    return(`writing with $[this.leadType] lead is cool`)
}
coloring(){
    return(`coloring with ${this.leadType} pencils is fun!`)
}
}


class MechanicalPencil extends Pencil{
    constructor(leadType,color,leadCount){
        super(leadType,color)
        this.leadCount=leadCount
    }
 write(){
    return(`writing with $[this.leadType] lead is cool, I have ${this.leadCount} pieces of lead left. `)
} 
draw(){
    return(`drawing with mechanical pencils is cool. `)
} 
}
```


## Question 4

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.

## Response 4

Inheritance is helpful because all the pets share common traits and actions, like `name`, `energy`, and `sleep`, and I can put those in one base `Pet` class. Then Cat, Dog, and Bird can inherit that shared functionality as a subclass and only add what’s unique to them. For example, `hunt` for cats and `chase` for dogs. And using polymorphism, I could still change certain parts of the methods to be specific to each animal subclass, without having to rewrite everything. This reduces duplicate code and makes the program easier to update and maintain.





