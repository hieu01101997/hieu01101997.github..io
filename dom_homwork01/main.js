// Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
const heading = document.querySelector("#heading")
heading.style.color = "red"
heading.style.textTransform =" uppercase"


// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
const nodeList = document.querySelectorAll(".para");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.color = "red";
  nodeList[i].style.fontSize = "20px"
}

// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
const linkFb = document.createElement("a")
linkFb.innerHTML ="facebook.com"
linkFb.href =" facebook.com"
linkFb.target ="_blank"

const para3 = document.querySelector(".para-3")
// console.log(para3)

para3.insertAdjacentElement("beforeend",linkFb)


// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
const title = document.querySelector(".content > #title")

console.log(title)
title.innerHTML ="đây là thẻ tiêu đề"


// Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”




// const button = document.createElement("button")
// console.log(button)

// button.innerHTML ="Click me"
para3.innerHTML = " <button> Click me </button>"





// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
const para2 = document.querySelector(".para-2")
const para2Copy = para2.cloneNode(true)

para2.insertAdjacentElement("beforeend",para2Copy)


// Xóa thẻ có class=“para-1”

const para1= document.querySelector(".para-1")
para1.remove()
