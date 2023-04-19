import React from "react";
import { Provider } from "react-redux";
import store from "./store";
// import Search from "./features/flights/components/search/Search";
import Footer from "./features/flights/components/footer/Footer";
import Header from "./features/flights/components/header/Header";

const App = () => (
  <Provider store={store}>
    <Header />
    {/* <div className="search-flights">
      <Search />
    </div> */}

    {/* <Footer /> */}
  </Provider>
);

export default App;
