function check(obj) {
    var pass1 = document.getElementById("p1").value;
    var pass2 = obj.value;
    if (pass1 == pass2) {
        document.getElementById("tip").innerText = "密码格式正确";
    } else {
        alert("两次输入密码不一致");
        document.getElementById("tip").innerText = "两次密码不一致";
    }
}

window.onload = function() {
    var item = document.getElementsByClassName("item");
    var it = item[0].getElementsByTagName("div");

    var content = document.getElementsByClassName("content");
    var con = content[0].getElementsByTagName("div");

    for (let i = 0; i < it.length; i++) {
        it[i].onclick = function() {
            for (let j = 0; j < it.length; j++) {
                it[j].className = '';
                con[j].style.display = "none";
            }
            this.className = "active";
            it[i].index = i;
            con[i].style.display = "block";
        }
    }
}

function finish1() {
    alert("登陆成功");
}

function finish2() {

    alert("注册成功");
}

function warn() {
    alert("暂不支持找回");
}