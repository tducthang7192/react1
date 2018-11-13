import React, { Component } from 'react';



class TableDataShow extends Component {
  permissonShow=()=>{
    if(this.props.quyen === 1){     return "Admin"; }
    else if(this.props.quyen === 2){      return "Moderator"; }
    else { return "Normal";}
  }  
  editClick=()=>{
    this.props.editFunClick();
    this.props.changeEditUserStatus2();
  }
  deleteButtonClick=(id)=>{
   this.props.deleteButtonClick(id)
   
  }
  render() {
     
        return (
            <tr>
        <td >{this.props.stt+1}</td>
        <td>{this.props.ten}</td>
        <td>{this.props.dt}</td>
        <td>{this.permissonShow()}</td>
        <td className="text-center">
          <div className="btn-group">
            <div className="btn btn-warning sua" onClick={()=>this.editClick()}><i className="fa fa-edit" /> Sửa</div>
            <div className="btn btn-danger xoa" onClick={()=>this.deleteButtonClick(this.props.id)}><i className="fa fa-remove" aria-hidden="true" /> Xóa</div>
          </div>
        </td>
      </tr>
        );
    }
}

export default TableDataShow;