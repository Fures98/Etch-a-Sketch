let resolution = document.querySelector("#resolution")
let canvas = document.getElementsByClassName("sketch")[0]

function createSquare(e){
	let square = document.createElement("div")
	square.style.height = `calc(500px / ${Math.floor(resolution.value / 10)}px)`
	square.style.width = `calc(500px / ${Math.floor(resolution.value / 10)}px)`
	square.style.backgroundColor = "red"
	canvas.appendChild(square)
	console.log(square)
	console.log(Math.floor(resolution.value / 10))
}

resolution.addEventListener("change" , createSquare)
