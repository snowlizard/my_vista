import { useSelector } from "react-redux";
import { Bootloader } from "./components/bootloader";
import { Login } from "./components/login";

export const App = () => {
  const bootState = useSelector((state: any) => state);

  return (
    <div>
    {
      bootState.value ? <Login /> : <Bootloader />
    }
    </div>
  );
}
