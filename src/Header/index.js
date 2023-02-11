import "./style.css";


const Header = ({ title, extraContent }) => (
  <header >
    <h2 className="header">
      {title}
    </h2>
    <span>
      {extraContent}
    </span>
  </header>
)
export default Header;