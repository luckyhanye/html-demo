var nav=document.getElementsByClassName('mainNav')[0].getElementsByTagName('ul')[0];
var navLi=nav.getElementsByClassName('navLi')
console.log(navLi)
nav.onclick=function(event){
	event.preventDefault();
	for(var j=0;j<navLi.length;j++){
		var arrow=navLi[j].getElementsByTagName('img')[0];
		var description=navLi[j].getElementsByTagName('div')[0];
		removeClass(arrow,"display");
		removeClass(description,"display")

		// console.log(navLi[j].getElementsByTagName('a')[0]);
		removeClass(navLi[j].getElementsByTagName('a')[0],"changeColor");

	}
	var e;
	if(event){
		e=event;
	}else{
		e=window.event;
	}
	var tar=e.target||e.srcElement;
	if(tar.getAttribute("href")=="#"){
		addClass(tar,"changeColor");
		addClass(tar.parentNode.getElementsByTagName('img')[0],"display")
		addClass(tar.parentNode.getElementsByTagName('div')[0],"display")
	}
	console.log(tar.parentNode.getElementsByTagName('div')[0])
}

var zan=document.getElementsByClassName('love')[0];
var number=document.getElementsByClassName('number')[0];
var num=number.innerHTML;
console.log(num)
var kaiguan=0;
zan.onclick=function(){
	if(kaiguan==0){
		kaiguan=1
		zan.getElementsByTagName('span')[0].innerHTML="&#xe610;";
		num=parseInt(number.innerHTML)+1;
		number.innerHTML=num;
	}else if(kaiguan==1){
		kaiguan=0
		zan.getElementsByTagName('span')[0].innerHTML="&#xe835;";
		num=num-1;
		number.innerHTML=num;
	}
}
var goodsPic=document.getElementsByClassName('goodsPic')
for(var k=0;k<goodsPic.length;k++){
	goodsPic[k].onclick=function(){
		// location.replace("detail.html")
		location.href="detail.html"
	}
}
