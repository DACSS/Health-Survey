export default function Home() {
  const authUrl =
    "https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=23B8TB&redirect_uri=https%3A%2F%2Fdacss.github.io%2FHealth-Survey%2Faccess&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800";

  return (
    <center>
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl p-3">Health Survey</h1>
        <div className="w-23 justify-center p-3">
          <a
            style={{ display: "table-cell" }}
            href={authUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <code>Authorize</code>
            </div>
          </a>
        </div>
      </div>
    </center>
  );
}
