import "./css/index.css"

//escrito na mão
const ccBgColor1 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor2 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["#DF6F29", "#C69347"],
    default: ["black", "gray"],
  }

  ccBgColor1.setAttribute("fill", colors[type][0])
  ccBgColor2.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}

// setCardType("mastercard")

globalThis.setCardType = setCardType

//=============================================================================

//copiado pelo dev tools
// const ccBgColor1 = document.querySelector(
//   "#app > section > div.cc-bg > svg > g > g:nth-child(1) > path"
// )
// console.log(ccBgColor1)
