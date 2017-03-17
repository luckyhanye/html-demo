var reEm=/^[0-9A-z]{4,20}[_0-9A-z]{1,4}@(163|126|qq|QQ|sina).(com|cn|com.cn)$/;
var reUser=/^[a-zA-z][a-zA-Z0-9_]{2,9}$/
var rePa=/^[^ \u4e00-\u9fa5\\/:\*\?\"\<\>\|][^\u4e00-\u9fa5\\/:\*\?\"\<\>\|]{4,18}[^ \u4e00-\u9fa5\\/:\*\?\"\<\>\|]$/
var li=document.getElementsByClassName('left')[0].getElementsByTagName('li');
console.log(li)
var inputEm=li[0].getElementsByTagName('input')[0];
var inputUser=li[1].getElementsByTagName('input')[0];
var inputPa1=li[3].getElementsByTagName('input')[0];
var inputPa2=li[4].getElementsByTagName('input')[0];
var inputCheck=document.getElementsByClassName('checkbox')[0].getElementsByTagName('input')[0];
var submit=document.getElementsByClassName('submit')[0];
console.log(inputEm)
inputEm.onblur=function(){
	var textEm=this.value;
	var resultEm=reEm.test(textEm);
	if(textEm){
		if(resultEm){
			li[0].getElementsByTagName('p')[0].innerHTML="√";
		}else{
			li[0].getElementsByTagName('p')[0].innerHTML="您的邮箱格式不正确";
		}
	}else{
		li[0].getElementsByTagName('p')[0].innerHTML="请输入您常用邮箱！"
	}
	
}
inputUser.onblur=function(){
	var textUser=this.value;
	var resultUser=reUser.test(textUser)
	if(textUser){
		if(resultUser){
			li[1].getElementsByTagName('p')[0].innerHTML="√";
		}else{
			li[1].getElementsByTagName('p')[0].innerHTML="格式不正确";
		}
	}else{
		li[1].getElementsByTagName('p')[0].innerHTML="请输入用户名！"
	}
}
inputPa1.onblur=function(){
	var textPa=this.value;
	var resultPa=rePa.test(textPa);
	if(textPa){
		if(resultPa){
			li[3].getElementsByTagName('p')[0].innerHTML="√";
		}else{
			li[3].getElementsByTagName('p')[0].innerHTML="您的密码格式不正确";
		}
	}else{
		li[3].getElementsByTagName('p')[0].innerHTML="请设置密码";
	}
}
inputPa2.onblur=function(){
	var textPa=inputPa1.value;
	var textPa2=this.value;
	if(textPa2==textPa){
		li[4].getElementsByTagName('p')[0].innerHTML="√";
	}else{
		li[4].getElementsByTagName('p')[0].innerHTML="不相符";
	}
}
submit.onclick=function(){
	if(inputCheck.checked==true){
		location.href="login.html"
	}
}
