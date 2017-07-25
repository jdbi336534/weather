import React, { PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import WeatherComp from "../components/Weather/index";

const Weather=({dispatch,weather})=>{
    const {briefdata,brief3day,Drawerstatus} = weather;
    const WeatherProps={
        briefdata,
        brief3day,
        Drawerstatus,
        handleTap(){
            console.log('父组件：', briefdata);
            dispatch({
                type:'weather/commonData',
                payload:{
                    Drawerstatus:!Drawerstatus
                }
            })
        }
    };
    return(
        <WeatherComp {...WeatherProps}/>
    )
};
Weather.propTypes={
    weather: PropTypes.object,
    dispatch: PropTypes.func,
};
function mapStateToProps({ weather }) {
  return { weather };
}
export default connect(mapStateToProps)(Weather);