import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/landingPage";
import TanamshrmolisInfo from "./components/tanamshrmolisInfo";
import Sia from "./components/sia/.";
import LeptopisMaxasiatebeli from "./components/leptopisMaxasiatebeli";
import SinglePost from "./components/singlePost";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tanamshromeliInfo" element={<TanamshrmolisInfo />} />
        <Route path="/sia" element={<Sia />} />
        <Route
          path="/leptopis-maxasiateblebi"
          element={<LeptopisMaxasiatebeli />}
        />
        <Route path="/SinglePost" element={<SinglePost />} />
      </Routes>
    </Router>
  );
}

export default App;
