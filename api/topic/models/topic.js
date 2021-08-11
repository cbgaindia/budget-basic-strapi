const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function extractContent(s) {
  // add spacing before tag ends
  const search = "</";
  const replacer = new RegExp(search, "g");
  formattedContent = s.replace(replacer, " </");

  const dom = new JSDOM(`<!DOCTYPE html><span>${formattedContent}</span>`);
  return (
    dom.window.document.querySelector("span").textContent ||
    dom.window.document.querySelector("span").innerText
  );
}

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      data.formattedContent = extractContent(data.Content);
    },
  },
};
