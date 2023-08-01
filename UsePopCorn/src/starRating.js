const containerSyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
};
const starStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
};

export default function StarRating() {
  return (
    <div style={containerSyle}>
      <div style={starStyle}>
        {Array.from({length: 10}, (_, i) => (
          <span key={i}>s{i + 1}</span>
        ))}
      </div>
      <p>11</p>
    </div>
  );
}
