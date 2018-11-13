import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            tempValue:"",
            userInfo:""
        }
    }
    
  
    hienThiNut=()=>{
        if(this.props.nuts===true){
            return <div className="btn btn-secondary btn-block" onClick={()=>this.props.trangThaiNut()}>Đóng</div>;
        }
        else{
            return <div className="btn btn-primary btn-block" onClick={()=>this.props.trangThaiNut()}>Thêm</div>;
        }
    }
 isChange=(event)=>{
    const target=event.target;
    
    const value=target.value;
    this.setState({
        tempValue:value
    });
    this.props.checkConectProps(this.state.tempValue)
    }
    getEditUserInfo=(info)=>{ 
        this.setState({
            userInfo:info
        });
     this.props.getEditUserInfo0(info)   
    } 
  checkEditUserStatus1=()=>{
      if(this.props.checkEditUserStatus()=== true){
          return  <EditUser getEditUserInfo1={(info)=>this.getEditUserInfo(info)} getEditUser1={this.props.getEditUser} changeEditUserStatus2={()=>this.props.changeEditUserStatus1()}/>
      }
  }  
    render() {
        console.log(this.state);
        
        return (
                <div className="row">
                <div className="col-12">
                {this.checkEditUserStatus1()}
                </div>  
                    <div className="col-4 mb-2">
                        <div className="btn-group">
                           {this.hienThiNut()}
                           
                            
                        </div>
                        <div className="input-group">
                        <input type="text" className="form-control" name="name" id="name" placeholder="Nhập Từ Khóa" onChange={(event)=>this.isChange(event)}  />
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="button" onClick={()=>this.props.checkConectProps(this.state.tempValue)}>Tìm Kiếm</button>
                        </span>
                        </div>
                    </div>
                </div>

        );
    }
}

export default Search;