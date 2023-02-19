import "./style.css";


const Header = ({ title, date }) => (
  <header>
    <h2 className="header">
      {title}
    </h2>
    <h3>{date}</h3>
  </header>
);

export default Header;