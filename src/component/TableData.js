import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
 
  tabaleDaTaShow=()=>this.props.dataUserProps.map(
  (value,key)=> (<TableDataRow 
    changeEditUserStatus2={()=>this.props.changeEditUserStatus1()} 
    
    editFunClick={()=>this.props.editFun(value)} 
    
    key={key} stt={key} ten={value.name} dt={value.tel} quyen={value.permisson} id={value.id}
    
    deleteButtonClick={(id)=>this.deleteButtonClick(id)}
    />))
    deleteButtonClick=(id)=>{
      this.props.deleteUser(id)
    }
    render() {
      
        return (
            <div className="col">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Tên</th>
                      <th>Điện Thoại</th>
                      <th>Quyền</th>
                      <th>Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.tabaleDaTaShow()}
                  </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;