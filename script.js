let resolution = document.querySelector("#resolution")
let canvas = document.getElementsByClassName("sketch")[0]

function createSquare(){
	let square = document.createElement("div")
	square.style = `
		display: inline-block;
		margin: 0px;
		height: ${500 / Math.ceil(resolution.value * 10 / 10)}px;
		width: ${500 / Math.ceil(resolution.value * 10 / 10)}px;
		/*border: 1px solid var(--black);*/
	`
	canvas.appendChild(square)
}

function empty(){
	let count = canvas.children.length
	for(let i = 0; i < count; i++){
		canvas.removeChild(canvas.lastChild)
	}
}

function canvasFiller(){
	empty()
	for(let i = 0; i < (Math.ceil(resolution.value * 10 / 10)); i++){
		for(let j = 0; j < (Math.ceil(resolution.value * 10 / 10)); j++){
			createSquare()
		}
	}
}

let draw = false

addEventListener("keydown" , e => {
	if(e.code == "KeyD"){
		draw = true
	}
})

addEventListener("keyup" , e => {
	if(e.code == "KeyD"){
		draw = false
	}
})

canvas.addEventListener("mousemove" , e => {
	if(draw == true){
		e.target.setAttribute("class" , "black")
	}
})

canvasFiller()

document.getElementById("remove").addEventListener("click" , () => {
	empty()
	canvasFiller()
})

document.getElementById("add").addEventListener("click" , createSquare)

resolution.addEventListener("change" , () => {
	empty()
	canvasFiller()
})
