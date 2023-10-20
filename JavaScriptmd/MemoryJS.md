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
let myYoutubeName = "hiteshchoudharydotcom"

let anotherName = myYoutubeName
console.log(anotherName) // hiteshchoudharydotcom

anotherName = "chaiaurcode"

```
