document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    const title = document.getElementById("page-title");
    title.innerText = "This is my Event Handler";
  });

document.getElementById("btn-login").addEventListener("click", function () {
  //   console.log("button clicked");
  const userTextElement = document.getElementById("user-text");
  //   console.log(userText);
  userTextElement.innerText = "Login Completed!!";
  userTextElement.style.color = "red";
});
