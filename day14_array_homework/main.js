// Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.

// sortStudents([‘Nam’, ‘Hoa’, ‘Tuấn’]) => [‘Tuấn’, ‘Nam’, ‘Hoa’]

let sortStudents =(name) => {
    
    let  sortName = name.sort()
    return sortName.reverse()


}
                             

console.log(sortStudents(["Nam", "Hoa", "Tuấn"]))

// Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng

// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// shuffle([1,2,3,4,5]) => [4,2,3,5,1]


let shuffle=(random) =>{
    for (let i = random.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = random[i]
        random[i] = random[j]
        random[j] = k
        return random

}
}
console.log(shuffle([1,2,3,4,5]))

// Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]
let symmetricDifference = function (arr1, arr2) {
    arr1.sort();
    arr2.sort();
    let new_arr = []
    for (let i = 0; i < arr1.length; i++) {
       
        if (arr1[i] != arr2[i]) {
            new_arr.push(arr1[i], arr2[i]);
        }
    }
    return new_arr;
}
console.log(symmetricDifference([3, 2, 1], [4, 2, 1]));


// Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
// union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
// union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]
let union = function(arr1, arr2) {
    let arr = arr1.concat(arr2);
    let new_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if (new_arr.includes(arr[i])) {
            continue;
        }
        new_arr.push(arr[i]);
    }
    return new_arr;
}
console.log(union([1, 2, 3, 1], [4, 3, 2, 4]));
console.log(union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]));
