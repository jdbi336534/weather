import React from 'react';
import { List, Switch } from 'antd-mobile';
import styles from './example.less';
const Item = List.Item;
/* eslint global-require: 0 */

class Devices extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        switch1:false
    };
  };

  handleClick=(checked)=>{
    this.props.onChange(checked); 
    this.setState({switch1:checked});
  }

    render(){
        return (
            <div className={styles.wrap}>
                <List renderHeader={() => '开关类型设备'} className="my-list">
                    <Item extra={
                        <Switch
                        checked={this.state.switch1}
                        onClick={this.handleClick}
                        />
                    }>卧室</Item>
                </List>
                <div className={styles.test}>
                    <div className={styles.intest}></div>
                </div>
                <div className={styles.test}></div>
            </div>
        );
    }
}
export default Devices;