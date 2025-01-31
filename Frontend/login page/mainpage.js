const vote_modi = document.getElementById("Narendra-modi");
const vote_rahul = document.getElementById("Rahul-gandhi");
const vote_mamta = document.getElementById("Mamta-banerjee");

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
