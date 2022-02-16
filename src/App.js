import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";

function App() {
  const isloggedIn = useSelector((state) => {
    return state.authentication.isauthenticated;
  });

  return (
    <>
      {isloggedIn && <Header />}
      <Auth />
      <Counter />
    </>
  );
}

export default App;
