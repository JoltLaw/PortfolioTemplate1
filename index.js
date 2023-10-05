const gallery = document.getElementById("gallery");

function createPiece(piece) {

  // creating the primary title
  const container = document.createElement("div");
  container.classList.add("galleryContainer");

  // creating the image
  const image = document.createElement("img");
  image.classList.add("display");
  image.src = piece.src;

  // creating a container for all text elements
  const textContainer = document.createElement("div");

  // creating the title
  const title = document.createElement("h3");
  title.classList.add("artTitle");
  title.textContent = piece.title;

  // creating the date object
  const date = document.createElement("span");
  date.classList.add("createdDate");
  date.textContent = piece.date;

  // creating the discription
  const textBody = document.createElement("p");
  textBody.classList.add("artDis");
  textBody.textContent = piece.textBody;

  // Appending items
  textContainer.appendChild(title);
  textContainer.appendChild(date);
  textContainer.appendChild(textBody);

  container.appendChild(image);
  container.appendChild(textContainer);

  gallery.appendChild(container);
}

const displays = [
  {
    src: "",
    title: "Title",
    date: "DD/MM/YYYY",
    textBody: "some sort of description of what the art piece means, why you made it, any stories behind it or any other details you'd want to share about it"
  },
  {
    src: "",
    title: "Title",
    date: "DD/MM/YYYY",
    textBody: "some sort of description of what the art piece means, why you made it, any stories behind it or any other details you'd want to share about it"
  }
];

displays.forEach(item => createPiece(item));