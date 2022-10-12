let div = document.getElementById("progress")



// Generate Button creation.
let generate = document.createElement("a")
generate.style.textDecoration = "none"
generate.style.padding = "10px 20px"
generate.style.background = "black"
generate.style.color = "white"
generate.innerText = "Generate Link"
div.appendChild(generate)
div.style.justifyContent = "center"







// Function for loading bar.

let progress = () => {

  div.removeChild(generate)
  div.style.justifyContent = "left"



  // 1% t0 100% display elrmtnt.

  let num = document.createElement("p")
  num.innerText = "1%"
  num.style.color = "black"
  num.style.marginRight = "5px"
  num.style.fontWeight="bold"
  num.style.fontSize="20px"

  
  div.appendChild(num)



  // loading bar element.
  let bar = document.createElement("div")
  bar.style.height = "10px"
  bar.style.background = "blue"
  bar.style.width = "1%"
  bar.style.borderRadius="10px"
  div.appendChild(bar)
  let width = 2


  // download now button element.
  let button = document.createElement("a")
  button.href = "https://maheshtechnicals.com"
  button.style.textDecoration = "none"
  button.style.padding = "10px 20px"
  button.style.background = "blue"
  button.style.color = "white"
  button.innerText = "Download Now"




  // function for increse width of loading bar.

  let increse = () => {

    width++
    bar.style.width = `${width}%`
    num.innerText = `${width}%`
  }




  // function for seting up time interval.

  let time = setInterval(() => {

    increse()

    if (width == 100) {
      clearInterval(time)
      div.removeChild(num)
      div.removeChild(bar)
      div.style.justifyContent = "center"
      div.appendChild(button)


    }
  }, 100)

}



// Generate Link on click function.
generate.addEventListener("click", () => {
  progress()
})
