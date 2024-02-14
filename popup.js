document.addEventListener("DOMContentLoaded", function () {
    const getDogButton = document.getElementById("getDogButton");
    const dogImage = document.getElementById("dogImage");
  
    getDogButton.addEventListener("click", () => {
      fetch("https://random.dog/woof.json")
        .then((response) => response.json())
        .then((data) => {
          if (data.url.endsWith(".mp4")) {
           
            return getDog();
          }
          dogImage.src = data.url;
        })
        .catch((error) => console.error("Error fetching dog image:", error));
    });
  });
  