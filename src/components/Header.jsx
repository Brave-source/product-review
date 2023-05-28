import PropTypes from 'prop-types';

function Header({ text, bgColor, textColor }) {
const headerStyles = {
  backgroundColor: bgColor,
  color: textColor
};
return (
<header style={headerStyles}>
    <div className="container">
    <h2>Global Collaboration Rating and Review System</h2>
   </div>
 </header>
 );
}
Header.defaultProps = {
  text: 'Product Review',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#6aff80'
};
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
};
export default Header;