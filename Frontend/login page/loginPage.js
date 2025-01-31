const form = document.getElementById("form");
form.addEventListener("submit", async (event, req, res) => {
  event.preventDefault();
  try {
    const response = await fetch(`http://localhost:3000/api/v3/voting/login`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify({
        adhaarCard: document.getElementById("adhaarCard").value,
        phNumber: document.getElementById("phNumber").value,
      }),
      credentials: "include",
    });
    localStorage.setItem("adhaarCard",document.getElementById("adhaarCard").value)
    localStorage.setItem("phNumber",document.getElementById("phNumber").value)
    console.log(response);
    if (response.ok) {
      alert("click here to proceed.");
      console.log("User exists in the database.");
      window.location.href =
        "http://127.0.0.1:5500/Frontend/login%20page/mainPage.html";
    } else {
      alert("You're not registered by the Government of India.");
    }
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
});
