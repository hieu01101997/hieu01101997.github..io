// Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.

// Hãy cẩn thận trường hợp trong mảng có nhiều số lớn nhất

// // Ví dụ:
// max2Numbers([2, 1, 3, 4]) => 3
// max2Numbers([2, 1, 4, 3, 4]) => 3

//
function max2Numbers(arr){
    let intArr = arr.map(Number) //convert thành số
    intArr = [...new Set(intArr)] // xóa đi những số trùng nhau
    return intArr.sort((a,b) => {
        return b - a;})[1];        // sắp xếp giảm dần và lấy giá trị khởi tạo có chỉ số 1! vì nếu lấy chỉ số 0 sẽ lấy giá trị lớn nhất

}

console.log (max2Numbers(([2, 1, 3, 4])))

// Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

// // Ví dụ:
// getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']) => ['aba', 'vcd'].


function  getStringHasMaxLength(arr){
    return arr.sort(function (a, b) { return b.length - a.length })[0].split();

}
console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']))


// Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó



function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)]; // math.random để lấy số ngẫu nhiên (0 đến 1) 
                                                      // nhân nó với độ dài của mảng để nhận giá trị ( 0 - arrayLength)
                                                      // Sử dụng Math.floor () để nhận chỉ số nằm trong khoảng từ (0 đến arrayLength-1)
                                               

}
console.log(random([3, 7, 9, 11]))

// Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng
function symmetricDifference(array1,array2){
return array1.filter(element => array2.includes(element));   // lọc nhưng phần tử ở array 1 và kiểm tra xem array 2 có bao gồm những phần tử đó ko
                                                                    // và in ra màn hình


}

console.log(symmetricDifference([1, 2, 3], [1, 2, 4]))

// 
users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]
// Viết function truyền vào 1 mảng các object user lấy ra những user có age > 25 và isStatus = true

const res = users.filter((prod) => prod.age > 25 && prod.isStatus == true) // lọc giá trị của mảng users sử dụng filter
                                                                            // thỏa mãn 2 đk ở trên thì in ra màn hình
console.log(res)

// Viết function truyền vào 1 mảng các object user. Hãy sắp xếp mảng users có age tăng dần

const xapSep = users.sort((a,b) => a.age-b.age) //  dùng sort sắp xếp tăng dần và in ra object 
                                                

console.log (xapSep)




//Bài 7 (2 điểm). Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

function getCountElement(arr){
    return arr.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {})
      
//Hàm reducer này thực thi trên mỗi phần tử và trả về một giá trị.
// acc: giá trị khởi tạo
// curr: Giá trị của phần tử mảng trong lần lặp hiện tại.
// toán tử dấu phẩy (,) đánh giá từng toán hạng của nó (từ trái sang phải) và trả về giá trị của toán hạng cuối cùng.


}
console.log(getCountElement(["one", "two", "three", "one", "one", "three"]))