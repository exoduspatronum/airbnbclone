import pic1 from "../images/photo-grid.png";
export default function Hero() {
  return (
    <hero>
      <img src={pic1} alt="pic1" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </hero>
  );
}
