import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state={
      trangThaiChinhSua:true
    }
  }
  thayDoiTrangThai=()=>{
    this.setState({
      trangThaiChinhSua:!this.state.trangThaiChinhSua
    })
  }
  hienThiNut=()=>{
    if(this.state.trangThaiChinhSua === true){
        return <div className="btn btn-secondary btn-block" onClick={this.thayDoiTrangThai}>Đóng</div>; }
    else{
        return <div className="btn btn-primary btn-block" onClick={this.thayDoiTrangThai}>Thêm</div> ; }
   
    
  }
   hienThiForm=()=>{
    if(this.state.trangThaiChinhSua === true){
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
              
              <div className="form-group">
                <input type="text"  className="form-control" placeholder="User" aria-describedby="helpId" />
                <input type="text"  className="form-control mt-2" placeholder="Điện Thoại" aria-describedby="helpId" />
                <select className="custom-select  mb-1 mt-2">
                  <option value={1} >Mặc Định</option>
                  <option value={2}>Admin</option>
                  <option value={3}>Moderator</option>
                </select>
                <div className="btn btn-primary btn-block mt-2">Thêm</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      ) }
   }
  render() {
        return (
            <div className="col-4">
              {this.hienThiNut()}
              {this.hienThiForm()}
               
              </div>


        );
    }
}

export default AddUser;