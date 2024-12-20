// 获取音频元素
var bgm = document.getElementById("bgm");

// 获取视频元素
var video = document.getElementById("video");

// 获取按钮和弹窗元素
var btn = document.getElementById("btn-showimg");
var popup = document.getElementById("popup");
var closeBtn = document.getElementById("close");
var popupMessage = document.getElementById("popup-message");

bgm.volume = 0.2;  // 设置背景音乐的音量范围 0.0 到 1.0

// 页面加载完成后显示弹窗，并显示欢迎信息
window.onload = function() {
    popup.style.display = "flex"; // 显示弹窗并居中
    popupMessage.innerHTML = "<p>欢迎来到C+Major</p>"; // 设置弹窗的文本内容

    // 3秒后自动关闭弹窗
    setTimeout(function() {
        popup.style.display = "none"; // 隐藏弹窗
    }, 3000);
}

// 当点击按钮时显示图片弹窗
btn.onclick = function() {
    popup.style.display = "flex";
    popupMessage.innerHTML = '<img src="images/bm.jpg" alt="群号：1007991448" class="popup-image">'; // 显示图片
}

// 当点击关闭按钮时关闭弹窗，并播放音频
closeBtn.onclick = function() {
    popup.style.display = "none"; // 隐藏弹窗
    bgm.play(); // 播放背景音乐
}

// 当点击弹窗外部区域时关闭弹窗，并播放音频
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none"; // 隐藏弹窗
        bgm.play(); // 播放背景音乐
    }
}

// 监听视频的播放和暂停事件，控制背景音乐
video.addEventListener("play", function() {
    bgm.pause(); // 当视频播放时暂停背景音乐
});

video.addEventListener("pause", function() {
    bgm.play(); // 当视频暂停时恢复播放背景音乐
});
