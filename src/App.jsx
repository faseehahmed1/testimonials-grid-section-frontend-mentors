import clsx from "clsx";
import classes from "./App.module.css";
import DATA from "./DATA.js";

function App() {
  return (
    <div className={classes.container}>
      {DATA.map((person, index) => {
        const cardClass = clsx([classes.card], {
          [classes.grid_span_2]: person.span,
          [classes.grid_span_row_2]: person.spanRow,
          [classes.gray]: person.background === "grey",
          [classes.white]: person.background === "white",
          [classes.darkgrey]: person.background === "darkgrey",
        });

        const headingClass = clsx([classes.heading], {
          [classes.heading_white]: person.background === "white",
        });

        const nameClass = clsx({
          [classes.name_white]: person.background === "white",
        });

        const roleClass = clsx({
          [classes.role_white]: person.background === "white",
        });
        return (
          <div key={index} className={cardClass}>
            <div className={classes.profile}>
              <img
                className={classes.picture}
                src={person.image}
                alt={`profile pic of daniel`}
              />
              <div className={classes.profile_info}>
                <h3 className={nameClass}>{person.name}</h3>
                <h4 className={roleClass}>Verified Graduate</h4>
              </div>
            </div>
            <h1 className={headingClass}>{person.heading}</h1>
            <h2 className={nameClass}>" {person.description} "</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
