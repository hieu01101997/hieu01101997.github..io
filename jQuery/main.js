
// Sử dụng jQuery để hoàn thiện các yêu cầu sau:

// Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
const heading = $('#heading')
console.log(heading)
heading.css({
    'color' : 'red',
    'textTransform': 'uppercase'
    
})

// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
const para =$(".para")
para.css({
    'color':'blue',
    'fontSize' :'20px'
})
// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”

const link = document.createElement("a")
link.innerHTML ="facebook"
link.href="facebook.com"
link.target = "_blank"
const para3 = $(".para ").last()
console.log(para3)
para3.append(link)

// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”

const title = $("#title")
title.text('Đây là thẻ tiêu đề')

// Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
const  des = $(".description")
des.addClass("text-bold")
const bold = $(".text-bold")
bold.css('fontWeight','bold')

// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”

para3.replaceWith('<button> Click me</button>')
// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
const para2 =$(".para-2")
console.log(para2)
para2.clone().appendTo(para2)
// Xóa thẻ có class=“para-1”
const para1 = $(".para ").first()
para1.remove()
