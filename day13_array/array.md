# ARRAY METHODS

## toString
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
```

// Banana,Orange,Apple,Mango
// Phương thức toString () trả về một mảng dưới dạng một chuỗi được phân tách bằng dấu phẩy:

## join
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
```
// Banana * Orange * Apple * Mango
// hoạt động giống như toString (), nhưng ngoài ra, bạn có thể chỉ định dấu phân tách:
// Phương thức join () cũng nối tất cả các phần tử của mảng thành một chuỗi.

## pop
```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
fruits.pop();
document.getElementById("demo2").innerHTML = fruits;
```
// Banana,Orange,Apple,Mango

Banana,Orange,Apple

// Phương thức pop () xóa phần tử cuối cùng khỏi một mảng.

## push
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
```
// Banana,Orange,Apple,Mango,Kiwi

// Phương thức push () thêm một phần tử mới vào một mảng (ở cuối):

## shift
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
```
// Orange,Apple,Mango
// Phương thức shift () loại bỏ phần tử đầu tiên của một mảng (và "dịch chuyển" các phần tử khác sang bên trái)

## unshift

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Kiwi");
```
// Kiwi,Banana,Orange,Apple,Mango
// Phương thức  unshift () thêm một phần tử mới vào một mảng (ở phần đầu) và các phần tử cũ hơn "unshifts":
## Chỉ số phần tử trong ARRAY
// Thay đổi các yếu tố
Các phần tử của mảng được truy cập bằng cách sử dụng số chỉ mục của chúng:

Chỉ mục mảng bắt đầu bằng 0:

[0] là phần tử mảng đầu tiên
[1] là thứ hai
[2] là thứ ba ...

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";
```
## length
```js 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
```
// Thuộc tính length cung cấp một cách dễ dàng để nối các phần tử mới vào một mảng mà không cần sử dụng phương thức push ():

//  Kiwi,Banana,Orange,Apple,Mango

## delete
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
```
// Quả đầu tiên là: Chuối

Quả đầu tiên là: không xác định
// Việc xóa các phần tử để lại các lỗ không xác định trong một mảng:
### hạn chế sử dụng thay vào đó sử dụng pop hoặc shift

## concat
```js
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
```
// Cecilie,Lone,Emil,Tobias,Linus
// dùng để nối các chuỗi

## splice

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
```
// Banana,Orange,Lemon,Kiwi,Apple,Mango
// 2 xác định vị trí được thêm vào
// 0 xác định có bao nhiêu phần tử nên được loại bỏ ( đằng sau phần tử vừa thêm vào)

``` js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
// chuỗi mới :  Banana,Orange,Lemon,Kiwi
// chuỗi bị xóa : Apple,Mango

## splice
```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);
```
// Banana,Orange,Lemon,Apple,Mango
// 3 là chỉ số là slice bắt đầu cắt 
fruits ["Apple"] =3 ;

Apple,Mango

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1,3);
```
// Orange,Lemon ( dựa vào chỉ số để hiện chuỗi đã cắt kết thúc ở chỉ số 3 và k lấy giá trị của phần tử chỉ số 3)

## sort

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
```
// 
Phương thức sort () sắp xếp một mảng theo thứ tự bảng chữ cái:
// Apple,Banana,Mango,Orange


## revers

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
```
// Banana,Orange,Apple,Mango

Orange,Mango,Banana,Apple
// Phương thức reverse () đảo ngược các phần tử trong một mảng.

Bằng cách kết hợp sort () và reverse (), bạn có thể sắp xếp một mảng theo thứ tự giảm dần:
// Theo mặc định, hàm sort () sắp xếp các giá trị dưới dạng chuỗi.

Điều này hoạt động tốt cho các chuỗi ("Apple" đứng trước "Banana").

Tuy nhiên, nếu các số được sắp xếp dưới dạng chuỗi, thì "25" lớn hơn "100", vì "2" lớn hơn "1".

Do đó, phương thức sort () sẽ tạo ra kết quả không chính xác khi sắp xếp các số.

Bạn có thể sửa lỗi này bằng cách cung cấp một hàm so sánh:

// 
``js
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
```
// 1,5,10,25,40,100
``js
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
```
// 100,40,25,10,5,1
## giá trị lớn nhất nhở nhất
```js
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
```


//now points[0] contains the lowest value   || MIN
// and points[points.length-1] contains the highest value  || MAX
