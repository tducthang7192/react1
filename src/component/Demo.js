import React, { Component } from 'react';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state={
      id:"",
      name:"",
      tel:"",
      permisson:""
    }
  }
  
  
  isChange=(event)=>{
    const target=event.target;
    const name=target.name;
    const value=target.value;
    this.setState({
      [name]:value
     })
     var item={};
     item.id=this.state.id;
     item.name=this.state.name;
     item.tel=this.state.tel;
     item.permisson=this.state.permisson;
   

    
  }
    trangThaiForm=()=>{
        if(this.props.hienThiForm===true){
            return (
               
              <div className="col">
                <table className="table table-bordered mt-2">
          <thead>
            <tr>
              <th className="text-center">Thêm Mới User</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <form>
                <div className="form-group">
                  <input type="text" name="name" onChange={(event)=>this.isChange(event)} className="form-control" placeholder="User" aria-describedby="helpId" />
                  <input type="text" name="tel" onChange={(event)=>this.isChange(event)} className="form-control mt-2" placeholder="Điện Thoại" aria-describedby="helpId" />
                  <select className="custom-select  mb-1 mt-2"  onChange={(event)=>this.isChange(event)} name="permisson">
                    <option value>Mặc Định</option>
                    <option value={1} >Admin</option>
                    <option value={2}>Moderator</option>
                    <option value={3}>Normal</option>
                  </select>
                  <input className="btn btn-primary btn-block mt-2" onClick={()=>this.props.add(this.state.name,this.state.tel,this.state.permisson)} value="them" type="reset"></input>
                </div>
                </form>
              </td>
            </tr>
          </tbody>
        </table>  
           </div> 
              
            )
        }
        
    }
   
  render() {
    // console.log(this.state);
   
        return (
            <div>
            {this.trangThaiForm()} 
            </div>
        )
           
         

       
    }
}

export default Demo;