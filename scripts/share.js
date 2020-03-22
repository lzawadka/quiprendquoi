if (navigator.share) {
  document.querySelectorAll("[data-share-url]").forEach($shareEl => {
    const $button = document.createElement("butotn");
    $button.innerHTML = "Partager";
    $shareEl.parentNode.append($button);
    $button.addEventListener("click", share.bind(this, $shareEl));
  });
}

function share($shareEl) {
  navigator.share({
    title: $shareEl.getAttributes("data-share-title"),
    text: $shareEl.getAttributes("data-share-text"),
    url: $shareEl.getAttributes("data-share-url")
  });
}
