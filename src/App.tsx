import { FC } from "react";
import Containter from "react-bootstrap/Container";

function App(): ReturnType<FC> {
  return (
    <div className="App">
      <Containter>
        <h1 className="mt-3">CSUN Parking Statistics by Hour</h1>
        <p>
          The data available on this website is free to use for any CSUN student
          or faculty. I don't grant permission to CSUN staff to use this data to
          build their own applications.
        </p>
        <p>
          Like this website?{" "}
          <a href="https://www.reddit.com/r/csun/comments/szcc9z/csun_parking_analytics_something_i_quickly_put/">
            Upvote it (or give feedback) on Reddit
          </a>{" "}
          and share it with your friends!
        </p>
        <p>
          <em>
            NOTE: These numbers are only as accurate as CSUN's Parking Services
            makes them.
          </em>
        </p>

        <section className="text-center mb-4">
          <p>
            <strong>
              Download the CSUN mobile app if you want near real-time statistics
              of parking availability
            </strong>
          </p>
          <a
            href="https://apps.apple.com/us/app/csun/id677332861"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="Apple App Store button."
              width="170"
              src="https://www.csun.edu/sites/default/files/appstore.png"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=edu.csun.mobile"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="Google Play store button."
              height="60"
              width="170"
              src="https://www.csun.edu/sites/default/files/playstore.png"
            />
          </a>
        </section>
      </Containter>
    </div>
  );
}

export default App;
