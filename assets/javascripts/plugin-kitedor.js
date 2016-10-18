(function() {
  Discourse.Markdown.whiteListTag('label', 'for', '*');
  Discourse.Markdown.whiteListTag('span', 'class', '*');
  Discourse.Markdown.whiteListTag('iframe', 'src', 'https://www.meteoblue.com/fr/meteo/widget/daily/*');
  Discourse.Markdown.whiteListTag('iframe', 'src', 'http://www.windguru.cz/fr/*');
  Discourse.Markdown.whiteListTag('iframe', 'src', 'https://beta.windguru.cz/*'); 
  Discourse.Markdown.whiteListTag('iframe', 'src', 'https://embed.windytv.com/*'); 
})();
