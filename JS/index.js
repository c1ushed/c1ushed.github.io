/* 获取元素 */

var main = document.getElementById('main');
var bg = document.querySelector('.bg');
var image = document.querySelector('.image');
var select = document.querySelector('.select');
var dian = document.getElementsByClassName('dian');
var left = document.querySelector('.left');
var right = document.querySelector('.right');

/* 设置数组，里面放图片的地址 */

var picture = ['IMGES/turn1.png',
    'IMGES/turn2.png',
    'IMGES/turn3.png',
    'IMGES/turn4.png',
    'IMGES/turn5.png',
    'IMGES/turn6.png'
];

/* 从图片数组的长度，动态添加小圆点 */

for (let i = 0; i < picture.length; i++) {
    let dot = document.createElement('div');
    dot.classList.add('dian'); // 添加圆点
    select.appendChild(dot);
    /* 添加自定义属性index，对应每张图片的下标 */
    dot.bianhao = i;
}

// 清除小圆点check样式
function qingchu() {
    for (let i = 0; i < dian.length; i++) {
        dian[i].classList.remove('check');
    }
}

/* 设置index为0，这个变量后面就一直用来充当图片数组的下标 */
var index = 0;

/*********************** 切图函数 *******************/
function yunxing() {
    index += 1;
    if (index >= picture.length) {
        index = 0;
    }
    // 图片切换
    image.src = picture[index];
    // 背景的更换
    bg.style.cssText = ` background-image: url(${picture[index]});`
        // 小圆点显示
    qingchu();
    // 小原点切换
    dian[index].classList.add('check');
}

/* 点击向右按钮时的操作 */
right.addEventListener('click', function() {
    yunxing();
})

/* 点击向左按钮时的操作 */
left.addEventListener('click', function() {

    index -= 1;
    if (index < 0) {
        index = picture.length - 1;
    }
    image.src = picture[index];
    bg.style.cssText = ` background-image: url(${picture[index]});`

    /* 向左时小圆点的显示 */
    qingchu();
    dian[index].classList.add('check');

})

/* 进入main时，停止自动轮播和.yun类的动画效果 */

main.addEventListener('mouseover', function() {
    clearInterval(lunbo);
    image.classList.remove('yun');
})

/*  离开main时，开始自动轮播和.yun类的动画效果 */

main.addEventListener('mouseout', function() {
    lunbo = setInterval(yunxing, 3000);
    image.classList.add('yun');
    image.style.animationDelay = '3s';
})

/*  点击小圆点时的切图操作 */
for (let i = 0; i < picture.length; i++) {
    dian[i].addEventListener('click', function() {
        qingchu();
        this.classList.add('check');
        index = i;
        image.src = picture[index];
        bg.style.cssText = ` background-image: url(${picture[index]});`

    })
}

/* 自动轮播定时器与初始状态 */
lunbo = setInterval(yunxing, 3000);
image.classList.add('yun');
dian[0].classList.add('check');

function warn() {
    alert("暂时不支持跳转");
}

function blog() {
    alert("Zzz、的博客\n\n若有需要请跳转至https://blog.nowcoder.net/mengyu2333")
}