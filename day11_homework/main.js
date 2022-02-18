// Bài 1. Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.

// Ví dụ : repeatString(“a”) => Kết quả trả về là “aaaaaaaaaa”
// function repeatString(a){




function repeatString(a) {
    let content = " "
    for (let i = 0; i < 11; i++) {
        content = content + a
    }
    return content
}
console.log(repeatString("a"))

// Bài 2. Viết
// function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.

function loopTheStringTenTimes() {
    let nhapChuoi = " 123";
    let loopResult = " ";
    for (b = 0; b < 10; b++) {
        loopResult += `${ nhapChuoi}-`;
    }
    return loopResult


}
console.log(loopTheStringTenTimes())


// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100

function sum() {
    let tong = 0;
    for (let d = 0; d <= 100; d++) {
        if (d % 5 == 0) {
            tong = tong + d
        }

    }
    return tong
}
console.log(sum())

// Bài 9: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

function uocSo(n) {

    let sum1 = 0;
    for (let e = 1; e <= n; e++) {
        if (n % e == 0) {
            sum1 += e;

        }
    }
    return sum1
}
console.log(uocSo(60))

// Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.

// function tongSonguyento() {
//     // let k;
//     let sum2 = 0;
//     for (let j = 1; j < l; j++)
//         if (j % 1 == 0 && j % l == 0) {
//             sum2 += l;
//         }
//     return sum2


// }
// console.log(tongSonguyento(15));

// BAI 6:
// Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

// Note : Kết quả xuôi và ngược là như nhau

// Ví dụ :

// sum(3,8) = 22
// // sum(8,3) = 22




function sum_02(a, b) {
    let total = 0;
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    for (i = min + 1; i < max; i++) {
        total += i
    }
    return total

}
console.log(sum_02(8, 3))
console.log(sum_02(3, 8))
// Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function kiemTraSoNguyenTo(num) {
    let count = 0;
    if (num < 2) {
        return false
    }
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++
        }
    }
    if (count == 2) {
        return true;
    } else {
        return false
    }
}
console.log(kiemTraSoNguyenTo(9))
console.log(kiemTraSoNguyenTo(2))



// Bài 8: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.

function sumSnt(number) {
    let sum3 = 0;
    for (let i = 2; i <= number; i++) {
        if (kiemTraSoNguyenTo(i) == true) {
            sum3 += i;
        }

    }
    return sum3;
}
console.log(sumSnt(15));

// / Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.

function repeatString2(str, n) {
    let repeatStr = ""
    for (let i = 1; i <= n; i++) {
        repeatStr = repeatStr + str;
        if (i < n) {
            repeatStr = repeatStr + "-"
        }
    }
    return repeatStr;
}

console.log(repeatString2("a", 5))