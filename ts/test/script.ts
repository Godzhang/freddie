export type Dialog = {
  id?: string;
};

export const Dialog = {
  name: 'zhangqi',
  id: 'fjdslkfj'
}

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
