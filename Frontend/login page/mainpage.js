const vote_modi = document.getElementById("Narendra-modi");
const vote_rahul = document.getElementById("Rahul-gandhi");
const vote_mamta = document.getElementById("Mamta-banerjee");
const log_out = document.getElementById("log-out");

document.getElementById("Aadhaar").innerText = localStorage.getItem("adhaarCard");
document.getElementById("Phone").innerText = localStorage.getItem("phNumber");
document.querySelector(".profile-pic").src = localStorage.getItem("avatar");
document.querySelector("#dropdown-profile").src = localStorage.getItem("avatar");
async function onVoteModi() {
  try {
    const response = await fetch("http://localhost:3000/api/v3/voting/vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        candidateId: "679b0a2471ae7b0dce13b662",
      }),
      credentials: "include",
    });

    if (response.status === 400) {
      const errorData = await response.json(); // Extract error message
      alert(errorData.message || "Already voted.");
    }

    vote_rahul.disabled = true;
    vote_mamta.disabled = true;
    vote_modi.disabled = true;
    vote_rahul.style.display = "none";
    vote_mamta.style.display = "none";
    vote_modi.style.display = "none";
  } catch (error) {
    console.log(`error while voting Modi ${error}`);
  }
}

async function onVoteRahul() {
  try {
    const response = await fetch("http://localhost:3000/api/v3/voting/vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        candidateId: "679b0a2471ae7b0dce13b664",
      }),
      credentials: "include",
    });

    if (response.status === 400) {
      const errorData = await response.json(); // Extract error message
      alert(errorData.message || "Already voted.");
    }

    vote_modi.disabled = true;
    vote_mamta.disabled = true;
    vote_rahul.disabled = true;
    vote_modi.style.display = "none";
    vote_mamta.style.display = "none";
    vote_rahul.style.display = "none";
  } catch (error) {
    console.log(`error while voting Rahul ${error}`);
  }
}

async function onVoteMamta() {
  try {
    const response = await fetch("http://localhost:3000/api/v3/voting/vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        candidateId: "679b0a2471ae7b0dce13b663",
      }),
      credentials: "include",
    });

    if (response.status === 400) {
      const errorData = await response.json();
      alert(errorData.message || "Already voted.");
    }

    vote_modi.disabled = true;
    vote_rahul.disabled = true;
    vote_mamta.disabled = true;
    vote_rahul.style.display = "none";
    vote_modi.style.display = "none";
    vote_mamta.style.display = "none";
  } catch (error) {
    console.log(`error while voting Mamta ${error}`);
  }
}

async function logout(){
  log_out.addEventListener("click",async() => {
    const response = await fetch("http://localhost:3000/api/v3/voting/logout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      },
    )
    if(response.ok){
      alert('You have been logged out successfully.');
      window.location.href = "http://127.0.0.1:5500/Frontend/login%20page/loginPage.html";
    }
  })
}