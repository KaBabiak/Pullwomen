createGUI();

function createGUI() {
  const httpMethods = ["get", "post", "put", "patch", "delete"];
  const commandList = document.createElement("select");
  commandList.id = "command";

  httpMethods.forEach((method) => {
    const option = document.createElement("option");
    option.setAttribute("value", method);
    option.appendChild(document.createTextNode(method.toUpperCase()));
    commandList.appendChild(option);
  });

  document.body.appendChild(commandList);

  const URLInput = document.createElement("input");
  URLInput.setAttribute("type", "url");
  URLInput.setAttribute("id", "url");
  document.body.appendChild(URLInput);

  const submit = document.createElement("button");
  submit.setAttribute("type", "button");
  submit.appendChild(document.createTextNode("Send"));
  document.body.appendChild(submit);

  const result = document.createElement("div");
  result.setAttribute("id", "results");
  document.body.appendChild(result);
}
