export default function StarRating() {
  return (
    <div className="star--rating">
      <div>
        {Array.from({length: 10}, (_, i) => (
          <span key={i}>s{i + 1}</span>
        ))}
      </div>
      <p>11</p>
    </div>
  );
}
