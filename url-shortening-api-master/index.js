function handleUrl() {
  const input = document.getElementById("url-input");
  const url = input.value.trim();
  const errormessage = document.getElementById("errorMessage");
  const urlContent = document.getElementById("url-content");
  const list = document.getElementById("url-list");

  console.log("url-list:", list);

  if (url === "") {
    input.style.border = "2px solid red";
    errormessage.classList.add("show");
    return;
  } else {
    input.style.border = "";
    errormessage.classList.remove("show");
    urlContent.classList.remove("hide");
  }
  // is there anything else that I can use at the end of the shortened url besides ...
  const shortenedUrl = url.length > 20 ? url.slice(0, 20) + "..." : url;
  console.log("Shortened URL:", shortenedUrl);

  const li = document.createElement("li");
  li.innerHTML = `
        <span class="url-text">${shortenedUrl}</span>
        <button class="copy-btn">Copy</button>
    `;

  li.querySelector(".copy-btn").addEventListener("click", function () {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        console.log("URL copied to clipboard", shortenedUrl);
      })
      .catch((err) => {
        console.error("Failed to copy URL", err);
      });
  });

  list.appendChild(li);
  input.value = "";
}
