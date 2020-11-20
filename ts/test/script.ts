type Dialog = {
  id?: string;
};
function closeDialog(dialog: Dialog) {
  if (!dialog.id) return;
  setTimeout(() => {
    removeFromDOM(dialog, document.getElementById(dialog.id));
  });
}

function removeFromDOM(dialog: Dialog, element: Element) {
  element.parentNode.removeChild(element);
  delete dialog.id;
}
