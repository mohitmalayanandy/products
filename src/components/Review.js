const Review = ({ review }) => {
    return (
      <div className="p-2 bg-gray-100 rounded mt-2">
        <p>
          <strong>{review.reviewerName}:</strong> {review.comment}
        </p>
        <p className="text-sm text-gray-500">
          Rating: {review.rating}⭐ - {new Date(review.date).toLocaleDateString()}
        </p>
      </div>
    );
  };
  
  export default Review;
  