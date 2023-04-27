import "./card.styles.css";

const Card = ({ monster }) => {
  const { name, email, id, gender, race, status } = monster;
  return (
    <div className="card-container" key={id}>
    <p>{id}</p>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set1&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{gender}</p>
      <p>{race}</p>
      <p>{status}</p>
      <p>{email}</p>
    </div>
  );
};

export default Card;
