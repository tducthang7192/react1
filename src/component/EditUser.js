import React, { Component } from 'react';



class EditUser extends Component {
  constructor(props) {
    super(props);
   this.state={
     id:this.props.getEditUser1.id,
     name:this.props.getEditUser1.name,
     tel:this.props.getEditUser1.tel,
     permisson:this.props.getEditUser1.permisson
   }
  }
  isChange=(event)=>{
    const target=event.target;
    const name=target.name;
    const value=target.value
    this.setState({
      [name]:value
    });
  
  }
  save=()=>{
    var info={};
    info.id=this.state.id;
    info.name=this.state.name;
    info.tel=this.state.tel;
    info.permisson=this.state.permisson;
    
   console.log(info.permisson);
   
    this.props.changeEditUserStatus2();
    this.props.getEditUserInfo1(info)
  }
    render() {
      
        return (
            
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
              <input name="name" onChange={(event)=>this.isChange(event)} defaultValue={this.props.getEditUser1.name} type="text"  className="form-control" placeholder="User" aria-describedby="helpId" />
              <input name="tel" onChange= {(event)=>this.isChange(event)} defaultValue={this.props.getEditUser1.tel} type="text"  className="form-control mt-2" placeholder="Điện Thoại" aria-describedby="helpId" />
              <select name="permisson" onChange= {(event)=>this.isChange(event)} defaultValue={this.props.getEditUser1.permisson} className="custom-select  mb-1 mt-2"   >
                <option value>Mặc Định</option>
                <option value={1} >Admin</option>
                <option value={2}>Moderator</option>
                <option value={3}>Normal</option>
              </select>
              <input className="btn btn-primary btn-block mt-2"  value="Luu"  onClick={()=>this.save()}></input>
            </div>
            </form>
          </td>
        </tr>
      </tbody>
    </table>  
     
          
        );
    }
}

export default EditUser;