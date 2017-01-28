(function() {
  Discourse.Markdown.whiteListTag('i', 'class', '*');
  Discourse.Markdown.whiteListTag('label', 'for', '*');
  Discourse.Markdown.whiteListTag('iframe', 'src');
 
})();
