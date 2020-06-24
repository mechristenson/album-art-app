var appRouter = function (app) {

  app.get("/", function(req, res) {
    res.status(200).send("Welcome to our restful API");
  });

  app.get("/albums", function (req, res) {
    var data = (
      [
        {
          id: 1,
          content: {
            artists: 'Marcus Miller',
            name: 'Reniassance',
            genres: 'Jazz-funk',
            href: 'https://open.spotify.com/album/219wS6ARwdrMOCFWLpo79s?si=b0Sh1Ae4T-ibhOcLZjjvOQ',
            images: 'https://upload.wikimedia.org/wikipedia/en/1/14/Renaissance_%28Marcus_Miller_album_cover%29.jpg',
            release_date: 'May 28, 2012'
          }
        }
      ]
    );
    res.status(200).send(data);
  });

  app.get("/albums/:num", function (req, res) {
    var users = [];
    var num = req.params.num;

    if (isFinite(num) && num  > 0 ) {
      for (i = 0; i <= num-1; i++) {
        users.push({
          artists: 'Marcus Miller',
          name: 'Reniassance',
          genres: 'Jazz-funk',
          href: 'https://open.spotify.com/album/219wS6ARwdrMOCFWLpo79s?si=b0Sh1Ae4T-ibhOcLZjjvOQ',
          images: 'https://upload.wikimedia.org/wikipedia/en/1/14/Renaissance_%28Marcus_Miller_album_cover%29.jpg',
          release_date: 'May 28, 2012'
        });
     }

     res.status(200).send(users);

   } else {
     res.status(400).send({ message: 'invalid number supplied' });
   }
 });
}

module.exports = appRouter;