var reUser=/^[a-zA-z][a-zA-Z0-9_]{2,9}$/
var rePa=/^[^ \u4e00-\u9fa5\\/:\*\?\"\<\>\|][^\u4e00-\u9fa5\\/:\*\?\"\<\>\|]{4,18}[^ \u4e00-\u9fa5\\/:\*\?\"\<\>\|]$/
var li=document.getElementsByClassName('left')[0].getElementsByTagName('li');
var inputUser=li[0].getElementsByTagName('input')[0];
var inputPa=li[1].getElementsByTagName('input')[0];
var submit=document.getElementsByClassName('submit')[0];
inputUser.onblur=function(){
	var textUser=this.value;
	var resultUser=reUser.test(textUser)
	if(textUser){
		if(resultUser){
			li[0].getElementsByTagName('p')[0].innerHTML="√";
		}else{
			li[0].getElementsByTagName('p')[0].innerHTML="用户名不正确";
		}
	}else{
		li[0].getElementsByTagName('p')[0].innerHTML="请输入用户名！"
	}
}
inputPa.onblur=function(){
	var textPa=this.value;
	var resultPa=rePa.test(textPa);
	if(textPa){
		if(resultPa){
			li[1].getElementsByTagName('p')[0].innerHTML="√";
		}else{
			li[1].getElementsByTagName('p')[0].innerHTML="您的密码不正确";
		}
	}else{
		li[1].getElementsByTagName('p')[0].innerHTML="请输入密码";
	}
}
submit.onclick=function(){
	location.href="../index.html"
}
