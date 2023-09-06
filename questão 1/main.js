window.addEventListener('load', function(event) {
    imprimir();
    
});

function imprimir(){
    var a = 10  
    var b = 5
    var c = 1
    var d;

    c = b--;
	b = a++;
	a =  5  + "1";
	d = "1" + "1";

    document.getElementById("valorA").textContent = a;
    document.getElementById("valorB").textContent = b;
    document.getElementById("valorC").textContent = c;
    document.getElementById("valorD").textContent = d;
}