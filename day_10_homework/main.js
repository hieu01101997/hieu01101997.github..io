// Viết function truyền vào 1 số bất kỳ và thực hiện kiểm tra

// Nếu số đó chia hết cho 3 và 5 thì in ra “FizzBuzz”
// Nếu số đó chia hêt cho 3 thì in ra “Fizz”
// Nếu số đó chia hêt cho 5 thì in ra “Buzz”


function check(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("FizzBuzz")

    }
    if (number % 3 == 0) {
        console.log("Fizz")
    }
    if (number % 5 == 0) {
        console.log("Buzz")
    }


}
check(15)
check(9)
check(10)


// Viết function giải phương trình bậc 2 (ax^2 + bx + c = 0)

// Cần kiểm tra trường hợp a = 0 và a != 0
// In ra kết quả


function giai_pt(a, b) {
    if (a == 0 && b == 0) {
        console.log('Phương trình vô số nghiệm');
    } else if (a != 0 && b == 0) {
        console.log('Phương trình có nghiệm x = 0');
    } else if (a == 0 && b != 0) {
        console.log("Phương trình vô nghiệm");
    } else {
        console.log('Phương trình có nghiệm x = ' + (-b / a));
    }
}
giai_pt(0, 0)
giai_pt(8, 0)
giai_pt(0, 8)
giai_pt(5, 6)

// Viết function giải phương trình bậc 2 (ax^2 + bx + c = 0)
function giai_pt_bac2(a, b, c, dental, x1, x2) {
    if (a == 0) {
        console.log(`Phương trình có nghiệm x= ` + (-c / b))
    }
    dental = b * b - 4 * a * c
    if (dental < 0) {
        console.log("Phương trình vô nghiệm")
    } else if (
        dental == 0
    ) {
        x = -b / 2 * a
        console.log(`Phương trình có nghiệm kép x= ` + (-b / 2 * a))
    } else if (
        dental > 0
    ) {
        x1 = (-b + Math.sqrt(dental)) / (2 * a)
        x2 = (-b - Math.sqrt(dental)) / (2 * a)
        console.log(`Phương trình có nghiệm x1 =` + (x1))
        console.log(`Phương trình có nghiệm x2 =` + (x2))
    }
}
giai_pt_bac2(0, 3, 2)
giai_pt_bac2(2, 4, 2)
giai_pt_bac2(5, 6, 7)
giai_pt_bac2(5, 13, 6)
giai_pt_bac2(5, 17, 6)

// Bài 4:

// Viết function truyền vào 1 năm bất kỳ. Kiểm tra xem năm đó có là năm nhuận hay không?

// Nếu có là năm nhuận in ra kết quả “Là năm nhuận”
// Nếu không in ra kết quả “Không la năm nhuận”
// Cách tính năm nhuận như thế nào thì lên mạng tra



function leapYear(year) {
    if((year%4==0 && year%100!=0) ||(year % 400 == 0)){
        console.log (year + ` là năm nhuận`)
    
    } else{
        console.log ( year + ` là năm không nhuận`)
    }
   
 
}

leapYear(2004)
leapYear(2005)

// Viết function truyền vào 2 giá trị, đại diện cho cân nặng và chiều cao. Tính chỉ số BMI tương ứng

// Sử dụng return

function bmi(weight,height)
{
    let result = weight/(height*2)
    return result
}
console.log(bmi(78,1.78))

// Viết function truyền vào giá trị độ C. Tính giá trị độ F tương ứng

// Sử dụng return
function change(C)
{
    let result= 9/5*C + 32
    return result
    
}
console.log(change(260) + ` độ F`)