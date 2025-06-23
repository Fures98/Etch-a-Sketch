let resolution = document.querySelector("#resolution")
let canvas = document.getElementsByClassName("sketch")[0]
let colorInput = document.getElementById("color")
let rainCheck = document.getElementById("rainbow")
let rainbow = ["red" , "orange" , "yellow" , "green" , "blue" , "purple" , "black"]

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

let color = colorInput.value

colorInput.addEventListener("change" , e => {
	color = colorInput.value
	document.documentElement.style.setProperty("--color" , color)
})

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
		if(rainCheck.checked == false){
			e.target.style = `
			display: inline-block;
			margin: 0px;
			height: ${500 / Math.ceil(resolution.value * 10 / 10)}px;
			width: ${500 / Math.ceil(resolution.value * 10 / 10)}px;
			/*border: 1px solid var(--black);*/
			background-color: ${color};`
		}
		else if(rainCheck.checked == true){
			e.target.style = `
			display: inline-block;
			margin: 0px;
			height: ${500 / Math.ceil(resolution.value * 10 / 10)}px;
			width: ${500 / Math.ceil(resolution.value * 10 / 10)}px;
			/*border: 1px solid var(--black);*/
			background-color: ${rainbow[Math.floor(Math.random() * 7)]};`
		}
	}
})

canvasFiller()

document.getElementById("remove").addEventListener("click" , () => {
	empty()
	canvasFiller()
})

resolution.addEventListener("change" , () => {
	if(resolution.value == 0){
		resolution.value = 1
	}
	empty()
	canvasFiller()
})
