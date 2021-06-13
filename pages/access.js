import { useRouter } from "next/router";
import axios from "axios";

function Access() {
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
  axios
    .get(
      "https://api.fitbit.com/1/user/" +
        userId +
        "/activities/heart/date/today/1w.json",
      { headers: { Authorization: "Bearer " + accessToken } }
    )
    .then(res => {
      const heartData = res.data;
      console.log(heartData);
    })
    .catch(error => {
      console.log("error " + error);
    });

  console.log(splitQuery);
  console.log(accessToken);
  console.log(userId);
  return (
    <div>
      <h1>Access</h1>
    </div>
  );
}

export default Access;
