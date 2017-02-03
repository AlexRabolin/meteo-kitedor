(function() {
  
  if (Discourse.dialect_deprecated) { return; }

  Discourse.Markdown.whiteListTag('label', 'for', '*');
  Discourse.Markdown.whiteListTag('i', 'class', '*');

})();
