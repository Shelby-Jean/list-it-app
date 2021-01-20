import ListItLogo from '../media/List-It-Logo.png';
import '../css/Navigation.css';

const Navigation = () => {
  return (
    <div className="nav">
      <img id="main-logo" src={ListItLogo} alt="List It logo" />
    </div>
  );
}

export default Navigation;