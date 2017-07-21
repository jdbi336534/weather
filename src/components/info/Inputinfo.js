import React from 'react';
import { List, Switch,InputItem, Toast, Button, Icon } from 'antd-mobile';
const Item = List.Item;
/* eslint global-require: 0 */

class Inputinfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        devUidhasError: false,
        devAppkeyhasError: false,
        userUidhasError: false,
        userSecretkeyhasError: false,
        devUid: '',
        devAppkey:'',
        userUid:'',
        userSecretkey:''
    };
  }
/**
 * dev infomation
 */
ondevUidErrorClick = () => {
    if (this.state.devUidhasError) {
      Toast.info('请输入34位uid');
    }
  }
ondevUidChange = (value) => {
    if (value.replace(/\s/g, '').length < 34) {
      this.setState({
        devUidhasError: true,
      });
    } else {
      this.setState({
        devUidhasError: false,
      });
    }
    this.setState({
      devUid:value,
    });
  }
ondevAppkeyErrorClick = () => {
    if (this.state.devAppkeyhasError) {
      Toast.info('请输入正确的Appkey');
    }
  }
  ondevAppkeyChange = (value) => {
    if (value.replace(/\s/g, '').length < 18) {
      this.setState({
        devAppkeyhasError: true,
      });
    } else {
      this.setState({
        devAppkeyhasError: false,
      });
    }
    this.setState({
      devAppkey:value,
    });
  }
/**
 * user infomation
 */
onuserUidErrorClick = () => {
    if (this.state.userUidhasError) {
      Toast.info('请输入34位uid');
    }
  }
onuserUidChange = (value) => {
    if (value.replace(/\s/g, '').length < 34) {
      this.setState({
        userUidhasError: true,
      });
    } else {
      this.setState({
        userUidhasError: false,
      });
    }
    this.setState({
      userUid:value,
    });
  }
onuserSecretkeyErrorClick = () => {
    if (this.state.userSecretkeyhasError) {
      Toast.info('请输入正确的Secretkey');
    }
  }
onuserSecretkeyChange = (value) => {
    if (value.replace(/\s/g, '').length < 32) {
      this.setState({
        userSecretkeyhasError: true,
      });
    } else {
      this.setState({
        userSecretkeyhasError: false,
      });
    }
    this.setState({
      userSecretkey:value,
    });
  }
  /**
   * commit
   */
  commit=()=>{
    console.log(this.state);
    let info=this.state;
    let obj= {
      devUid:info.devUid,
      devAppkey:info.devAppkey,
      userUid:info.userUid,
      userSecretkey:info.userSecretkey
    }
    localStorage.setItem('info',JSON.stringify(obj));
  }
    render(){
        return (
            <div style={{width:'98%',margin:'0 auto',paddingTop:'.7rem'}}>
                    <div style={{width:'1.5rem',height:'1.5rem',margin:'0 auto',background:'url(src/assets/img/kuai.svg)no-repeat',backgroundSize:'100%',paddingTop:'.3rem'}}/>
                 <List renderHeader={() => '绑定设备（硬件）'}>
                    <InputItem
                        type="text"
                        placeholder="请输入设备34位uid"
                        error={this.state.devUidhasError}
                        onErrorClick={this.ondevUidErrorClick}
                        onChange={this.ondevUidChange}
                        value={this.state.devUid}
                    >UID</InputItem>
                    </List>
                    <List>
                    <InputItem
                        type="text"
                        placeholder="请输入设备Appkey"
                        error={this.state.devAppkeyhasError}
                        onErrorClick={this.ondevAppkeyErrorClick}
                        onChange={this.ondevAppkeyChange}
                        value={this.state.devAppkey}
                    >Appkey</InputItem>
                    </List>
                     <List renderHeader={() => '绑定客户端'}>
                    <InputItem
                        type="text"
                        placeholder="请输入用户34位uid"
                        error={this.state.userUidhasError}
                        onErrorClick={this.onuserUidErrorClick}
                        onChange={this.onuserUidChange}
                        value={this.state.userUid}
                    >UID</InputItem>
                    </List>
                    <List>
                    <InputItem
                        type="text"
                        placeholder="请输入用户Secretkey"
                        error={this.state.userSecretkeyhasError}
                        onErrorClick={this.onuserSecretkeyErrorClick}
                        onChange={this.onuserSecretkeyChange}
                        value={this.state.userSecretkey}
                    >Secretkey</InputItem>
                    </List>
                    <Button className="btn" type="primary" onClick={this.commit} style={{marginTop:50}}>确定</Button>
            </div>
        );
    }
}
export default Inputinfo;