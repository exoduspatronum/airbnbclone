import star from "../images/star.png";
export default function Card(P) {
  let badgeText;
  let badgevalue = 0;
  if (P.items.openSpots === 0) {
    badgeText = "SOLD OUT";
    badgevalue = 1;
  } else if (P.items.location === "Online") {
    badgeText = "ONLINE";
    badgevalue = 1;
  }
  console.log(badgeText);
  return (
    <div className="card">
      <img src={P.items.IMG} alt="" />
      {(badgevalue = 1 && <div className="cardbadge">{badgeText}</div>)}
      <div className="cardstats">
        <img src={star} alt="" />
        <span>{P.items.stats.rating}</span>
        <span>({P.items.stats.reviewCount}) • </span>
        <span>{P.items.location}</span>
      </div>
      <p>{P.items.title}</p>
      <p>From {P.items.price} / person</p>
    </div>
  );
}
