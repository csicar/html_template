window.onload = function() {
  heartIcon = document.querySelector(".glyphicon-heart")
  heartIcon.onclick = function() {
    heartIcon.style="transition: 1s all; color: #18627f; transform: scale(10) translateY(20px)"
  }
}
