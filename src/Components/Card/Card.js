import { Component } from 'react';
import "./Card.css";
class Card extends Component{
  render() {
    return <><div className="card-header">
      <h4 className="my-0 font-weight-normal">Free</h4>
      </div><div className="card-body">
        <h1 className="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
        <ul className="list-unstyled mt-3 mb-4 text-success">
          <li>10 users included</li>
          <li>2 GB of storage</li>
          <li>Email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
      </div></>
}
}

export default Card;