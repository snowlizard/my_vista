import { useSelector } from "react-redux";
import { Bootloader } from "./components/bootloader";
import { Desktop } from "./components/desktop";

export const App = () => {
  const bootState = useSelector((state: any) => state.boot);

  return (
    <div>
      { bootState.value ? <Desktop /> : <Bootloader /> }
    </div>
  );
}
