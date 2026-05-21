import { Link, useLocation } from "react-router-dom";

function NotFound() {

  const location = useLocation();

  return (
    <div className="page">

      <h1>404 - Page Not Found</h1>

      <p>
        Invalid URL:
        <strong> {location.pathname}</strong>
      </p>

      <Link to="/">
        <button>Go Back Home</button>
      </Link>
    </div>
  );
}

export default NotFound;