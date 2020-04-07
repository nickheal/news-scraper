export default function getElements(body) {
  return body.querySelectorAll('*:not(script):not(style)');
}
