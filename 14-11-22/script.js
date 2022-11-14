const postIdEl = document.getElementById("post_id");
const postTitleEl = document.getElementById("post_title");
const postBodyEl = document.getElementById("post_body");
const btnPrev = document.getElementById("prev_btn");
const btnNext = document.getElementById("next_btn");

let i = 1;
const url = `https://jsonplaceholder.typicode.com/posts`;

// button events
btnPrev.addEventListener("click", (e) => {
  i--;
  getPost();
});

btnNext.addEventListener("click", (e) => {
  i++;

  getPost();
});

const getPost = () => {
  const loadingEl = document.querySelector(".loading");

  fetch(`${url}/${i}`, { cache: "no-cache" })
    .then((res) => res.json())
    .then((res) => {
      postIdEl.textContent = res.id;
      postTitleEl.textContent = res.title;
      postBodyEl.textContent = res.body;

      if (i <= 1) {
        btnPrev.disabled = true;
        btnPrev.classList.add("disabled");
      } else {
        btnPrev.disabled = false;
        btnPrev.classList.remove("disabled");
      }

      if (i >= 10) {
        btnNext.disabled = true;
        btnNext.classList.add("disabled");
      } else {
        btnNext.disabled = false;
        btnNext.classList.remove("disabled");
      }
    })
    .catch((error) => console.log("Error:" + error))
    .finally(() => {
      loadingEl.classList.remove("active");
    });
};

const myTimeout = setTimeout(getPost, 5000);
