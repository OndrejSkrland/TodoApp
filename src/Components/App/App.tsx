import React from 'react';
import Browser from "../Router/Browser";
import {Body} from "../Css/TwinMacro/Main";
import {Provider} from "react-redux";
import store from "../../redux/store";

function App() {
  return (
      <Provider store={store}>
          <Body>
              <Browser />
          </Body>
      </Provider>

  );
}
export default App
