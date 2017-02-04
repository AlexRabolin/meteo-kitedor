(function () {
  Discourse.Markdown.whiteListTag('label', 'for', '*');
  Discourse.Markdown.whiteListTag('i', 'class', '*');
  Discourse.Markdown.whiteListTag('class', '*');
  Discourse.Markdown.whiteListTag('i', 'class', 'fa fa-*');
})();
