let scriptSourcePath = "/js/next/support.js";
let scriptAsyncLoad = true; // Change to false if you do not want to defer loading

function createScriptElement(source, defer) {
  let scriptElement = document.createElement("script");
  scriptElement.src = source;
  if (defer) scriptElement.defer = true;
  document.head.appendChild(scriptElement);
}

createScriptElement(scriptSourcePath, scriptAsyncLoad);
