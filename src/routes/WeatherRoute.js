import React, { PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import WeatherComp from "../components/Weather/index";

const Weather=({dispatch,weather})=>{
    const {briefdata} = weather;
    const WeatherProps={
        briefdata,
        handleTap(){
            console.log('父组件：', briefdata);
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