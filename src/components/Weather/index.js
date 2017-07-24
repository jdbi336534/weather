import React, { PropTypes } from 'react';
import cs from 'classnames';
import styles from './index.less';
import { NavBar, Icon } from 'antd-mobile';
import { setDefaultvalue } from '../../utils/mutils';


const WeatherComp = ({briefdata,brief3day,handleTap}) =>{
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
    return (
    <div className={cs({[styles.weather]:true,[styles.summer]:summer,[styles.autumn]:autumn,[styles.spring]:spring,[styles.winter]:winter})}>
      <div className={styles.location}>
         <NavBar leftContent="back"
        mode="light"
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
        >NavBar</NavBar>
        <div className={styles.scroll}>
          <div className={styles.details}>
            <div className={styles.time}>
              更新于 {briefdata.condition.updatetime}
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
              <span>{briefdata.condition.humidity}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
)};


WeatherComp.propTypes = {
    briefdata:PropTypes.object,
    handleTap:PropTypes.func
};

export default WeatherComp;