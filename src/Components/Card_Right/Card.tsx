import "./Style.css";

const Card_right = () => {
  return (
    <div className="Card-right">
      <h3>Monthly Subscription</h3>
      <div className="Card-price">
        <p className="Card-price-title">$29</p>
        <p className="Card-price-info">per month</p>
      </div>
      <p>Full access for less than $1 a day</p>
      <button className="btn">Sign Up</button>
    </div>
  );
};

export default Card_right;
