var a = document.querySelectorAll(".block");

function render(el,val,obj){
	if(el > val){
		el = el - 1;
		s = el + "%";
		/*console.log(s);*/
		obj.innerText = s;
		
		requestAnimationFrame(function(){

			render(el, val, obj);
		});
		
	}
	else {
		console.log("null");
		return null;
	}
};

a[0].onclick = function(){
	this.classList.toggle('active');
	//console.log(this.childNodes[1].innerText);
	var e = Number(this.childNodes[1].innerText.slice(0,-1));
	var o = this.childNodes[1];
	//console.log(o);
	
	render(e, 22, o);

};

console.log(a);