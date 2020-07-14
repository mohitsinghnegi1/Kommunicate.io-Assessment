const modals = require('../models/examples.server.model.js');

exports.SendProfitableMovieList = function (req, res) {
  //Assuming that we will receive a list of movies in form of JSON in below format
  const movieList = {
    data: [
      { movie_name: 'Bala', start_date: '8 Jan', end_date: '28 Jan' },
      { movie_name: 'Rock', start_date: '20 Jan', end_date: '30 Jan' },
      { movie_name: 'PolicyMaker', start_date: '29 Jan', end_date: '16 Feb' },
      { movie_name: 'Brave', start_date: '02 Feb', end_date: '14 Feb' },
      { movie_name: 'Drive', start_date: '10 Feb', end_date: '18 Feb' },
      { movie_name: 'Race', start_date: '15 Feb', end_date: '28 Feb' },
    ],
  };

  //now we have to filter this list in order to make max profit
  //we have to select movies such that no two movies overlapp and the total movies will be maximum

  const months = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
  ];

  serializeData = [];

  let sortedMovieList = movieList.data.sort((movie1, movie2) => {
    //extract date info from x movi
    movie1_date = movie1.end_date.split(' ');
    movie1_day = parseInt(movie1_date[0]);
    movie1_month = months.indexOf(movie1_date[1].toLowerCase());

    movie2_date = movie2.end_date.split(' ');
    movie2_day = parseInt(movie2_date[0]);
    movie2_month = months.indexOf(movie2_date[1].toLowerCase());

    console.log(movie1_day, movie1_month, movie2_day, movie2_month);
    return movie1_month == movie2_month
      ? movie1_day >= movie2_day
        ? 1
        : -1
      : movie1_month >= movie2_month
      ? 1
      : -1;
  });

  console.log('sorted movie list ', sortedMovieList);

  res.send('List of Movies');
};
