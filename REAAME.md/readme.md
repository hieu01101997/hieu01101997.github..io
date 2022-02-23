# STRING METHOD
```js
var stringOne = ("  freeCodeCamp is the best place to learn ")
var stringTow = ("  frontend and backend development")
```
 


## charAt()
```js
console.log(stringOne.charAt(1))
```
 // lấy phần tử theo số thứ tự từ trái qua phải, bắt đầu từ 1 và có cả khoảng trống!


//=) f



##charCodeAt()
```js
console.log(stringOne.charCodeAt(15))
```

//dụng để unicode giá trị của một ký tự được chỉ định trong một chuỗi. Giá trị unicode của một ký tự ở dạng số.



## concat()
```js
console.log(stringOne.concat(stringTow))
```

// dùng để nối các chuỗi với nhau và giữa 2 đoạn ko có khoảng trống !

// =)  freeCodeCamp is the best place to learn frontend and backend development


## endWith()
```js
console.log(stringOne.endsWith("learn")) 
```

//=)  true : xét phần tử kết thúc của 1 chuỗi kết quả trả về true or false


##fromCharCode
```js
console.log(String.fromCharCode(115))
```
 //  lấy kí tự từ mã unicode lấy từ charCodeAt ( 2 method này liên hệ với nhau)


## includes 
```js

console.log(stringOne.includes("best"))
```
; // kiểm tra phần tử có trong chuỗi không kết quả trả lại true hoặc false

// =) true


## indexOf 
```js

console.log(stringTow.indexOf("end"))
```
 //indexOf () trả về vị trí xuất hiện đầu tiên của một giá trị trong một chuỗi.
// 6

## lastIndexOf
```js
console.log(stringTow.lastIndexOf("end"))
```
 ////indexOf () trả về vị trí xuất hiện cuối cùng của một giá trị trong một chuỗi.

// 18

##  match
```js
console.log(stringTow.match(/end/g))
```
 // match () tìm kiếm một kết quả phù hợp trong một chuỗi.

## repeat
```js

console.log(stringTow.repeat(3))
```

 // lập lại string n lần tùy ý !

## replace
```js
console.log(stringTow.replace(/end/g, "END"))

```
// Replace () tìm kiếm một chuỗi cho một giá trị và trả về một chuỗi mới với (các) giá trị được chỉ định được thay thế:

//  =)) frontEND and backEND development


## search
```js

console.log(stringTow.search("end"))
```
 // search () tìm kiếm một chuỗi cho một giá trị và trả về vị trí của kết quả phù hợp đầu tiên:
// =)) 6

## slice
```js
console.log(stringTow.slice()) 
```
// Slice () trích xuất một phần của chuỗi và trả về phần đã trích xuất:

// =) frontend

## split 
```js

console.log(stringOne.split());
```
 //  split () chia một chuỗi thành một mảng các chuỗi con và trả về mảng:

## startstWith

```js
console.log(stringOne.startsWith(" free")) 

```
// kiểm tra giá trị đầu tiên của chuỗi kết quả trả lại true or false

// =) true

## substring
```js
console.log(stringOne.substring(3, 8))

```
//substring () trích xuất một phần của chuỗi

## substr
```js
console.log(stringOne.substr(3, 8))
```
 ///   substr () trích xuất một phần của chuỗi:

## toLowerCase
```js
console.log(stringOne.toLowerCase());

```
// viết thường toàn bộ string 

## toUpperCase
```js
console.log(stringOne.toUpperCase());
```
 // viết hoa toàn bộ string

## trim

``` js
var stringThree = "    day la khoang trong"

console.log(stringThree.trim())

// xóa khoảng trống ở đầu string nếu có

