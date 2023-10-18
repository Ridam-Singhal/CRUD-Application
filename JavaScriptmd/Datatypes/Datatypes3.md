# Comparsion of Datatypes

```
Never compare two different datatypes

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true bcz of value conversion

```

---

**Note**

The equality check (==) and comparsions (> < >= <=) work differently

Comparsions convert null to a number, treating it as 0. That's why (3) null >= 0 is true and (1) null > = is false.

---

```
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

```

**Always try to avoid above type conversions**
