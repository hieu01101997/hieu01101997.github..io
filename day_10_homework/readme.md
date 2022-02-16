# FUNCTION
## Function là gì?
Function (hàm) là tập hợp các đoạn code dùng để thực hiện một tác vụ cụ thể nào đó.

Cú pháp định nghĩa function
```js

function functionName(para_1, ..., para_n) {
 // code thực thi function
}
```
Phân biệt **tham số (parameter)** và **đối số (argument)**
* **Tham số (parameter)** là biến trong khai báo hàm.
* **Đối số (argument)** là giá trị thực của biến này được truyền vào hàm.
  
#### Vi du :
 ```js
 function sum(a,b){
     return a + b ;}
console.log(sum(3,4))
// a,b là Tham số
// 3,4 là Đối số 
```
## Một số loại function
* Function có tham số, hoặc không có tham số
* Function có giá trị trả về hoặc không
### 1. Function không có tham số

```js
function sayHello() {
    console.log("Xin chào các bạn");
}

sayHello();
```
### 2. Function có tham số
Với function kiểu này có thể có một hoặc nhiều tham số (không nên quá 3 tham số)
```js
// Ví dụ function có 1 tham số
function sayHello(name) {
    console.log(`Xin chào ${name}`);
}
sayHello("Ngọc Hiếu ");

// Ví dụ function có 2 tham số
function sayHello_1(name, city) {
    console.log(`Tôi tên là ${name}, quê tôi ở ${city}`);
}
sayHello_1("Ngọc Hiếu ", "Nam Định");
```
### 3. Function trả về kết quả
Để trả về kết quả, sử dụng từ khóa **return**
```js
function sum(a, b) {
    return a + b;
}

let data = sum(3, 4);
console.log(data);

// Nếu muốn kiểm tra nhanh kết quả của function có thể sử dụng luôn console.log
console.log(sum(4, 5));
```
**Chú ý** : Những câu lệnh **đằng sau** từ khóa return sẽ **không được thực thi**

```js
Ví dụ:

function sum(a, b) {
    return a + b;
    console.log(a); // không được thực thi
    console.log(b); // không được thực thi
}
```
### 4. Function không trả về kết quả
Đối với function không có từ khóa return thì coi như function đó không trả về kết quả
## Default Parameter ES6
Cho phép khởi tạo function với những default value nếu như chúng được định nghĩa sai.

Khi sử dụng chức năng này sẽ giúp function dễ control và ít error hơn.

Ví dụ:
```js
function sayHello(name = "Ngọc Hiếu") {
    console.log(`Xin chào ${name}`);
}

sayHello(); // Ngọc Hiếu
sayHello("Nam Định"); // Nam Định

```
## Phạm vi của biến (scope)
**Scope** có thể hiểu nôm na là “phạm vi sử dụng của biến”

Có 3 loại scope:
* Global scope
* Function scope
* Block scope
### Global scope
Một biến được coi là global scope (toàn cục) nếu biến đó được định nghĩa bên ngoài function
```js
let name = "Ngọc Hiếu";
let age = 25;

console.log(name);
console.log(age);
```
### Function scope
Một biến được coi là function scope nếu biến đó được định nghĩa bên trong function
```js
function hello() {
    let name = "Ngọc Hiếu";
    console.log(name);
}

hello(); // Ngọc Hiếu
console.log(name) // Lỗi
```
### Block scope
Một biến được coi là block scope nếu biến đó được định nghĩa bên trong cặp dấu {}
```js
{
    let name = "Ngọc Hiếu";
    console.log(name); // Ngọc Hiếu
}

console.log(name) // Lỗi
```
### Chú ý
Nếu 1 biến không có từ khóa khai báo biến, sẽ trở thành biền **global**
```js
function sayHello() {
    number = 10;
    console.log(number);
}

sayHello() // 10

console.log(number); // 10
```
## Kiểu dữ liệu Boolean
Giá trị của kiểu dữ liệu này chỉ có thể là **true** hoặc **false**

Ví dụ
```js
let a = true;
let b = false;
let c = !a;
let d = !b;
```
## Xác định giá trị Boolean
Để xác định giá trị boolean cho biến, biểu thức,… ta sử dụng hàm **Boolean()**

Ví dụ
```js
let a = 5;
console.log(Boolean(a));

let b = 6;
let c = 10;
console.log(Boolean(b < c));
```
## Truthy & Falsy value
**Truthy value** là những giá trị mà khi ép kiểu về Boolean thì sẽ cho ra giá trị là **true**.

Ngược lại, **Falsy value** là những giá trị mà khi ép kiểu về Boolean thì cho ra giá trị là **false**

Note:

Có **6 giá trị** sau được coi là **falsy** : **false, 0, NaN, ‘’, null, undefined**
Các giá trị còn lại, ngoài các giá trị trên được gọi là **truthy**

```js
console.log(Boolean(false)); // false

console.log(Boolean(0)); // false

console.log(Boolean(NaN)); // false

console.log(Boolean("")); // false

console.log(Boolean(null)); // false

console.log(Boolean(undefined)); // false
```
# CONDITION
## Câu lệnh điều kiện if - else if - else
### Câu lệnh if

Thực hiện câu lệnh trong if nếu điều kiện cho trước là đúng.
```js
// Cú pháp
if (điều kiện) {
    // Code được thực thi nếu điều kiện đúng
}

// Ví dụ
let hour = 6;
if (hour < 10) {
    console.log("Good morning!");
}
```
### Câu lệnh if - else
Nếu **điều kiện đúng** thực hiện câu lệnh trong **if**, ngược lại nếu **điều kiện sai** thì hiện câu lệnh trong **else**.
```js
// Cú pháp
if (điều kiện) {
    // Code được thực thi nếu điều kiện đúng
} else {
    // Code được thực thi nếu điều kiện sai
}

// Ví dụ
let hour = 6;
if (hour < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}
```
### Câu lệnh if - else if - else
Chỉ định một điều kiện mới nếu điều kiện đầu tiên là sai
```js
// Cú pháp
if (điều kiện 1) {
    // Code được thực thi nếu điều kiện 1 đúng
} else if (điều kiện 2) {
    // Code được thực thi nếu điều kiện 1 sai và điều kiện 2 đúng
} else {
    // Code được thực thi nếu điều kiện 1 và 2 sai
}

// Ví dụ
let hour = 6;
if (hour < 12) {
    console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}
```
## Sự khác biệt giữa == và ===
== và === đều được sử dụng để so sánh
* == **(so sánh về mặt giá trị)**
* === **(so sánh về mặt giá trị và kiểu dữ liệu)**
//  Do đó nếu hai giá trị không cùng loại, thì khi so sánh, kết quả sẽ trả về false 
### Toán tử 3 ngôi
Toán tử 3 ngôi trong JavaScript cho phép chúng ta kiểm tra một điều kiện nào đó trong một dòng code duy nhất và trả về giá trị, thay vì phải sử dụng nhiều câu lệnh if-else, giúp cho việc code đơn giản và thông minh hơn.

Cú pháp
```js
condition ? true_value : false_value;
```
Trong đó:

* **condition** : Biểu thức điều kiện
* **true_value** : Được trả về nếu điều kiện đúng
* **false_value** : Được trả về nếu điều kiện sai
**Ví dụ sử dụng if - else bình thường**
```js
let hour = 6

if (hour < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}
```
**Ví dụ sử dụng toán tử 3 ngôi**
```js
let hour = 6

hour < 12 ? console.log("Good morning!") : console.log("Good afternoon!")
```
## Toán Tử
### toán tủ (&&)
```js

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
// đúng trong trường hợp tất cả đều đúng
```
### toán tử hoặc (||)
```js
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
// sai khi cả 2 cái cùng sai đúng trong 3 trường hợp còn lại.
```












