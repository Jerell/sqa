export default function Chat({ history }) {
  return (
    <>
      {history.map((line) => (
        <p>{line}</p>
      ))}
    </>
  );
}
