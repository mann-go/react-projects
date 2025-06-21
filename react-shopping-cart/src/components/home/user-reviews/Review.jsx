function Review({ review }) {
  return (
    <div className="review">
      <img className="avatar" src={review.image} alt={review.name} />
      <div className="review-body">
        <h2>{review.name}</h2>
        <p>{review.comment}</p>
      </div>
    </div>
  );
}

export default Review;
