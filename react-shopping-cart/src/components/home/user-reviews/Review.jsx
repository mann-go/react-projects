function Review({ review }) {
  return (
    <div className="review">
      <div className="review-body">
        <h2>{review.name}</h2>
        <p>{review.comment}</p>
        <img className="avatar" src={review.image} alt={review.name} />
      </div>
    </div>
  );
}

export default Review;
