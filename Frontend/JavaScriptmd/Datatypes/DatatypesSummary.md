# Datatypes Summary

**Datatypes are defined in two ways depending on the way they are stored in memory and access from the memory**

1. Primitive
2. Non-Primitive / Reference types

### Primitive

_Primitive datatypes are call by value_

1. String
2. Number
3. Boolean
4. null (null means empty not zero eg. Temperature 0 and null differ)
5. undefined
6. Symbol
7. Bigint

### Non-Primitive / Reference Types

_Reference is allocated in this datatypes_

1. Array
2. Objects
3. Functions

**JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.**

**TypeScript is static type Language.**

```
Symbol declaration

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId) // false

```

```
Bigint declaration
const bigNumber = 95340584309584058n

```

---

**Note**

Return type of variables in JavaScript

1. Primitive Datatypes

   - Number => number
   - String => string
   - Boolean => boolean
   - null => object
   - undefined => undefined
   - Symbol => symbol
   - BigInt => bigint

2. Non-primitive Datatypes
   - Arrays => object
   - Function => function
   - Object => object

---
