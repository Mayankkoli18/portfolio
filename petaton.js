var petSave = "petaton"

var petUps = [
  { id: "auto", name: "Auto Petter", desc: "+1 pet every second", base: 15, grow: 1.15 },
  { id: "scratch", name: "Chin Scratches", desc: "+1 pet per click", base: 50, grow: 1.25 },
  { id: "mori", name: "Mori", desc: "+25% to all pets", base: 300, grow: 1.45 }
]

var pet = { pets: 0, auto: 0, scratch: 0, mori: 0 }
try {
  var saved = JSON.parse(localStorage.getItem(petSave))
  if (saved) {
    for (var key in pet) {
      if (typeof saved[key] == "number") pet[key] = saved[key]
    }
  }
} catch (e) {}

var petHtml = '<div class="petIn">' +
  '<button id="petClose">Close</button>' +
  '<h2>Pet-a-ton</h2>' +
  '<div class="petStage" id="petStage">' +
  '<button id="petCat"><img class="idle" src="media/petaton/cat.png" alt="Cat" onerror="fixImg(this)"><img class="happy" src="media/petaton/cat-happy.png" alt="" onerror="fixImg(this)"></button>' +
  '<div id="petFx"></div></div>' +
  '<div id="petCount">0</div>' +
  '<div id="petRates"></div>' +
  '<div id="petUps">'
for (var i = 0; i < petUps.length; i++) {
  petHtml += '<button class="petUp" onclick="buyUp(' + i + ')">' +
    '<img src="media/petaton/icon-' + petUps[i].id + '.png" alt="" onerror="fixImg(this)">' +
    '<div><h3>' + petUps[i].name + ' <span></span></h3><p>' + petUps[i].desc + '</p></div>' +
    '<b></b></button>'
}
petHtml += '</div><button id="petReset">Reset</button></div>'
document.getElementById("petgame").innerHTML = petHtml

var petCat = document.getElementById("petCat")
var petStage = document.getElementById("petStage")
var petFx = document.getElementById("petFx")
var petUpEls = document.getElementsByClassName("petUp")
var happyTimer

function perClick() {
  return (1 + pet.scratch) * (1 + 0.25 * pet.mori)
}

function perSec() {
  return pet.auto * (1 + 0.25 * pet.mori)
}

function costOf(u) {
  return Math.ceil(u.base * Math.pow(u.grow, pet[u.id]))
}

function fmt(n) {
  n = Math.floor(n)
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M"
  if (n >= 10000) return (n / 1000).toFixed(1) + "k"
  return n
}

function clean(n) {
  return Math.round(n * 100) / 100
}

function refreshPet() {
  document.getElementById("petCount").innerHTML = fmt(pet.pets)
  document.getElementById("petRates").innerHTML = clean(perClick()) + " per click / " + clean(perSec()) + " per sec"
  for (var i = 0; i < petUps.length; i++) {
    var c = costOf(petUps[i])
    var el = petUpEls[i]
    el.querySelector("span").innerHTML = pet[petUps[i].id] ? "Lv " + pet[petUps[i].id] : ""
    el.querySelector("b").innerHTML = fmt(c)
    el.className = pet.pets >= c ? "petUp can" : "petUp"
  }
}

function popText(x, y) {
  var gain = clean(perClick())
  var d = document.createElement("div")
  d.className = "petPop"
  d.innerHTML = "+" + gain + ' <img src="media/petaton/heart.png" alt="" onerror="fixImg(this)">'
  d.style.left = x + "px"
  d.style.top = y + "px"
  d.onanimationend = function () { d.remove() }
  petFx.appendChild(d)
}

petCat.onclick = function (e) {
  pet.pets += perClick()
  petCat.animate([
    { transform: "scale(1, 1)" },
    { transform: "scale(1.12, 0.84)", offset: 0.3 },
    { transform: "scale(0.95, 1.1)", offset: 0.6 },
    { transform: "scale(1, 1)" }
  ], { duration: 300, easing: "ease-out" })

  var box = petStage.getBoundingClientRect()
  var x = box.width / 2
  var y = box.height / 3
  if (e.detail) {
    x = e.clientX - box.left
    y = e.clientY - box.top
  }
  popText(x, y)

  petCat.classList.add("happy")
  clearTimeout(happyTimer)
  happyTimer = setTimeout(function () { petCat.classList.remove("happy") }, 350)
  refreshPet()
}

function buyUp(i) {
  var c = costOf(petUps[i])
  var el = petUpEls[i]
  el.classList.remove("shake")
  if (pet.pets >= c) {
    pet.pets -= c
    pet[petUps[i].id]++
    refreshPet()
  } else {
    void el.offsetWidth
    el.classList.add("shake")
  }
}

var petTicks = 0
setInterval(function () {
  pet.pets += perSec() / 10
  petTicks++
  if (pet.auto > 0 && petTicks % 10 == 0) {
    var box = petCat.getBoundingClientRect()
    var s = petStage.getBoundingClientRect()
    popText(box.left - s.left + box.width * (0.3 + Math.random() * 0.4), box.top - s.top + box.height * 0.3)
  }
  if (petTicks % 50 == 0) localStorage.setItem(petSave, JSON.stringify(pet))
  refreshPet()
}, 100)

document.getElementById("petReset").onclick = function () {
  if (!confirm("Reset Pet-a-ton?")) return
  pet = { pets: 0, auto: 0, scratch: 0, mori: 0 }
  localStorage.removeItem(petSave)
  refreshPet()
}

document.getElementById("petToggle").onclick = function () { document.body.classList.add("petOpen") }
document.getElementById("petClose").onclick = function () { document.body.classList.remove("petOpen") }

refreshPet()