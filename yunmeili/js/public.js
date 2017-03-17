function addClass(obj,classname){
	var old=obj.getAttribute("class");
	if(old==null){
		obj.setAttribute("class",classname);
	}else{
		if(old.match(classname)==null){
			// obj.setAttribute("class",classname)
			obj.setAttribute("class",old+" "+classname);
		}
	}
}
function removeClass(obj,classname){
	var old=obj.className;
	var arr=old.split(" ");
	function fil(num){
		return num!=classname;
	}
	var newArr=arr.filter(fil);
	var newClass=newArr.join(" ");
	obj.className=newClass;
}