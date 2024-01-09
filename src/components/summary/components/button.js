import './button.css';

const Button = (props) => {


  return (
    <button
      className={`custom-button ${props.isSelected ? 'selected' : ''}`}
      onClick={props.onClick}
    >
      <span>{props.btnTitle} ({props.noOfItems})</span>
    </button>
  );
};

export default Button;
