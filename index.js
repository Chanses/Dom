document.body.style.fontFamily = "Impact,Charcoal,sans-serif";
// header
const header = document.createElement("div");
header.style.padding = "20px";
header.style.marginBottom = "20px";
header.style.textAlign = "center";
header.style.backgroundColor = "#E6C155";
document.body.append(header);

//header_text
const headerText = document.createElement("h1");
headerText.textContent = "Wake the f**k up, Samurai";
header.appendChild(headerText);

//header_input

const addLink = document.createElement("input");
addLink.setAttribute("placeholder", "Enter your link:");
addLink.style.marginRight = "20px";
addLink.style.width = "300px";
addLink.style.height = "30px";
header.appendChild(addLink);

const submit = document.createElement("button");
submit.textContent = "Submit";
submit.style.height = "30px";
header.appendChild(submit);

//list
const itemsList = document.createElement("div");
submit.addEventListener("click", createItem);
document.body.append(itemsList);

function createItem() {
  const item = document.createElement("div");
  item.style.marginBottom = "20px";
  item.style.paddingLeft = "25px";
  itemsList.appendChild(item);

  const itemText = document.createElement("a");
  if (addLink.value == "") {
    return alert("Type something");
  }
  itemText.textContent = addLink.value;
  itemText.setAttribute("href", addLink.value);
  itemText.style.marginRight = "5px";
  itemText.style.fontSize = "20px";
  itemText.style.textDecoration = "none";
  itemText.style.color = "#000";
  item.appendChild(itemText);

  const itemRemoveButton = document.createElement("button");
  itemRemoveButton.textContent = "Remove";
  item.appendChild(itemRemoveButton);

  itemRemoveButton.addEventListener("click", () => itemsList.removeChild(item));
}

// tracking
const trackList = document.createElement("div");
document.body.append(trackList);

function getTrack() {
  const trackItem = document.createElement("div");
  trackItem.style.marginBottom = "20px";
  trackItem.style.paddingLeft = "25px";
  trackItem.style.border = "1px, black";
  trackList.appendChild(trackItem);

  const trackItemName = document.createElement("div");
  const trackItemDate = document.createElement("div");
  const trackItemPath = document.createElement("div");

  const getPath = (element, chain = "") => {
    if (!chain) chain = element.tagName.toLowerCase();
    const parent = element.parentNode;
    const parentName = parent.tagName.toLowerCase();

    if (parentName === "html") return parentName + " > " + chain;
    else return getPath(parent, parentName + " > " + chain);
  };

  trackItem.appendChild(trackItemName, trackItemDate, trackItemPath);

  trackItemName = Element.value;
  trackItemDate = new Date();
  trackItemPath = getPath;
}
