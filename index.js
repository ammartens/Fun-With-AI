function get_response() {
  let prompt = document.getElementById("prompt");
  const data = {
    prompt: prompt.value,
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer thisisasecret :D`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((gptResponse) => display_response(data.prompt, gptResponse));
}

function display_response(prompt, gptResponse) {
  document.getElementById("noresponses")?.remove();
  var li = getLi();
  var promptH3 = getH3("prompt:");
  var promptP = getP(prompt);
  var responseH3 = getH3("response:");
  var responseP = getP(gptResponse.choices[0].text);

  li.appendChild(promptH3);
  li.appendChild(promptP);
  li.appendChild(responseH3);
  li.appendChild(responseP);

  let responses = document.getElementById("responses");
  responses.insertBefore(li, responses.firstChild);
}

function getLi() {
  var li = document.createElement("li");
  //container rounded-md shadow-sm bg-stone-100 p-4 my-2
  li.classList.add("container");
  li.classList.add("rounded-md");
  li.classList.add("shadow-sm");
  li.classList.add("bg-stone-100");
  li.classList.add("p-4");
  li.classList.add("my-2");
  return li;
}

function getH3(text) {
  var h3 = document.createElement("h3");
  //font-bold mb-1
  h3.classList.add("font-bold");
  h3.classList.add("mb-1");
  h3.innerText = text;
  return h3;
}

function getP(text) {
  var p = document.createElement("p");
  //container text-sm
  p.classList.add("container");
  p.classList.add("text-sm");
  p.innerText = text.trim();
  return p;
}

(function (window, document, undefined) {
  // code that should be taken care of right away

  window.onload = init;

  function init() {
    document
      .getElementById("submit-btn")
      .addEventListener("click", get_response);
  }
})(window, document, undefined);
