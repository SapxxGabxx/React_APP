import Navbar from "./components/Navbar/Navbar";
import { useOutlet } from "react-router-dom";

export default function () {
  const outlet = useOutlet();

  return (
    <div>
      <Navbar></Navbar>
      {outlet}
    </div>
  );
}
