function name(id){
	return document.getElementById(id);
}
var a=name("btnL").getElementsByTagName("a");
console.log(a)
var num=0;
function timer(){
	if(num<3){
		num=num+1;
	}else{
		num=0;
	}
	var ml=num*-940+"px";
	name("pic").style.marginLeft=ml;
	for(var i=0;i<a.length;i++){
		// a[i].style.backgroundColor="#046a95";
		removeClass(a[i],"bjc");
	}
	// a[num].style.backgroundColor="red";
	addClass(a[num],"bjc");
}
timer();
var stop=setInterval(timer,2000);
name("pic").onmouseenter=function(){
	clearInterval(stop);
}
name("pic").onmouseleave=function(){
	stop=setInterval(timer,2000)
}
for(var m=0;m<a.length;m++){
	a[m].onmouseenter=function(){
		clearInterval(stop);
	}
	a[m].onmouseleave=function(){
		stop=setInterval(timer,2000)
	}
}
for(var i=0;i<a.length;i++){
	a[i].index=i;
	a[i].onclick=function(event){
		num=this.index
		var ml=num*-940+"px";
		console.log(ml)
		name("pic").style.marginLeft=ml;
		event.preventDefault();
		for(var j=0;j<a.length;j++){
			removeClass(a[j],"bjc");
		}
		addClass(a[num],"bjc");
	}
}

