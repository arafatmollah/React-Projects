export default function Coreconcepts(props) {
  return (
    <li>
      <img src={props.image} alt="" />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </li>
  );
}
