
import Vue from 'vue'

Vue.filter("distance",(value)=>{
	
	return  (Number(value)/1000.0).toFixed(2) + "km"
})

export default Vue;

