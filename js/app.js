function ejecutar(){
	let texto = (document.getElementById("input").value);
	function detectarLenguaje(){
		if(/[a-záéíóúü]/gi.test(texto)){
			return "estexto";
		}
	}
	if (detectarLenguaje() == "estexto") {
 	// Letras minúsculas
		texto = texto.replace(/a/g,'2');
		texto = texto.replace(/b/g,'22');
		texto = texto.replace(/c/g,'222');
		texto = texto.replace(/d/g,'3');
		texto = texto.replace(/e/g,'33');
		texto = texto.replace(/f/g,'333');
		texto = texto.replace(/g/g,'4');
		texto = texto.replace(/h/g,'44');
		texto = texto.replace(/i/g,'444');
		texto = texto.replace(/j/g,'5');
		texto = texto.replace(/k/g,'55');
		texto = texto.replace(/l/g,'555');
		texto = texto.replace(/m/g,'6');
		texto = texto.replace(/n/g,'66');
		texto = texto.replace(/ñ/g,'66');
		texto = texto.replace(/o/g,'666');
		texto = texto.replace(/p/g,'7');
		texto = texto.replace(/q/g,'77');
		texto = texto.replace(/r/g,'777');
		texto = texto.replace(/s/g,'7777');
		texto = texto.replace(/t/g,'8');
		texto = texto.replace(/u/g,'88');
		texto = texto.replace(/v/g,'888');
		texto = texto.replace(/w/g,'9');
		texto = texto.replace(/x/g,'99');
		texto = texto.replace(/y/g,'999');
		texto = texto.replace(/z/g,'9999');
		// Letras Mayúsculas
		texto = texto.replace(/A/g,'2');
		texto = texto.replace(/B/g,'22');
		texto = texto.replace(/C/g,'222');
		texto = texto.replace(/D/g,'3');
		texto = texto.replace(/E/g,'33');
		texto = texto.replace(/F/g,'333');
		texto = texto.replace(/G/g,'4');
		texto = texto.replace(/H/g,'44');
		texto = texto.replace(/I/g,'444');
		texto = texto.replace(/J/g,'5');
		texto = texto.replace(/K/g,'55');
		texto = texto.replace(/L/g,'555');
		texto = texto.replace(/M/g,'6');
		texto = texto.replace(/N/g,'66');
		texto = texto.replace(/Ñ/g,'66');
		texto = texto.replace(/O/g,'666');
		texto = texto.replace(/P/g,'7');
		texto = texto.replace(/Q/g,'77');
		texto = texto.replace(/R/g,'777');
		texto = texto.replace(/S/g,'7777');
		texto = texto.replace(/T/g,'8');
		texto = texto.replace(/U/g,'88');
		texto = texto.replace(/V/g,'888');
		texto = texto.replace(/W/g,'9');
		texto = texto.replace(/X/g,'99');
		texto = texto.replace(/Y/g,'999');
		texto = texto.replace(/Z/g,'9999');
		// Especiales
		texto = texto.replace(/Á/g,'2');
		texto = texto.replace(/É/g,'33');
		texto = texto.replace(/Í/g,'444');
		texto = texto.replace(/Ó/g,'666');
		texto = texto.replace(/Ú/g,'88');
		texto = texto.replace(/á/g,'2');
		texto = texto.replace(/é/g,'33');
		texto = texto.replace(/í/g,'444');
		texto = texto.replace(/ó/g,'666');
		texto = texto.replace(/ú/g,'88');
		texto = texto.replace(/Ü/g,'88');
		texto = texto.replace(/ü/g,'88');
		texto = texto.replace(/ /g,'0');
	}
	document.getElementById("output").value = texto;
}
function limpiar(){
	document.getElementById("input").value = "";
	document.getElementById("output").value = "";
}
function copiar(){
	document.getElementById("output").select();
	document.execCommand("copy");
}
document.getElementById("input").addEventListener("input", ejecutar);
document.getElementById("button--copy").addEventListener("click", copiar);
document.getElementById("button--clear").addEventListener("click", limpiar);


// codigo para descargar el texto del usuario
function download(filename, text) {
	let element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}

document.getElementById("dwn-btn").addEventListener("click", descarga);
function descarga(){
        let file = prompt("Escribe un nombre para el archivo")
        let text = document.getElementById("output").value;
        let filename = file + ".txt";
	if(text !== ""){
		download(filename, text);
	}
}
