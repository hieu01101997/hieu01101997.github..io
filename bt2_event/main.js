/*
Giá trị mặc định của counter ban đầu = 0
Bấm vào Cộng tăng counter lên 1
Bấm vào Trừ giảm counter đi 1
Nếu counter > 0 có màu green
Nếu counter = 0 có màu #333333
Nếu counter < 0 có màu red
*/
const btn1 = document.querySelector('.prevBtn');
const btn2 = document.querySelector('.nextBtn');
const h1 = document.getElementById('counter');
let counter = Number(h1.innerText);

btn2.addEventListener('click', function() {
    counter += 1;
    h1.innerText = counter;
})

btn1.addEventListener('click', function() {
    counter -= 1;
    h1.innerText = counter;
})

const changeColor = () => {
    if (counter > 0) {
        h1.style.color = 'green';
    } else if (counter == 0) {
        h1.style.color = '#333333';
    } else {
        h1.style.color = 'red';
    }
}

btn2.addEventListener('click', changeColor);

btn1.addEventListener('click', changeColor);
