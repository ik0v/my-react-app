import profileIK from "./assets/IK_profile.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profileIK} alt="ik profile" />
      <h2 className="card-title">I K</h2>
      <p className="card-text">Doing SALT bootcamp now</p>
    </div>
  );
}

export default Card;
