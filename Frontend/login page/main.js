const form = document.getElementById('form');
form.addEventListener('submit', async(event,req,res) => {
          event.preventDefault();
          try {
                    const url = ""
                    const response = await fetch(url);
                    if(response.ok){
                              alert('click here to proceed.');
                              console.log("User exists in the database.");
                              window.location.href = "https://www.google.com";
                    }
          } catch (error) {
                    console.log(error.message);
          }
})