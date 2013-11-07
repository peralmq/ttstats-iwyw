pjs.addSuite({
    // single URL or array
    url: 'http://www.ttstats.info/room/indie_while_you_work',
    // single function or array, evaluated in the client
    scraper: function() {
        return $('.song').slice(1).map(function() {
          var title = $('.title', this).text();
          var awesomes = $('.awesomes', this).text();
          var lames = $('.lames', this).text();
          var hearts = $('.hearts', this).text();
          var listeners = $('.listeners', this).text();
          var details = $('.details', this).text();
          var foo = details.match(/On (.+), .+ by (.+)/);
          if (foo) {
            var artist = foo[2];
            var time = foo[1];
          }
          return {
            title: title,
            awesomes: awesomes,
            lames: lames,
            hearts: hearts,
            listeners: listeners,
            details: details,
            time: time,
            artist: artist
          }
        }).toArray();
    }
});
pjs.config({ 
    // // options: 'stdout', 'file' (set in config.logFile) or 'none'
    // log: 'stdout',
    // // options: 'json' or 'csv'
    // format: 'json',
    // // options: 'stdout' or 'file' (set in config.outFile)
    // writer: 'file',
    // outFile: 'ttstats.json'
});
