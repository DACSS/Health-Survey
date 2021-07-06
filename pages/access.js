import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";

function Access() {
  const [heartData, setHeartData] = useState();
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  // Get Access Token & User ID
  const query = router.asPath; //To get the query string
  var splitQuery = query.split("=");
  var accessToken = splitQuery[1];
  var userId = splitQuery[2];

  // if statement to deal with the error of empty string (dont why that is happens occasionally, maybe a machine problem.)
  if (accessToken != undefined && userId != undefined) {
    accessToken = accessToken.split("&")[0];
    userId = userId.split("&")[0];
  }

  // Fetch data from Fitbit API using the accessToken & the userId
  useEffect(async () => {
    // Link for intraday for personal
    // "https://api.fitbit.com/1/user/-/activities/heart/date/today/1d.json",
    // https://api.fitbit.com/1/user/-/activities/heart/date/today/1d/1sec
    const response = await axios
      .get(
        "https://api.fitbit.com/1/user/" +
          userId +
          "/activities/heart/date/today/1d/1sec.json",
        { headers: { Authorization: "Bearer " + accessToken } }
      )
      .then(res => {
        return res.data;
      })
      .catch(error => {
        console.log("error " + error);
      });
    setHeartData(response);
    setLoading(false);
    console.log("Heartrate Data :", response["activities-heart-intraday"]);
  }, []);

  // console.log(splitQuery);
  // console.log(accessToken);
  // console.log(userId);

  return (
    <center>
      {loading ? (
        <div>
          <h1 className="text-4xl p-3">Loading...</h1>
        </div>
      ) : heartData ? (
        <div>
          <h1 className="text-4xl p-3">Access Successful</h1>
          <p>Thank you for your time!</p>
        </div>
      ) : (
        <div>
          <h1 className="text-4xl p-3">Access Unsuccessful</h1>
          <p>We were not able to fetch your data. Please try again!</p>
        </div>
      )}
    </center>
  );
}

export default Access;
