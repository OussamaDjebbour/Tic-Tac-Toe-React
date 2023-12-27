import Image from "./Image";

function Box({ box, i, handleClick }) {
  return (
    <div className="box" onClick={() => handleClick(i)}>
      {box ? <Image player={box} /> : ""}
    </div>
  );
}

export default Box;
