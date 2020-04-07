/**
 * Gets the elements in a DOM that contain human-readable text
 * @param {*} body - the DOM body
 */
export default function getElements(body) {
  return body.querySelectorAll('*:not(script):not(style)');
}
