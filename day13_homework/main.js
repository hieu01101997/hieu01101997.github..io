let  numbers = [1, 2 , 5 ,200, 100, 4500 , 3454, -300 ]
 
// Lấy giá trị lớn nhất và nhỏ nhất
let maxInNumbers = Math.max.apply(Math, numbers); 
let minInNumbers = Math.min.apply(Math, numbers);
 
// hien thi
console.log(("Giá trị lớn nhất là " +maxInNumbers));
console.log(("Giá trị nhỏ nhất là " +minInNumbers))

// Bài 3: Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

function change(number){
    
   

for (let i = 0; i < number.length; i++) {
    
    
    number[i]=  number[i]%2;
}
return number

}

console.log (change([3,2,5,6,2,7]))


// bai 4

function repeatString(string) {
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += string;
    }

    return result;

}

console.log(repeatString("a"));

//bai 5
function stringSymbol(string) {
    let res = string;
    for (let i = 1; i < 10; i++) {
        res += "-" + string;
    }
    return res;
}
console.log(stringSymbol("a"));