
// Truy cập vào các thành phần
const primaryNumberEl = document.getElementById("primary-number");
const secondaryNumberEl = document.getElementById("secondary-number");
const operatorEl = document.getElementById("operator");
const resultEl = document.getElementById("result");
const timeEl = document.querySelector(".time");
const scoreEl = document.querySelector(".score");

const operators = ["+", "-", "*"];
let total;
let time = 10;
let score = 0;
let interval 


function randomNumber() {
    // Random số và phép tính
    let primaryNumber = Math.floor(Math.random() * 10);
    let secondaryNumber = Math.floor(Math.random() * 10);
    let operator = operators[Math.floor(Math.random() * operators.length)];

    // Tính toán kết quả của biểu thức vừa random
    total = eval(`${primaryNumber} ${operator} ${secondaryNumber}`);

    // Hiển thị nội dung lên giao diện
    primaryNumberEl.innerText = primaryNumber;
    secondaryNumberEl.innerText = secondaryNumber;
    operatorEl.innerText = operator;
}

// Chạy khi bắt đầu game
function updateTime(){
    // giảm thời gian đi 1 
    time--;
    // cập nhật lên giao diện
    timeEl.innerHTML = time >= 10 ? `00:${time}` :`00:0${time}` // số giây < 60
    if(time==0){
        clearInterval(interval)
       resultEl.value = ""
    resultEl.disabled= true

    // thông báo kết quả
    alert(`kết quả của bạn là  ${score}`)
    }
    
}
resultEl.addEventListener("keyup",function(e)
{
    if(e.keyCode==13){
        let value = e.target.value;
        if(value==total){
            score++
            // cập nhât lại giao diện
            scoreEl.innerText = score >=10 ? score :`0${score}`
            

            // random phespp tính khác
            randomNumber();

        }
        // xóa giữ liệu trong ô input để người chơi nhập đáp án khác

    }
})
function init() {
    // Random số
    randomNumber();

    // set lại time và score
    //00:03 - 00:10
 timeEl.innerHTML = time >= 10 ? `00:${time}` :`00:0${time}` // số giây < 60

 scoreEl.innerText = score >=10 ? score :`0${score}`

    // Chạy thời gian
    interval =setInterval(updateTime,1000)
}

init();