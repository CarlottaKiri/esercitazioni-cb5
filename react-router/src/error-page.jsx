import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1> Oh no!</h1>
      <h3>An error has occurred!</h3>
      <h3>
        Click here to go back to our <Link to="/">Homepage</Link>
      </h3>

      <i>Error's detail: "{error.statusText || error.message}"</i>
    </div>
  );
}
