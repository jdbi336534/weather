import React from 'react';
import { Popover,NavBar,TabBar, Icon } from 'antd-mobile';
import Devices from './Devices';
const Item = Popover.Item;
/* eslint global-require: 0 */

class Example extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      navname:'我的设备',
      visible: false,
      selected: '',
    };
  }
  onSelect = (opt) => {
    // console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  }
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  }
  handleClick=(checked)=>{
console.info(checked);
  }
  renderDevices=()=>{
    return (
     <Devices onChange={this.handleClick}/>
    );
  }
  renderContent=(pageText)=> {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
      </div>
    );
  }

  render() {
     let offsetX = -10; // just for pc demo
    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
      offsetX = -26;
    }
    return (
      <div>
         <NavBar iconName={false}
        mode="light"
        rightContent={
          <Popover mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={this.state.visible}
            overlay={[
              (<Item key="4" value="scan" icon={<Icon type={require('../assets/img/scan.svg')} size="xs" />} data-seed="logId">扫码绑定设备</Item>),
              (<Item key="5" value="special" icon={<Icon type="search" size="xs" />} style={{ whiteSpace: 'nowrap' }}>待定</Item>),
              (<Item key="6" value="button ct" icon={<Icon type="search" size="xs" />}>
                <span style={{ marginRight: 5 }}>待定</span>
              </Item>),
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [offsetX, 15],
            }}
            onVisibleChange={this.handleVisibleChange}
            onSelect={this.onSelect}
          >
            <div style={{
              height: '100%',
              padding: '0 0.3rem',
              marginRight: '-0.3rem',
              display: 'flex',
              alignItems: 'center',
            }}
            >
              <Icon type="ellipsis" />
            </div>
          </Popover>
          }
      >
       {this.state.navname}
      </NavBar>

     
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
      >
        <TabBar.Item
          title="我的设备"
          key="我的设备"
          icon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(src/assets/img/device.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(src/assets/img/device-active.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
              navname:'我的设备'
            });
          }}
          data-seed="logId"
        >
          {this.renderDevices('我的设备')}
        </TabBar.Item>
        <TabBar.Item
          icon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(src/assets/img/msg.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />}
          selectedIcon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(src/assets/img/msg-active.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />}
          title="消息中心"
          key="消息中心"
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
              navname:'消息中心'
            });
          }}
          data-seed="logId1"
        >
          {this.renderContent('消息中心')}
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(src/assets/img/my.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(src/assets/img/my-active.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
          }
          title="个人中心"
          key="个人中心"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
              navname:'个人中心'
            });
          }}
        >
          {this.renderContent('个人中心')}
        </TabBar.Item>
      </TabBar>
       </div>
    );
  };
}

export default Example;
