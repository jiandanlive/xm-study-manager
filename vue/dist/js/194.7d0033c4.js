"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[194],{2194:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var l=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"search"},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入订单编号"},model:{value:e.orderId,callback:function(t){e.orderId=t},expression:"orderId"}}),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"info",plain:""},on:{click:function(t){return e.load(1)}}},[e._v("查询")]),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"warning",plain:""},on:{click:e.reset}},[e._v("重置")])],1),t("div",{staticClass:"table"},[t("el-table",{attrs:{data:e.tableData,stripe:""}},[t("el-table-column",{attrs:{prop:"id",label:"序号",width:"80",align:"center",sortable:""}}),t("el-table-column",{attrs:{prop:"courseImg",label:"课程封面",width:"100"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",{staticStyle:{display:"flex","align-items":"center"}},[a.row.courseImg?t("el-image",{staticStyle:{width:"60px",height:"40px","border-radius":"10px"},attrs:{src:a.row.courseImg,"preview-src-list":[a.row.courseImg]}}):e._e()],1)]}}])}),t("el-table-column",{attrs:{prop:"courseName",label:"课程名称"}}),t("el-table-column",{attrs:{prop:"price",label:"订单价格",width:"100"}}),t("el-table-column",{attrs:{prop:"orderId",label:"订单编号",width:"200"}}),t("el-table-column",{attrs:{prop:"time",label:"下单时间",width:"200"}}),t("el-table-column",{attrs:{prop:"userName",label:"下单用户",width:"100"}})],1),t("div",{staticClass:"pagination"},[t("el-pagination",{attrs:{background:"","current-page":e.pageNum,"page-sizes":[5,10,20],"page-size":e.pageSize,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1)])},r=[],s={name:"Orders",data(){return{tableData:[],pageNum:1,pageSize:5,total:0,orderId:null,fromVisible:!1,form:{},user:JSON.parse(localStorage.getItem("xm-user")||"{}"),rules:{},ids:[]}},created(){this.load(1)},methods:{load(e){e&&(this.pageNum=e),this.$request.get("/orders/selectPage",{params:{pageNum:this.pageNum,pageSize:this.pageSize,orderId:this.orderId}}).then((e=>{this.tableData=e.data?.list,this.total=e.data?.total}))},reset(){this.orderId=null,this.load(1)},handleCurrentChange(e){this.load(e)}}},i=s,o=a(1656),n=(0,o.A)(i,l,r,!1,null,"34ae0418",null),u=n.exports}}]);
//# sourceMappingURL=194.7d0033c4.js.map