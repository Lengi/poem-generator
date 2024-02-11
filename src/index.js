function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 8,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let submissionInput = document.querySelector("#user-submission");
  let apiKey = "22f8da0004607a380oa863e4bc7fdtdd";
  let prompt = `Generate a poem about ${submissionInput.value}`;
  let context =
    "You are a poem expert, from classic poems to poems from 21st century movies. The length of the poem doesn't matter but make sure to only generate one at a time. Please mention the author/poet of the poem at the end of the poem, and if the poem is from a movie or a TV-series, mention which movies/TV-series the poem comes from at the end of the poem. Your mission is to generate a poem in basic HTML.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">Generating a poem about ${submissionInput.value}</div>`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
