export default function getSentences(elements) {
  return [...elements].map((element) => {
    if (!element.childNodes) return;
    return [...element.childNodes].reduce((acc, node) => {
      /**
       * node type 3 is a text node
       */
      if (node.nodeType === 3) {
        return `${acc}${node.textContent}`;
      }
      return acc;
    }, '');
  }).filter(_ => !!_);
}
