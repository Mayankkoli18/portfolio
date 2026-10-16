document.getElementById("name").innerHTML = profile.name
document.getElementById("tagline").innerHTML = profile.tagline
document.getElementById("aboutText").innerHTML = profile.about

var exts = ["png", "jpg", "jpeg", "webp", "gif", "PNG", "JPG", "JPEG"]

function fixImg(img) {
  var i = parseInt(img.getAttribute("data-try") || "0") + 1
  if (i < exts.length) {
    img.setAttribute("data-try", i)
    img.src = img.src.replace(/\.[a-zA-Z]+$/, "." + exts[i])
  } else {
    img.style.display = "none"
    if (img.parentNode && img.parentNode.classList.contains("pic")) {
      img.parentNode.classList.add("missing")
    }
  }
}

function folderOf(p) {
  return p.folder || p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}

var slideNum = 0
var slideTimer

function showSlide(n) {
  var slideEls = document.getElementsByClassName("slide")
  var dotEls = document.getElementsByClassName("dot")
  if (n >= slideEls.length) n = 0
  if (n < 0) n = slideEls.length - 1
  slideNum = n
  for (var i = 0; i < slideEls.length; i++) {
    if (i == n) {
      slideEls[i].className = "slide on"
      dotEls[i].className = "dot on"
    } else {
      slideEls[i].className = "slide"
      dotEls[i].className = "dot"
    }
  }
  document.getElementById("slideTitle").innerHTML = slides[n].title
}

function goSlide(n) {
  showSlide(n)
  clearInterval(slideTimer)
  slideTimer = setInterval(function () { showSlide(slideNum + 1) }, 5000)
}

var sliderHtml = ""
var dotHtml = ""
for (var i = 0; i < slides.length; i++) {
  var s = slides[i]
  sliderHtml += '<a class="slide" href="' + s.link + '" target="_blank"><img src="media/' + s.folder + '/banner.png" alt="' + s.title + '" onerror="fixImg(this)"></a>'
  dotHtml += '<button class="dot" onclick="goSlide(' + i + ')"></button>'
}
document.getElementById("slider").innerHTML = sliderHtml
document.getElementById("dots").innerHTML = dotHtml
goSlide(0)

var skillHtml = ""
for (var group in skills) {
  skillHtml += "<dt>" + group + "</dt><dd>" + skills[group].join(", ") + "</dd>"
}
document.getElementById("skills").innerHTML = skillHtml

var majorHtml = ""
var otherHtml = ""
for (var i = 0; i < projects.length; i++) {
  var p = projects[i]
  if (p.major) {
    majorHtml += '<button class="row" onclick="openProject(' + i + ')">' +
      '<div class="pic"><img src="media/' + folderOf(p) + '/img1.png" alt="' + p.name + '" onerror="fixImg(this)"></div>' +
      '<div><h3>' + p.name + '</h3><p>' + p.pitch + '</p></div>' +
      '<span class="status">' + p.status + '</span></button>'
  } else {
    var note = p.tools
    if (p.event) note += " - " + p.event
    if (p.result) note += " - " + p.result
    otherHtml += '<div class="other"><div><h3>' + p.name + '</h3><p>' + p.pitch + '</p><p>' + note + '</p></div>'
    if (p.status) otherHtml += '<span class="status">' + p.status + '</span>'
    otherHtml += '</div>'
  }
}
document.getElementById("majorList").innerHTML = majorHtml
document.getElementById("otherList").innerHTML = otherHtml

var companyHtml = ""
for (var i = 0; i < companies.length; i++) {
  companyHtml += '<div class="other"><div><h3>' + companies[i].name + '</h3></div></div>'
}
document.getElementById("companyList").innerHTML = companyHtml

var hobbyHtml = ""
for (var i = 0; i < hobbies.length; i++) {
  hobbyHtml += '<div class="other"><div><h3>' + hobbies[i].name + '</h3>'
  if (hobbies[i].note) hobbyHtml += '<p>' + hobbies[i].note + '</p>'
  hobbyHtml += '</div></div>'
}
document.getElementById("hobbyList").innerHTML = hobbyHtml

var recHtml = ""
if (recommendations.length == 0) recHtml = "<p>* content pending</p>"
for (var i = 0; i < recommendations.length; i++) {
  var r = recommendations[i]
  recHtml += '<div class="other"><div><h3>' + r.name + '</h3></div><div class="socials">'
  for (var j = 0; j < r.socials.length; j++) {
    recHtml += '<a href="' + r.socials[j].url + '" target="_blank">' + r.socials[j].label + '</a>'
  }
  recHtml += '</div></div>'
}
document.getElementById("recList").innerHTML = recHtml

var modelHtml = ""
for (var n = 1; n <= models.imgs; n++) {
  var title = models.titles[n - 1] || "Model " + n
  modelHtml += '<figure><div class="pic"><img src="media/models/img' + n + '.png" alt="' + title + '" onclick="bigPic(this)" onerror="fixImg(this)"></div><figcaption>' + title + '</figcaption></figure>'
}
for (var n = 1; n <= models.vids; n++) {
  modelHtml += '<figure><div class="pic"><video controls src="media/models/vid' + n + '.mp4"></video></div><figcaption>Video ' + n + '</figcaption></figure>'
}
document.getElementById("modelGrid").innerHTML = modelHtml

function copyIt(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
  } else {
    var t = document.createElement("textarea")
    t.value = text
    document.body.appendChild(t)
    t.select()
    document.execCommand("copy")
    document.body.removeChild(t)
  }
  var toast = document.getElementById("toast")
  toast.className = "show"
  setTimeout(function () { toast.className = "" }, 1400)
}

var linkHtml = '<button onclick="copyIt(\'' + profile.email + '\')">Email</button>'
linkHtml += '<button onclick="copyIt(\'' + profile.discord + '\')">Discord</button>'
for (var i = 0; i < profile.links.length; i++) {
  linkHtml += '<a href="' + profile.links[i].url + '" target="_blank">' + profile.links[i].label + '</a>'
}
document.getElementById("links").innerHTML = linkHtml

var box = document.getElementById("box")

function openProject(i) {
  var p = projects[i]
  var h = "<h2>" + p.name + "</h2><p>" + p.pitch + "</p>"
  if (p.about) h += '<p class="about">' + p.about + "</p>"
  h += '<dl class="meta">'
  h += "<dt>Status</dt><dd>" + p.status + "</dd>"
  h += "<dt>Role</dt><dd>" + p.role + "</dd>"
  h += "<dt>Tools</dt><dd>" + p.tools + "</dd>"
  if (p.tech) h += "<dt>Multiplayer</dt><dd>" + p.tech + "</dd>"
  if (p.event) h += "<dt>Made for</dt><dd>" + p.event + "</dd>"
  if (p.result) h += "<dt>Result</dt><dd>" + p.result + "</dd>"
  h += "</dl>"
  h += '<div class="shots">'
  for (var n = 1; n <= p.imgs; n++) {
    h += '<img src="media/' + folderOf(p) + '/img' + n + '.png" alt="' + p.name + '" onclick="bigPic(this)" onerror="fixImg(this)">'
  }
  for (var n = 1; n <= p.vids; n++) {
    h += '<video controls src="media/' + folderOf(p) + '/vid' + n + '.mp4"></video>'
  }
  h += "</div>"
  if (p.link) h += '<a class="go" href="' + p.link + '" target="_blank">' + p.linkLabel + "</a>"
  document.getElementById("boxContent").innerHTML = h
  box.showModal()
}

document.getElementById("closeBtn").onclick = function () { box.close() }
box.onclick = function (e) {
  if (e.target == box) box.close()
}

function bigPic(img) {
  document.getElementById("bigImg").src = img.src
  document.getElementById("bigPic").showModal()
}
document.getElementById("bigPic").onclick = function () { this.close() }