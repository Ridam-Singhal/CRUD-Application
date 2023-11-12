# Stack and Heap Memory

There are two types of Memory :

1. Stack (Primitive Datatypes)
2. Heap (Non-Primitive Datatypes)

---

**Stack Memory**

If Stack memory is used we get the copy of variable we used which means change in variable is not displayed in original variable.

---

---

**Heap Memory**

If Heap memory is used we get the reference of variable we used which means change in reference displayed in original variable. Here reference means that original value is assigned.

---

```
Stack Memory Example

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename); // hiteshchoudharydotcom
console.log(anothername); // chaiaurcode




Heap Memory Example

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo["email"] = "hitesh@google.com"

console.log(userOne.email); // hitesh@google.com
console.log(userTwo.email); // hitesh@google.com

```
