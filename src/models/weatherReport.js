import {briefforecast3days,briefcondition,briefaqi} from '../services/weather';

export default {

  namespace: 'weather',

  state: {
      briefdata:{},
      brief3day:{}
  },

  subscriptions: {
    //   订阅监听
    setup({ dispatch, history }) {
        history.listen(location => {
            switch(location.pathname){
            case '/weather':
                dispatch({type: 'fetchbrief',
                payload:{
                    lat:"32.812036",
                    lon:"106.969741"
                }
            });
            dispatch({type: 'fetch3days',
                payload:{
                    lat:"32.812036",
                    lon:"106.969741"
                }
            });
            break;
            }
        });
    },
  },

  effects: {
    //   请求提交数据
    *fetchbrief({ payload }, { call, put }) {
        const {data} = yield call(briefcondition,payload);
        console.log('modal,fetchbrief:',data);
        yield put({
                    type:'commonData',
                    payload:{
                        briefdata:data
                    }
                 })
    },
    *fetch3days({ payload }, { call, put }){
        const {data} = yield call(briefforecast3days,payload);
        console.log('brief3day:',data);
        yield put({
                    type:'commonData',
                    payload:{
                        brief3day:data
                    }
                 })
    }
  },

  reducers: {
    //   修改数据
    commonData(state, action) {
      return { ...state, ...action.payload };
    },
  },

}
