import Image from "next/image";

const LoadingSpinner = () => (
  <Image
    className="loading-spinner"
    alt="Loading..."
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
  />
);

export default LoadingSpinner;
