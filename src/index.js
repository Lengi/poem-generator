function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "I hate the way talk to me, and the way you cut your hair. I hate the way you drive my car, I hate it when you stare. I hate your big dumb combat boots and the way you read my mind. I hate you so much it makes me sick, it even makes me rhyme. I hate the way you're always right. I hate it when you lie. I hate when you make laugh, even worse when you make me cry. I hate it when you're not around, and the fact that you didn't call. But mostly I hate the why I don't hate, not even close, not even a little bit, not even at all.",
    autoStart: true,
    delay: 8,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
