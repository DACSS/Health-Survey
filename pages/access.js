import { useRouter } from "next/router";

function Access() {
  const router = useRouter();

  //Get Access Token & User ID
  const query = router.asPath; //To get the query string
  var splitQuery = query.split("=");
  var accessToken = splitQuery[1];
  var userId = splitQuery[2];

  //if statement to deal with the error of empty string (dont why that is happens occasionally, maybe a machine problem.)
  if (accessToken != undefined && userId != undefined) {
    accessToken = accessToken.split("&")[0];
    userId = userId.split("&")[0];
  }

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
