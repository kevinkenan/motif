function copyExcerpt() {
	var e = document.activeElement.closest("figure").querySelector("pre");
	copyCmd(e)
}

function copyCodelisting() {
	var e = document.activeElement.closest("figure").querySelector("pre code[class^='language'");
	copyCmd(e)
}

function copyCLI() {
	var e = document.activeElement.closest("figure").querySelector("pre kbd");
	copyCmd(e)
}

function copyCmd(e) {
	var range = document.createRange();
	range.selectNode(e);
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
}