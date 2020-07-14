const modals = require('../models/examples.server.model.js');

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

  //   now we have to filter this list in order to make max profit
  //   we have to select movies such that no two movies overlapp and the total movies will be maximum

  //   This sort function will sort movies based on end date
  //   If two movie end date have same month then it will compare the day . The movie which is having less day value will come before other
  //   If two movie have different month then month with lesser value/index will come before other movie

  let sortedMovieList = movieList.data.sort((movie1, movie2) => {
    //   extract date info from movie1
    movie1_date = movie1.end_date.split(' ');
    movie1_day = parseInt(movie1_date[0]);
    movie1_month = months.indexOf(movie1_date[1].toLowerCase());

    //   extract date info from movie2
    movie2_date = movie2.end_date.split(' ');
    movie2_day = parseInt(movie2_date[0]);
    movie2_month = months.indexOf(movie2_date[1].toLowerCase());

    console.log(movie1_day, movie1_month, movie2_day, movie2_month);

    //   comparator logic - explained above
    return movie1_month == movie2_month
      ? movie1_day >= movie2_day
        ? 1
        : -1
      : movie1_month >= movie2_month
      ? 1
      : -1;
  });

  //   console.log('sorted movie list ', sortedMovieList);

  //    Remove All the overlapping movie since Movies have a contract where the actor is not allowed to work
  //    on other movies whose date conflicts with the selected movies date

  const profitable_movies = [];
  //    last_month will hold the value of end month of last movie that is inserted in result profitable_movies array (by default value is set to -1)
  //    last day will hold the end day value of last date movie inserted in result profitable_movies array (by default value is set to  -1)
  let last_month = -1,
    last_day = -1;

  sortedMovieList.forEach((movie) => {
    //   extract date info from current movie start date
    start_date = movie.start_date.split(' ');
    start_day = parseInt(start_date[0]);
    start_month = months.indexOf(start_date[1].toLowerCase());

    //   extract date info from current movie end date
    end_date = movie.end_date.split(' ');
    end_day = parseInt(end_date[0]);
    end_month = months.indexOf(end_date[1].toLowerCase());

    //  we need to push a movie into profitable movie list in the following cases
    //      1)  if last inserted movie's month is less then current movie's start month
    //      2)  if months are same and last day inserted is less then current movie start day

    if (
      last_month < start_month ||
      (last_month == start_month && last_day < start_day)
    ) {
      profitable_movies.push(movie);

      //update last_day and last_month as end date of a inserted movie
      last_day = end_day;
      last_month = end_month;
    }

    //  in case last_month>cur_month then dont push
    //  in case month are same and last day > cur day then also dont push
  });

  console.log('Profitable Movies ', profitable_movies);

  const response = {
    error: false,
    data: profitable_movies,
    profit: profitable_movies.length,
    message: `Max Profit : ${profitable_movies.length} Crore`,
  };

  // return a response with 200 status code
  res.status(200).send(response);
};
