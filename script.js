let resolution = document.querySelector("#resolution")
let canvas = document.getElementsByClassName("sketch")[0]

function createSquare(e){
	let square = document.createElement("div")
	square.style = `
		display: inline-block;
		margin: 0px;
		height: ${500 / Math.floor(resolution.value * 4 / 10)}px;
		width: ${500 / Math.floor(resolution.value * 4 / 10)}px;
		border: 1px solid var(--black);
	`
	square.setAttribute("class" , "square")
	canvas.appendChild(square)
	console.log(square)
	console.log(canvas.children)
	console.log(Math.floor(resolution.value * 4 / 10))
}

function empty(){
	for(let i = 0; i < canvas.children; i++){
		console.log(canvas.childNodes())
	}
}

document.getElementById("remove").addEventListener("click" , empty)

document.getElementById("add").addEventListener("click" , createSquare)

resolution.addEventListener("change" , createSquare)
