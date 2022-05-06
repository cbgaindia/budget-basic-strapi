const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function extractContent(s) {
  // add spacing before tag ends
  const search = "</";
  const replacer = new RegExp(search, "g");
  const formattedContent = s.replace(replacer, " </");

  const dom = new JSDOM(`<!DOCTYPE html><span>${formattedContent}</span>`);
  const span = dom.window.document.querySelector("span")
  return (
    span.textContent.replace(/\s\s+/g, ' ') ||
    span.innerText.replace(/\s\s+/g, ' ')
  );
}

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      if (data.Content) {
        data.formattedContent = extractContent(data.Content);
        data.formattedContentHindi = extractContent(data.ContentHindi);
      }
    },
    async beforeUpdate(params, data) {
      if (data.Content) {
        data.formattedContent = extractContent(data.Content);
        data.formattedContentHindi = extractContent(data.ContentHindi);
      }
    },
  },
};