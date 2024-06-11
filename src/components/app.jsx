import React, { useEffect } from "react";
import Header from "./header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

const App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS", authUser);

      if (authUser) {
        // if authUser is true this should tell me that the user just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // it should tell me that the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/checkout"
            element={
              <Layout>
                <Checkout />
              </Layout>
            }
          />
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// import Header from "./header";
// import Home from "./Home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const App = () => {
//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//           <Route path="/">
//             <Header />
//             <Home />
//           </Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
