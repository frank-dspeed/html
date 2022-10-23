/** 
 * createOpeningHTMLTagInNewDocument
 * takes any HTMLTagName
 */
const createOpeningHTMLTagInNewDocument = (tagName="div") => {
  const doc = document.implementation.createHTMLDocument();
  doc.write(`<${tagName}>`);
  return { el: doc.body.firstChild, doc };
}

const { el, doc } = createOpeningHTMLTagInNewDocument('div')

// document.body.append(el);
doc.write("Done")
