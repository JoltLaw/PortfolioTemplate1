const galary = document.getElementById("galary");

const createPiece = (piece) => {
    const container = document.createElement("div");
    container.classList = "galaryContainer";
    const image = document.createElement("img");
    image.classList = "display";
    image.src = piece.src;
    const textContainer = document.createElement("div");
    const title = document.createElement("h3");
    title.classList = "artTitle";
    title.textContent = piece.title;
    const date = document.createElement("span");
    date.classList = "createdDate";
    date.textContent = piece.date;
    const textBody = document.createElement("p");
    textBody.classList = "artDis";
    textBody.textContent = piece.textBody;

    // Appending items
    textContainer.appendChild(title);
    textContainer.appendChild(date);
    textContainer.appendChild(textBody);
    container.appendChild(image);
    container.appendChild(textContainer);

    galary.appendChild(container);

}

const displays = [ {
    src: "",
    title: "Title",
    date: "DD/MM/YYYY",
    textBody: "some sort of discription of what the art piece means, why you made it, any stories behind it or any other details you'd want to share about it"
},

 {
    src: "",
    title: "Title",
    date: "DD/MM/YYYY",
    textBody: "some sort of discription of what the art piece means, why you made it, any stories behind it or any other details you'd want to share about it"
}];





displays.forEach(item => createPiece(item))