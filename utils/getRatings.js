const getRatings = (array) => {
  let finalRating = 0;
  array.forEach((element) => {
    finalRating += element.rating;
  });
  return finalRating / array.length || 0;
};

export default getRatings;
