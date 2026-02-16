let autoInc = 0;
let totalEntries = 0;
let editorOpen = false;
const newEntryInput = document.getElementById("input");
const entriesList = document.getElementById("entries");
const count = document.getElementById("count");

function addEntry() {
  console.log();
  let input = newEntryInput.value.trim();
  if (input == "") {
    alert("Entry text cannot be empty");
  } else {
    let id = autoInc;
    autoInc += 1;
    let newEntry = document.createElement("li");
    let content = document.createElement("p");
    let edit = document.createElement("button");
    let deleteButton = document.createElement("button");
    content.innerHTML = input;
    edit.innerHTML = "Edit";
    deleteButton.innerHTML = "Delete";
    edit.addEventListener("click", () => openEditor(id));
    deleteButton.addEventListener("click", () => deleteEntry(id));
    newEntry.appendChild(content);
    newEntry.appendChild(edit);
    newEntry.appendChild(deleteButton);
    newEntry.setAttribute("id", `entry-${id}`);
    entriesList.appendChild(newEntry);
    totalEntries += 1;
    count.innerHTML = `Total Entries: ${totalEntries}`;
  }
  newEntryInput.value = "";
}

function deleteEntry(id) {
  document.getElementById(`entry-${id}`).remove();
  totalEntries -= 1;
  if (totalEntries > 0) {
    count.innerHTML = `Total Entries: ${totalEntries}`;
  } else {
    count.innerHTML = "The scroll is empty.";
  }
}

function updateEntry(id) {
  let input = document.getElementById("editor").value.trim();
  if (input == "") {
    alert("Entry text cannot be empty");
  } else {
    let entry = document.getElementById(`entry-${id}`);
    entry.innerHTML = "";
    let content = document.createElement("p");
    let edit = document.createElement("button");
    let deleteButton = document.createElement("button");
    content.innerHTML = input;
    edit.innerHTML = "Edit";
    deleteButton.innerHTML = "Delete";
    edit.addEventListener("click", () => openEditor(id));
    deleteButton.addEventListener("click", () => deleteEntry(id));

    entry.appendChild(content);
    entry.appendChild(edit);
    entry.appendChild(deleteButton);
    editorOpen = false;
  }
}

function openEditor(id) {
  if (editorOpen) {
    alert("You can only edit one entry at a time.");
  } else {
    let entry = document.getElementById(`entry-${id}`);
    entry.innerHTML = "";
    let textInput = document.createElement("input");
    textInput.setAttribute("type", "text");
    textInput.setAttribute("id", "editor");
    textInput.setAttribute("name", "editor");
    let save = document.createElement("button");
    save.innerHTML = "Save Changes";
    save.addEventListener("click", () => updateEntry(id));
    entry.appendChild(textInput);
    entry.appendChild(save);
    editorOpen = true;
  }
}
