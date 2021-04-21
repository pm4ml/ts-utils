function copyToClipboard(content: string): void {
  const element = document.createElement('input');
  element.value = content;
  document.body.appendChild(element);
  element.focus();
  element.select();
  document.execCommand('copy');
  document.body.removeChild(element);
}

export default copyToClipboard;
