// 响应式兼容
(function (doc, win) {
	var docEl = doc.documentElement,
			resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
			recalc = function () {
				var clientWidth = docEl.clientWidth;
				if (!clientWidth) return;
				docEl.style.fontSize = 24 * (clientWidth / 1920) + 'px';
			};

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

// 打开密码设置框
function openSetPasswordDialog(){
	$('#setPassworddialog').fadeIn()
}

// 关闭密码设置框
$('#setPassworddialog').click(function(){
	$(this).fadeOut()
})

$('#setPassworddialog .form').click(function(e){
	e.stopPropagation()
})