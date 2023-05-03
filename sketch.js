

const options = ["råb din mor", "linial over benet", "klask i nakken", "lusing","giv en lammer til den tætteste på dig", "få en lammer af alle", "giv en lussing valgfri", "snus i en valgfris sko", "alle må se nummer 17 billed i kamera rulle", "giv en lussing til den nærmste", "giv en lussing", "spark valgfri i røven", "vælg en der skal slikke 5 cm på en væg","slå alle i panden", "bliv slået i panden", "elestik svip på bar arm", "giv et heste bid til den nærmeste", "giv et heste bid valgfri", "tag skoene af en til det er din tur igen", "du er heldig ingen straf denne gang","lav micheal jorden på den nærmeste pige"]

document.querySelector("button").addEventListener("click", chooseOne)

function chooseOne(){
  const random = Math.floor(Math.random()*options.length)
  document.querySelector("h2").style.opacity=0
  document.querySelector("#wheel").style.rotate=0
  document.querySelector("#wheel").style.rotate=random*250 + 1000+"deg"
  setTimeout(function(){
    document.querySelector("h2").style.opacity=1
    document.querySelector("h2").textContent=options[random]
    
  }, 2000)
}
