# Datatype Conversion

To check the datatype there are two ways

```
let score = 33

console.log(typeof score); // number
console.log(typeof (score)); // number
console.log(typeof (NaN)); // number

```

### Some Important Points

**Datatypes to Number**

"33" => 33
"33abc" => NaN
true => 1
false and null => 0
undefined => NaN

**Datatypes to Boolean**

1 => true
0 => false
"" => false
"hitesh" => true

### Operations

```
let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3) // hello hitesh

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32
```

```
console.log(true) // true
console.log(+true) // 1
console.log(+"") // 0

```

**Readiablity is most important in coding**

### Postfix and Prefix Increment

**Postfix**
If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

```
let x = 3;
const y = x++;
// x is 4; y is 3
```

**Prefix**
If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

```
let x = 3;
const y = ++x;
// x is 4; y is 4
```
