import {
  briefforecast3days,
  briefcondition,
  briefaqi,
  getarea
} from '../services/weather';

export default {

  namespace: 'weather',

  state: {
    briefdata: {
      city:{
        name:''
      },
      condition: {
        condition:'',
        updatetime: '',
        humidity:'',
        icon:'0',
        temp:'',
        windDir:'',
        windLevel:''
      }
    },
    brief3day: {
      forecast: [{
          conditionDay: '',
          conditionIdDay: '0',
          conditionIdNight: '0',
          conditionNight: '',
          predictDate: '',
          tempDay: '',
          tempNight: '',
          updatetime: '',
          windDirDay: '',
          windDirNight: '',
          windLevelDay: '',
          windLevelNight: ''
        }, {
          conditionDay: '',
          conditionIdDay: '0',
          conditionIdNight: '0',
          conditionNight: '',
          predictDate: '',
          tempDay: '',
          tempNight: '',
          updatetime: '',
          windDirDay: '',
          windDirNight: '',
          windLevelDay: '',
          windLevelNight: ''
        }, {
          conditionDay: '',
          conditionIdDay: '0',
          conditionIdNight: '0',
          conditionNight: '',
          predictDate: '',
          tempDay: '',
          tempNight: '',
          updatetime: '',
          windDirDay: '',
          windDirNight: '',
          windLevelDay: '',
          windLevelNight: ''
        }]
    },
    Drawerstatus:false
  },

  subscriptions: {
    //   订阅监听
    setup({
      dispatch,
      history
    }) {
      history.listen(location => {
        switch (location.pathname) {
          case '/weather':
            dispatch({
              type: 'fetchbrief',
              payload: {
                lat: "32.812036",
                lon: "106.969741"
              }
            });
            dispatch({
              type: 'fetch3days',
              payload: {
                lat: "32.812036",
                lon: "106.969741"
              }
            });
            dispatch({type:'area'});
            break;
        }
      });
    },
  },

  effects: {
    //   请求提交数据
    * fetchbrief({
      payload
    }, {
      call,
      put
    }) {
      const {
        data
      } = yield call(briefcondition, payload);
      console.log('fetchbrief:', data);
      if (data.code === 0) {
        yield put({
          type: 'commonData',
          payload: {
            briefdata: data.data
          }
        })
      }
    },
    * fetch3days({
      payload
    }, {
      call,
      put
    }) {
      const {
        data
      } = yield call(briefforecast3days, payload);
      console.log('brief3day:', data);
      if (data.code === 0) {
        yield put({
          type: 'commonData',
          payload: {
            brief3day: data.data
          }
        })
      }
    },
    * area({payload},{call,put}){
        const {data}=yield call(getarea);
        console.log('area',data);
    }
  },

  reducers: {
    //   修改数据
    commonData(state, action) {
      return { ...state,
        ...action.payload
      };
    },
  },

}
