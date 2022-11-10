// const declaration

const btn = document.getElementById("button");
const adviceEl = document.getElementById("advicemsg");
const adviceIdEl = document.getElementById("adviceid");
const urlAdvice = "https://api.adviceslip.com/advice";

/**
 * Get data from the end point
 *
 * @param {string} url
 */

const getAdvice = (URL) => {
  const loadingEl = document.querySelector(".loading");
  fetch(URL, { cache: "no-cache" })
    .then((res) => res.json())
    .then((res) => {
      adviceEl.textContent = '"' + res.slip.advice + '"';
      adviceIdEl.textContent = "ADVICE #" + res.slip.id;
    })
    .catch((error) => console.log("Error:" + error))
    .finally(() => {
      loadingEl.classList.remove("active");
    });
};

// button event creation

btn.addEventListener("click", () => {
  getAdvice(urlAdvice);
});

const myTimeout = setTimeout(() => getAdvice(urlAdvice), 5000);
