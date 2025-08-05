import { useSelector } from "react-redux";
import { Bootloader } from "./components/bootloader";
import { Desktop } from "./components/desktop";
import { Taskbar } from "./components/taskbar";

export const App = () => {
  const bootState = useSelector((state: any) => state.boot);

  const OS = () => (
    <div className="os">
      <Desktop />
      <Taskbar />
    </div>
  );

  return (
    <div>
      { bootState.value ? <OS /> : <Bootloader /> }
    </div>
  );
}
