import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="link_nav">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Navbar;
