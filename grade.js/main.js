const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
   ]
   
//    Viết function tính thứ hạng trung bình của cả lớp
const avgGrade = (grades) =>
    grades.reduce((sum, std) => sum + std.grade, 0) / grades.length;

console.log(avgGrade(grades));

//    Viết function tính thứ hạng trung bình của nam trong lớp
const findMale = (grades) => grades.filter((std) => std.sex == "M");
console.log(avgGrade(findMale(grades)));


//    Viết function tính thứ hạng trung bình của Nữ trong lớp
const findFemale = (grades) => grades.filter((std) => std.sex == "F");
console.log(avgGrade(findFemale(grades)));

//    Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
const findMax = (grades) => Math.max(...grades.map((std) => std.grade));
console.log(findMax(findMale(grades)));
//    Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp

console.log(findMax(findFemale(grades)));
//    Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
const findMin = (grades) => Math.min(...grades.map((std) => std.grade));
console.log(findMin(findMale(grades)));
//    Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
console.log(findMin(findFemale(grades)));
//    Viết function thứ hạng cao nhất của cả lớp
const findFemale4 = (grades) => grades.sort((a,b)=> b.grade -a.grade).slice(0,1)
console.log(findFemale4(grades))
//    Viết function thứ hạng thấp nhất của cả lớp

const findFemale5 = (grades) => grades.sort((a,b)=> a.grade -b.grade).slice(0,1)
console.log(findFemale5(grades))
//    Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
console.log(findFemale(grades))
//    Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
const xapSep = (grades) => grades.sort((a,b) => a.name -b.name)
console.log (xapSep(grades))
//    Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
//    Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
const findFemale2 = (grades) => grades.filter((std) => std.name.slice(0,1) == "J"&&  std.sex == "F");
console.log(findFemale2(grades))
//    Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp

const findFemale3 = (grades) => grades.sort((a,b)=> b.grade -a.grade).slice(0,5)
console.log(findFemale3(grades))

