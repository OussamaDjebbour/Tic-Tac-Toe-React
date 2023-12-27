function Image({ player, className = "" }) {
  return (
    <img
      className={className}
      src={`images/${player}.png`}
      alt="img not found"
    />
  );
}

export default Image;
