// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

  const directorNames = moviesArray.map(function (element) {
     return element.director;  });

    // const directorNames = moviesArray.map((element) => element.director);

     return directorNames;
      }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const spielbergMov = moviesArray.filter((element) =>
    element.director === "Steven Spielberg" &&
    element.genre.includes("Drama"));
  
    return spielbergMov.length;
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    const total = moviesArray.map(function (element) {
      return element.score;  });
  
      const reduzido = total.reduce(function (valorAnterior, quemSoma) {
        return valorAnterior + quemSoma});
  
    return resultado =  (reduzido / moviesArray.length).toFixed(2);  
  
    }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



