import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutLinkLink from "./components/AboutLinkLink";
// import PostParams from "./components/PostParams";
import Post from "./components/Post";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />

            {/* <Route path="/post/:name/:phrase" element={<PostParams />}/> */}

            <Route path="/post/*" element={<Post />} />
          </Routes>

          <AboutLinkLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
