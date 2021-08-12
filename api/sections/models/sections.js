const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function extractContent(s) {
  console.log(s);
  // add spacing before tag ends
  const search = "</";
  const replacer = new RegExp(search, "g");
  const formattedContent = s.replace(replacer, " </");

  // .replace(/\s\s+/g, ' ') - incase of multiple whitespaces, change them to single whitespace

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
      data.formattedContent = extractContent(data.Content);
    },
    async beforeUpdate(params, data) {
      if(data.Content)
        data.formattedContent = extractContent(data.Content);
    },
  },
};