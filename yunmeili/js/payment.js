function G(id){
	return document.getElementById(id)
}
var address=document.getElementsByClassName('address')[0].getElementsByTagName('p')
console.log(address)
for(var i=0;i<address.length;i++){
	address[i].onclick=function(){
		var txt=this.getElementsByTagName('em')[0].innerHTML;
		console.log(txt);
		document.getElementsByClassName('total')[0].getElementsByTagName('em')[0].innerHTML=txt;
		for(var j=0;j<address.length;j++){
			removeClass(address[j],"changeAddress")
			removeClass(address[j].getElementsByTagName('i')[0],"display")
			removeClass(address[j].getElementsByTagName('span')[0],"display")
		}
		var radio=this.getElementsByTagName('input')[0];
		var disI=this.getElementsByTagName('i')[0];
		var disSpan=this.getElementsByTagName('span')[0];
		if(radio.checked){
			addClass(this,"changeAddress")
			addClass(disI,"display")
			addClass(disSpan,"display")
		}
	}
}
// G("discount").onclick=function(){
// 	var disCount=G("discount").value;
// 	console.log(disCount)
// }
var freight=document.getElementsByClassName('freight')[0];
var goods=document.getElementsByClassName('production');
var yunFei=document.getElementsByClassName('shippingFir')[0].getElementsByTagName('strong')[0]
var shopTotal=document.getElementsByClassName('shipping')[0].getElementsByTagName('strong')[1];
var total=document.getElementsByClassName('total')[0].getElementsByTagName('strong')[0]

function getAllTotal(){
	var money=0;
	var yunfei=0;
	var index=G("freight").selectedIndex;
	console.log(index)
	var n=G("freight").options[index].value;
	if(index!=0){
		n=parseFloat(20);
	}else{
		n=parseFloat(10);
	}
	yunFei.innerHTML=n;
	for(var i=0;i<goods.length;i++){
		money+=parseFloat(goods[i].getElementsByClassName('subTotal')[0].innerHTML);
		yunfei=parseFloat(yunFei.innerHTML);
	}
	total.innerHTML=(money+yunfei).toFixed(2);
	shopTotal.innerHTML=(money+yunfei).toFixed(2);
}
// getAllTotal()

function getSubTotal(goods){
	var subTotal=0;
	var discount=0;
	var index=document.getElementsByTagName('select')[0].selectedIndex;
	console.log(index)
	var m=goods.getElementsByTagName("select")[0].options[index].value;
		console.log(m)
		if(index!=0){
			discount=parseFloat(m);
		}else{
			discount=0.9;
		}
		console.log(discount)
	
		subTotal = parseFloat(goods.getElementsByClassName("price")[0].innerHTML) * parseInt(goods.getElementsByClassName("number")[0].value)*discount;
		goods.getElementsByClassName("subTotal")[0].innerHTML = subTotal.toFixed(2);
}
getSubTotal(goods[0])
for(var i = 0;i<goods.length;i++){
	goods[i].onclick = function(event){
		var e = event || window.event;
		var tar = e.target || e.srcElement;
		if(tar.className=="sign"){
			var txt = tar.value;
			var num = parseInt(tar.parentNode.getElementsByClassName("number")[0].value)
			switch (txt){
				case "+":
				num+=1;break;
				case "-":
				if(num>1){
					num-=1;
				}break;
			
			}
			tar.parentNode.getElementsByClassName("number")[0].value = num;
			getSubTotal(tar.parentNode.parentNode)
			getAllTotal();
		}
	}
}
for(var k=0;k<goods.length;k++){
	goods[k].getElementsByClassName('number')[0].oninput=function(){
		getSubTotal(this.parentNode.parentNode);
		getAllTotal();
	}
}
