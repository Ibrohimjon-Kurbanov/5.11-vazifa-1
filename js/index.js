const wrapper1 = document.querySelector(".card-wrapper1");
const wrapper3 = document.querySelector(".card-wrapper3");
const wrapper4 = document.querySelector(".card-wrapper4");
const wrapper5 = document.querySelector(".card-wrapper5");
const wrap = document.querySelector(".card-wrap");

function createPost(value) {
  return `<div class="card1">
            <h3>Title: ${value.title}</h3>
            <h4>Id: ${value.id}</h4>
            <p><span>body:</span> ${value.body}</p>
          </div>`;
}

function createCommnets(value) {
  return `<div class="card">
            <h3>name: ${value.name}</h3>
            <h3>email: ${value.email}</h3>
            <h3>id: ${value.id}</h3>
          </div>`;
}

function createAlbums(value) {
  return ` <div class="card1">
            <h3>userId: ${value.userId}</h3>
            <h3>id: ${value.id}</h3>
            <p>title: ${value.title}</p>
          </div>`;
}
function createPhotos(value) {
  return `   <div class="card-img">
            <img
              class=""
              src=${value.url}
              alt=""
              height="250"
            />
            <h3>albumId: ${value.albumId}</h3>
            <p>title: ${value.title}</p>
          </div>`;
}
function createTodos(value) {
  return `      <div class="card1">
              <h3>title: ${value.title}</h3>
              <h3>id: ${value.id}</h3>
              <h3>completed: ${value.completed}</h3>
            </div>`;
}

document.addEventListener("DOMContentLoaded", function () {
  // POSTS
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  })
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
      if (response.status == 404) {
        throw new Error("API ga notogri murojat qilindi");
      }
    })
    .then((data) => {
      data.forEach((element) => {
        let card = createPost(element);
        wrapper1.innerHTML += card;
      });
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("API ga murojat tugadi");
    });
  // COMMENTS
  fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "GET",
  })
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
      if (response.status == 404) {
        throw new Error("API ga notogri murojat qilindi");
      }
    })
    .then((data) => {
      data.forEach((element) => {
        let card = createCommnets(element);
        wrap.innerHTML += card;
      });
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("API ga murojat tugadi");
    });
  // ALBUMS
  fetch("https://jsonplaceholder.typicode.com/albums", {
    method: "GET",
  })
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
      if (response.status == 404) {
        throw new Error("API ga notogri murojat qilindi");
      }
    })
    .then((data) => {
      data.forEach((element) => {
        let card = createAlbums(element);
        wrapper3.innerHTML += card;
      });
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("API ga murojat tugadi");
    });
  // PHOTOS
  fetch("https://jsonplaceholder.typicode.com/photos", {
    method: "GET",
  })
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
      if (response.status == 404) {
        throw new Error("API ga notogri murojat qilindi");
      }
    })
    .then((data) => {
      data.forEach((element) => {
        let card = createPhotos(element);
        wrapper4.innerHTML += card;
      });
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("API ga murojat tugadi");
    });
  // TODO
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET",
  })
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
      if (response.status == 404) {
        throw new Error("API ga notogri murojat qilindi");
      }
    })
    .then((data) => {
      data.forEach((element) => {
        let card = createTodos(element);
        wrapper5.innerHTML += card;
      });
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("API ga murojat tugadi");
    });
});
