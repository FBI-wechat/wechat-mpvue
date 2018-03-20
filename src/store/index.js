import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {			//状态对象
	login:{
		show: true
	}
}
const mutations = {		//触发状态的方法，同步,第一个参数默认state，第二个参数自定义
	changeLogin({login},prop){
		login[prop.key] = prop.val;
	}
}
const getters = {		//计算state
}

const actions = {		//异步触发状态
}


export default new Vuex.Store({
	state,
    mutations,
    getters,
    actions
})