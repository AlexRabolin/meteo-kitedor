(function () {
  
  Discourse.Markdown.whiteListTag('label', 'for', '*');
  Discourse.Markdown.whiteListTag('class', '*');
  Discourse.Markdown.whiteListTag('img','style', '*');
  
})();

(function() {
  if (Discourse.dialect_deprecated) { return; }

  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.meteoblue\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.windfinder\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.windguru\.cz\/.+/i);

})();
