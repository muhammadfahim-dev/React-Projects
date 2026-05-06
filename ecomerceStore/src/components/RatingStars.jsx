import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function StarRating({ rating }) {
  return (
    <div className="text-yellow-500 flex w-15">
      {[...Array(5)].map((_, i) => {
        if (rating >= i + 1) return <FaStar key={i} />;
        if (rating >= i + 0.5) return <FaStarHalfAlt key={i} />;
        return <FaRegStar key={i} />;
      })}
    </div>
  );
}

export default StarRating;
