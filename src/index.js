import React from 'react';
import ReactDOM from 'react-dom';
import Data from './json/itemdata.json';
import './styles/index.css';

var ItemList = Data.itemlist;
var tds = document.querySelectorAll("table.table tr:not(.top-row) > td:last-child");
class Home extends React.Component{
  constructor(props) {
    super(props);

    this.state={
      selectedFruits:[],
      nfq:[],
      Mango:0,
      Apple:0,
      Grapes:0,
      display:"none",
      cost:0
    }
}
bill(){

}
price(){
  let no_items=this.state.selectedFruits.length;
  let total=0;
for(var i=0;i<no_items;i++){
  total=total+(this.state[this.state.selectedFruits[i]]*this.state.nfq[i]);
}
this.setState({
  cost:total
})
}
itemChange(e1){

this.setState({
  selectedFruits:this.state.selectedFruits.concat(e1.target.value),
  cost:0
})
}
qtyChange(e2){
  this.setState({
    nfq:this.state.nfq.concat(e2.target.value),
    display:"block",
    cost:0
  })
}
componentDidMount(){
  {ItemList.filter(item => item.fruit == "Mango").map((filteredPrice,i) => {
    this.setState({Mango:filteredPrice.price})
        })}
        {ItemList.filter(item => item.fruit == "Apple").map((filteredPrice,i) => {
          this.setState({Apple:filteredPrice.price})
              })}
              {ItemList.filter(item => item.fruit == "Grapes").map((filteredPrice,i) => {
                this.setState({Grapes:filteredPrice.price})
                    })}
}
  render(){
    return(
      <div className="container">
        <div className="d-flex justify-content-center">
      <select className="custom-select mt-5 mx-2 w-50  text-center" id="cryptoname" onChange={this.itemChange.bind(this)}>
        <option value="Select the item">Select the item</option>
    {
    ItemList.map((item) =>{
      return(
        <option value={item.fruit}>{item.fruit}</option>
      );
    }
    )}
  </select>
  <input className="mt-5 mx-2 text-center" type="number" placeholder="No. of Qty" onChange={this.qtyChange.bind(this)}/>
  <button className=" mt-5 cost mx-2 btn btn-success" onClick={this.price.bind(this)}>Cost Of Items</button>
  </div>
  <div style={{display:this.state.display}}>
  <table className="table tabledata m-5" >
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Item</th>
      <th scope="col">Qty</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
  {this.state.selectedFruits.map((item,i)=>{
    return(
<tr>
  <th scope="row">{i+1}</th>
  <td>{item}</td>
  <td>{this.state.nfq[i]}</td>
  <td>{this.state.nfq[i]*this.state[item]}</td>
</tr>
    );
  }
  )}
  <tr>
    <td className="text-right pr-5" colSpan="3"><h6>Total</h6></td>
    <td><h6>{this.state.cost}</h6></td>
  </tr>
  </tbody>
  </table>
  </div>
    </div>
    )
  } 
}
ReactDOM.render(<Home/>, document.getElementById('root'));