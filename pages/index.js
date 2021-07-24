import React, { Component } from 'react';
import {getUsers, app} from '../firebase';

class UserPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      orders: [],
    }
  }

  changeOrderStatus(orderid){
    
    var db = app.firestore();
    console.log(orderid);
    
    db.collection("orders").doc(orderid).update({"state": 1});
    
  }

  componentDidMount(){
    getUsers().then(doc => {
      console.log('componentDidMount', 'Data Received');
      this.setState({ orders: doc });
    })
  }
  render(){
    const { orders } = this.state
    return (
      <div>
        <h1>Orders</h1>
        <hr />
        <table>
          <thead></thead>
          <tbody>
            { orders.map ((order, i ) => {
              return(
                <tr key={i} onClick={e => this.changeOrderStatus(order.id)}>
                  <td>{ order.id }</td>
                  <td>{ order.name }</td>
                  <td>{ order.orderamount }</td>
                  <td>{ order.state }</td>
                </tr>
               )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default UserPage;