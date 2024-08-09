import { useParams } from "react-router-dom";

export const Room = () => {
  const { roomId } = useParams();

  return (
    <h1>Room: {roomId}</h1>
  );
}
