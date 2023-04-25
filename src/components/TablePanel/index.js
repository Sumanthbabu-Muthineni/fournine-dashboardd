import "./index.css"
import {Component} from 'react'


const panelConstants={
    pannelOne:"one",
    pannelTwo:"two",
    pannelThree:"three"
   
}

class TablePanel extends Component {

state ={panel:"one", pannelButton:"pannel-button"}

pannelOneFunc=()=>{
    this.setState({panel:"one"})
}

pannelTwoFunc=()=>{
    this.setState({panel:"two"})
}

pannelThreeFunc=()=>{
    this.setState({panel:"three"})
}

pannelOneLayer=()=><div className="pannel-content"><h1>panel-1</h1></div>

pannelTwoLayer=()=><div className="pannel-content"><h1>panel-2</h1></div>

pannelThreeLayer=()=><div className="pannel-content"><h1>panel-3</h1></div>

PanelSwitching=()=>{
 const {panel}=this.state
 switch(panel){
    case panelConstants.pannelOne:
        return this.pannelOneLayer()
    case panelConstants.pannelTwo:
        return this.pannelTwoLayer()
    case panelConstants.pannelThree:
        return this.pannelThreeLayer()
    default:
        return null
 }
}


render() {
   
    const {pannelButton}=this.state

    return (
        <div className="panel-container">
           <div >
          <button className={pannelButton} type="button" onClick={this.pannelOneFunc}  >Pannel-1</button>
          <button className={pannelButton} type="button" onClick={this.pannelTwoFunc}>Pannel-2</button>
          <button className={pannelButton} type="button" onClick={this.pannelThreeFunc}>Pannel-3</button>
           </div>
           <hr/>

   {this.PanelSwitching()}

        </div>
    )
}
}

export default TablePanel
