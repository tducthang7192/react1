import React, { Component } from 'react';

import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import Demo from './Demo';
import DataUser from './Data.json';
const uuidv1 = require('uuid/v1');


class App extends Component {
 
  constructor(props) {
    super(props);
    this.state={
      hienThiForm:true,
      data:[],
      searchText:"",
      editUserStatus:true,
      getEditUser:""
    }
  }
  
  componentWillMount() {
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData',JSON.stringify(DataUser));
    }
    else{
      var temp=JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      });
      
    }
  }
  
  thayDoiTrangThai=()=>{
    this.setState({
        hienThiForm:!this.state.hienThiForm
    })  
   }
   getTextSearch=(dl)=>{
    
    this.setState({
       searchText: dl
     });
    }
    
    getNewUserData=(name,tel,permisson)=>{
      var item={};
      item.id=uuidv1();
      item.name=name;
      item.tel=tel;
      item.permisson=parseInt(permisson);
      var items=this.state.data;
      this.setState({
        data:items
      });
     
      
      items.push(item);
     console.log(items);
    // DataUser.push(item);
    // this.setState({
    //       data:DataUser
    //     });
    // console.log(this.state.data);
    localStorage.setItem('userData',JSON.stringify(items));
        


     
    }
  editUser=(user)=>{
    console.log("da ket noi ok");
    console.log(user);
    
    this.setState({
      getEditUser:user
    });
 
    
    
  }  
  changeEditUserStatus=()=>{
    this.setState({
      editUserStatus:!this.state.editUserStatus
    });
  }
  getEditUserInfo=(info)=>{ // lấy thông tin user đã sửa xong 
    this.setState({
      userInfo:info
    });
    console.log(typeof(info.permisson)); // kiem tra permisson la chuoi hay so ==>kq la chuoi
    
    
    
    
    this.state.data.forEach((value,key)=>{
      if(value.id===info.id){
        value.name=info.name;
        value.tel=info.tel;
        value.permisson=parseInt(info.permisson)
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data));
  }
  deleteUser=(id)=>{   //xoa user
    console.log(typeof(id));
    
  var tempData=this.state.data.filter(item => item.id !== id);
  this.setState({
    data:tempData
  });
   localStorage.setItem('userData',JSON.stringify(tempData));
  }

 
 
  render() {
    
    
    console.log(this.state.data);
    
    
  
    
      var ketqua=[];
      this.state.data.forEach((item)=>{
        
        if(item.name.indexOf(this.state.searchText) !== -1){
          
        ketqua.push(item);
        
          
          
        }
      })
    
  
    
    return (
      <div className="App">
        <Header/>
      <div className="container">
        <Search getEditUserInfo0={(info)=>this.getEditUserInfo(info)} getEditUser={this.state.getEditUser}nuts={this.state.hienThiForm} trangThaiNut={()=>this.thayDoiTrangThai()} checkConectProps={(dl)=>this.getTextSearch(dl)} checkEditUserStatus={()=>this.state.editUserStatus} changeEditUserStatus1={()=>this.changeEditUserStatus()}/>
        <div className="row">
        <TableData deleteUser={(id)=>this.deleteUser(id)} dataUserProps={ketqua} editFun={(user)=>this.editUser(user)} changeEditUserStatus1={()=>this.changeEditUserStatus()}/>
        <Demo hienThiForm={this.state.hienThiForm} add={(name,tel,permisson)=>this.getNewUserData(name,tel,permisson)}/>
        </div>
      </div>  
        
        
     
       
      </div>
    );
  }
}

export default App;
