let resolution = document.querySelector("#resolution")
let canvas = document.getElementsByClassName("sketch")[0]

function createSquare(){
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
}

function empty(){
	let count = canvas.children.length
	for(let i = 0; i < count; i++){
		canvas.removeChild(canvas.lastChild)
	}
}

function canvasFiller(){
	empty()
	for(let i = 0; i < 500 / resolution.value * 4; i++){
		for(let j = 0; j < 500 / resolution.value * 4; j++){
			createSquare()
		}
	}
}

canvasFiller()

document.getElementById("remove").addEventListener("click" , () => {
	empty()
	canvasFiller()
})

document.getElementById("add").addEventListener("click" , createSquare)

resolution.addEventListener("change" , createSquare)
