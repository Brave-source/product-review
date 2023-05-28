import PropTypes from 'prop-types';
function ProductReviewStats({ review }) {
  // Calculate Ratings Average
  let average =
    review.reduce((accumulator, current) => {
      return accumulator + current.rating;
    }, 0) / review.length;
  average = average.toFixed(1);
  return (
    <div className="feedback-stats">
      Product Review Stats:
      <h4>{review.length} Product Reviews: </h4>
      <h4>Average Product Rating: {isNaN(average) ? 0 : average}</h4>
     </div>
  );
}
ProductReviewStats.propTypes = {
  review: PropTypes.array.isRequired
};
export default ProductReviewStats;