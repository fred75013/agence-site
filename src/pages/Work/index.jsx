import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cases from "data/case";

const Work = () => {
  return (
    <>
      <h1> Au fil des années, nous avons pu accompagner les meilleurs.</h1>
      <p>
        Découvrez pas à pas comment nous avons été présent pour lancer vos
        marques préférées.
      </p>

      <div>
        {Cases.map((x) => {
          return (
            <div>
              <Link to={"/work/" + x.slug}>{x.title}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Work;
