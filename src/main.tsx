import AppContainer from "./container";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<AppContainer />);
