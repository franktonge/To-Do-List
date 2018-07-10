var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var le = ul.getElementsByTagName("li");
var close = document.getElementsByClassName("close");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	console.log("createListElement: " + input.value);
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var l = le.length - 1;
	addCloseButton(l);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		console.log("adding to list at position " + inputLength()- 1 + " after click.")
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		console.log("adding to list at position " + inputLength() - 1 + " after Enter.")
		createListElement();
	}
}

function addCloseButton(i) {
	var clsbutton = document.createElement("button");
    var txt = document.createTextNode("\u00D7");
    clsbutton.className = "close";
    clsbutton.appendChild(txt);
    le[i].appendChild(clsbutton);
    clsbutton.onclick = removeParent;
    console.log("Added close button at " + i);
}

// Create a "close" button and append it to each list item
for (var i = 0; i < le.length; i++) {
    addCloseButton(i);
}

function removeParent(ev) {
    console.log("removeParent: close element");

	ev.target.removeEventListener("click", removeParent, false);

	ev.target.parentNode.remove();

}

function crossItem(ev) {
    ev.target.classList.toggle('checked');
}

ul.addEventListener("click", crossItem, false);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
