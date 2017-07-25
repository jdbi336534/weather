import React, { PropTypes } from 'react';
import cs from 'classnames';
import styles from './index.less';
import { NavBar, Icon, Drawer, List } from 'antd-mobile';


const WeatherComp = ({briefdata,brief3day,Drawerstatus,handleTap}) =>{
    let currMonth = new Date().getMonth() + 1; //获取月份判断季节
    let spring=false;
    let summer=false;
    let autumn=false;
    let winter=false;
    if (2 <= currMonth && currMonth <= 4) {
        spring=true;
      } else if (5 <= currMonth && currMonth <= 7) {
        summer=true;	
      } else if (8 <= currMonth && currMonth <= 10) {
        autumn=true;
      } else {
        winter=true;
      }
      const sidebar = (<List>
      {[...Array(20).keys()].map((i, index) => {
        if (index === 0) {
          return (<List.Item key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            multipleLine
          >Category</List.Item>);
        }
        return (<List.Item key={index}
          thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        >Category{index}</List.Item>);
      })}
    </List>);
    return (
    <div className={cs({[styles.weather]:true,[styles.summer]:summer,[styles.autumn]:autumn,[styles.spring]:spring,[styles.winter]:winter})}>
       <div className={styles.location}>
      <NavBar iconName="ellipsis"
        mode="light"
        onLeftClick={() => handleTap()}
        >天气预报</NavBar>
        <Drawer
        className="my-drawer"
        contentStyle={{ color: '#fff' }}
        sidebarStyle={{ border: '1px solid #ddd' }}
        sidebar={sidebar}
        open={Drawerstatus}
      >
       
         
        <div className={styles.scroll}>
          <div className={styles.details}>
            <div className={styles.time}>
              {briefdata.city.name} 更新于 {briefdata.condition.updatetime}
            </div>
            <div className={styles.temperature}>
              <p>{briefdata.condition.temp}<span className={styles.tmp}>℃</span></p>
            </div>
            <div className={styles.status}>
              <img className={styles.icon} src={'https://h5tq.moji.com/tianqi/assets/images/weather/w'+briefdata.condition.icon+'.png'}></img>
              <span className={styles.margin}>{briefdata.condition.condition}</span>
              <img className={styles.icon} src="src/assets/img/windDir.png"></img>
              <span className={styles.margin}>{briefdata.condition.windDir}</span>
              <img className={styles.icon} src="src/assets/img/speed.png"></img>
              <span className={styles.margin}>{briefdata.condition.windLevel}级</span>
              <img className={styles.icon} src="src/assets/img/hum.png"></img>
              <span>{briefdata.condition.humidity}%</span>
            </div>
          </div>
          <div className={styles.threeday}>
              <div className={styles.threetitle}>未来三天天气预报</div>
              <div className={styles.threecontent}>
                <span className={styles.center} >{brief3day.forecast[0].predictDate} 今天</span>
                <span className={styles.threemargin}>
                  <span className={styles.center}>
                    <img className={styles.threeicon} src={'https://h5tq.moji.com/tianqi/assets/images/weather/w'+brief3day.forecast[0].conditionIdDay+'.png'}></img>
                  </span>
                  <span className={styles.center}>{brief3day.forecast[0].conditionDay}</span>
                </span>
                <span className={styles.center}>{brief3day.forecast[0].tempNight+'~'+brief3day.forecast[0].tempDay+'℃'}</span>
              </div>
              <div className={styles.threecontent}>
                <span className={styles.center} >{brief3day.forecast[1].predictDate} 明天</span>
                <span className={styles.threemargin}>
                  <span className={styles.center}>
                    <img className={styles.threeicon} src={'https://h5tq.moji.com/tianqi/assets/images/weather/w'+brief3day.forecast[1].conditionIdDay+'.png'}></img>
                  </span>
                  <span className={styles.center}>{brief3day.forecast[1].conditionDay}</span>
                </span>
                <span className={styles.center}>{brief3day.forecast[1].tempNight+'~'+brief3day.forecast[1].tempDay+'℃'}</span>
              </div>
              <div className={styles.threecontent}>
                <span className={styles.center} >{brief3day.forecast[2].predictDate} 后天</span>
                <span className={styles.threemargin}>
                  <span className={styles.center}>
                    <img className={styles.threeicon} src={'https://h5tq.moji.com/tianqi/assets/images/weather/w'+brief3day.forecast[2].conditionIdDay+'.png'}></img>
                  </span>
                  <span className={styles.center}>{brief3day.forecast[2].conditionDay}</span>
                </span>
                <span className={styles.center}>{brief3day.forecast[2].tempNight+'~'+brief3day.forecast[2].tempDay+'℃'}</span>
              </div>
          </div>
        </div>
      
      </Drawer>
      </div>
    </div>
)};


WeatherComp.propTypes = {
    briefdata:PropTypes.object,
    brief3day:PropTypes.object,
    handleTap:PropTypes.func
};

export default WeatherComp;