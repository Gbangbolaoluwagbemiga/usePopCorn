const containerSyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
};
const starStyle = {
  display: 'flex',
  gap: '0.25rem',
};
const textStyle = {
  lineHeight: '1',
  margin: '0',
};

export default function StarRating({maxRating}) {
  return (
    <div style={containerSyle}>
      <div style={starStyle}>
        {Array.from({length: maxRating}, (_, i) => (
          <span key={i}>s{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>11</p>
    </div>
  );
}
