import "./style.css";

const Header = ({ title, date }) => (
  <header>
    <span className="clockContent">
      Dzisiaj jest&nbsp;
      {date.toLocaleString("pl-PL",
        {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        }
      )}
    </span>
    <h2 className="header">
      {title}
    </h2>
  </header>
);

export default Header;