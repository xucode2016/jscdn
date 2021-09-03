let scriptNode = document.createElement("script")
scriptNode.setAttribute("src", 'https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js')
document.querySelector("body").appendChild(scriptNode)
$(".header").remove();
$(".content").remove();
