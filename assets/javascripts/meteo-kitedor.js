(function() {
  Discourse.Markdown.whiteListTag('script', 'src', 'https://fr.windfinder.com/widget/forecast/js/*');
  Discourse.Markdown.whiteListTag('iframe', 'src', 'https://www.meteoblue.com/fr/meteo/widget/daily/*');
  Discourse.Markdown.whiteListTag('iframe', 'src', 'http://www.windguru.cz/fr/*');
  Discourse.Markdown.whiteListTag('iframe', 'src', 'https://beta.windguru.cz/*'); 
  Discourse.Markdown.whiteListTag('iframe', 'src', 'https://embed.windytv.com/*'); 
})();
