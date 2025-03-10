const like = document.querySelectorAll(".favorite-icon");

function toggleLike(event) {
  
    if (event.target.classList.contains("filled")) {
        event.target.classList.remove("filled");
        event.target.innerHTML = "&#9825;";
    }
    else {
        event.target.classList.add("filled");
        event.target.innerHTML = "&#10084;";
    }
}

like.forEach((lik) => lik.addEventListener("click", toggleLike));
