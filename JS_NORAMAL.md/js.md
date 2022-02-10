# JS CƠ BẢN

## VIẾT MÃ JS ĐẦU TIÊN  VÀ CÁC LINK
### Viết trong file HTML
```js
<script>
    console.log("Hello world");
</script>
```
*Mã javascript nên đặt ở phần cuối cùng của body*
###  Tạo file có đuôi là .js để viết mã Javascript (nên sử dụng)
*Tạo file main.js để viết mã Javascript (main.js nằm cùng cấp với index.html)*
*Nhúng file main.js vào file index.html thông qua thuộc tính src trong thẻ script*
```js
 <script src="./main.js"></script>
 ```
 **Link sang 1 file javascript**
 ## BIẾN TRONG JAVASCRIPT
 ### CÁCH KHAI BÁO BIẾN

>Để khai báo biến sử dụng từ khóa : **let / const**

**Khai báo biến và không gán giá trị cho biến**
```js
let age;
age = 35;
console.log(age);
```
**Khai báo biến và  gán giá trị cho biến**
```js
let email = "hieu@techmaster.vn"
console.log(email);
```

**Sử dụng const khi giá trị khai báo là hằng số**
```js
const pi = 3.14;
console.log(pi);
```
### CÁCH ĐẶT TÊN BIẾN
* Chứa các ký tự chữ, số, _ và $
* Ký tự đầu tiên không được là số (nên là chữ)
* Có phân biệt hoa thường
* Không trùng với các từ khóa của Javascript như: **for, while, this, …**
* Nên đặt tên theo kiểu **camelCase** nếu tên biến có độ dài 2 từ trở lên cho dễ đọc. Ví
dụ **binhphuong** thì nên đặt là **binhPhuong**.

### KIỂM TRA KIỂU DỮ LIỆU CỦA BIẾN

**Để kiểm tra kiểu dữ kiệu của 1 biến, chúng ta sử dụng toán tử typeof**
```js
let number = 10;
console.log(typeof number);
// number ( KIỂU DỮ LIỆU)
```
```js
let name = "Phan hieu ";
console.log(typeof name); 
// string  ( KIỂU DỮ LIỆU)

```
### CÁC KIỂU DỮ LIỆU VÀ ĐỊNH NGHĨA
* STRING : CHUỖI 
* NUMBER : SỐ
* UNDEFINDED: KHI KHÔNG GÁN GIÁ TRỊ CHO BIẾN
* BOOLEAN : TRUE =1 ;  FALSE=0
* NULL : GIÁ TRỊ RỖNG KHÔNG TỒN TẠI
  
###  CỘNG BIẾN 
#### CỘNG CHUỖI 
```js
let firstName= "Phan";
let lastName = " Hiếu";
let fullName = firstName + " " + lastName;
console.log(fullName);
// Phan Hiếu ..
```
#### CHUỖI+ SỐ
```js
console.log(fullName + 10)
// BẢN CHẤT LÀ  " PHAN HIẾU" + " 10 "  10 convert thành chuỗi  !
// Phan Hiếu10

```
**LƯU Ý**: **PHép cộng sẽ convert từ số sang chuỗi; trừ nhân chia sẽ convert từ chuỗi sang số!**
```js
console.log("20"-"10") 
//10
console.log("20"*"10") 
//200
console.log("20"/"10") 
//2
console.log("2"**"1") 
// 2
// ** là lũy thừa 


```
#### Template strings – ES6
**LƯU Ý:**
* Khai báo chuỗi sử dụng ký tự back-tick `` thay cho ký tự nháy đơn hoặc nháy kép.
* Khi khai báo chuỗi kiểu này có thể viết chuỗi trong nhiều dòng và có thể dùng dấu nháy đơn hoặc nháy kép thoải mái mà không cần dùng escape character.
**Ví dụ:**
```js
let name = " phan hiếu"
let year = 1997
let message = ` Xin chào các bạn, mình tên là "${name}" .Mình sinh năm ${
    year
}.Năm nay mình ${
    2022 - year
}
tuổi`;
console.log(message)

// Xin chào các bạn, mình tên là " phan hiếu" .Mình sinh năm 1997.Năm nay mình 25 tuổi

```
**bên ngoài dấu $  giữ nguyên , chỉ thực hiện phép tính bên trong!**
#### Math object trong Javascript
* Math.PI : Lấy ra giá trị của số PI
  ```js
  console.log(Math.PI); 
  // 3.141592653589793
*  Math.round : Làm tròn bình thường
```js
console.log(Math.round(2.1));
//2
console.log(Math.round(2.5));
//3
```
* Math.ceil(number) : Làm tròn số lên
```js
console.log(Math.ceil(2.1));
//3
console.log(Math.ceil(2.5));
//3
```
* Math.floor(number) : Làm tròn số xuống
```js
console.log(Math.floor(2.9));
//2
console.log(Math.ceil(2.1));
//2
```
* Math.random() : Random 1 số ngẫu nhiên trong khoảng 0 -> 1
 ```js
console.log(Math.random());
```
* Math.min(number1, number 2, … number n) : Lấy ra giá trị nhỏ nhất trong danh sách số
```js
console.log(Math.min(2, 4, 1, 6, 7));
//1 
```
*  Math.max(number1, number 2, … number n) : Lấy ra giá trị lớn nhất trong danh sách số
```js
console.log(Math.ma(2, 4, 1, 6, 7));
//7
```
* Math.pow(a, b) : Số mũ (a^b)
```js
console.log(Math.pow(2, 4));
```
//16
* Math.sqrt(number) : Căn bậc 2
```js
console.log(Math.sqrt(9));
//3
```
* Math.abs : trị tuyệt đối
```js
console.log(Math.abs(-9));
//9
```

  
  































