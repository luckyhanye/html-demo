
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
var guanZhu=document.getElementsByClassName('potoChen')[0].getElementsByTagName('a')[2];
var fansNum=document.getElementsByClassName('fans')[0].getElementsByTagName('strong')
guanZhu.onclick=function(event){
	event.preventDefault();
	if(kaiguan==0){
		kaiguan=1;
		fansNum[0].innerHTML=parseInt(fansNum[0].innerHTML)+1
		fansNum[1].innerHTML=parseInt(fansNum[1].innerHTML)+1
		fansNum[2].innerHTML=parseInt(fansNum[2].innerHTML)+1
	}else if(kaiguan==1){
		kaiguan=0;
		fansNum[0].innerHTML=parseInt(fansNum[0].innerHTML)-1
		fansNum[1].innerHTML=parseInt(fansNum[1].innerHTML)-1
		fansNum[2].innerHTML=parseInt(fansNum[2].innerHTML)-1
	}
	
}
var picLi=document.getElementsByClassName('thumbnail')[0].getElementsByTagName('li');
var picShow=document.getElementsByClassName('picShow')[0];
for(var i=0;i<picLi.length;i++){
	picLi[i].onclick=function(event){
		for(var j=0;j<picLi.length;j++){
			picLi[j].index=j;
			removeClass(picLi[j].getElementsByTagName('a')[0],"active");
			picLi[j].getElementsByTagName('img')[0].style.display="none";
		}
		event.preventDefault();
		var num=this.index;
		var ml=num*-523+"px";
		picShow.style.marginTop=ml;
		addClass(this.getElementsByTagName('a')[0],"active")
		this.getElementsByTagName('img')[0].style.display="block";
	}
}

