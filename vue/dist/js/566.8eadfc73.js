"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[566],{566:function(e,r,s){s.r(r),s.d(r,{default:function(){return d}});var t=function(){var e=this,r=e._self._c;return r("div",[r("el-card",{staticStyle:{width:"50%"}},[r("el-form",{ref:"formRef",staticStyle:{"padding-right":"50px"},attrs:{model:e.user,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"原始密码",prop:"password"}},[r("el-input",{attrs:{"show-password":"",placeholder:"原始密码"},model:{value:e.user.password,callback:function(r){e.$set(e.user,"password",r)},expression:"user.password"}})],1),r("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[r("el-input",{attrs:{"show-password":"",placeholder:"新密码"},model:{value:e.user.newPassword,callback:function(r){e.$set(e.user,"newPassword",r)},expression:"user.newPassword"}})],1),r("el-form-item",{attrs:{label:"确认新密码",prop:"confirmPassword"}},[r("el-input",{attrs:{"show-password":"",placeholder:"确认密码"},model:{value:e.user.confirmPassword,callback:function(r){e.$set(e.user,"confirmPassword",r)},expression:"user.confirmPassword"}})],1),r("div",{staticStyle:{"text-align":"center","margin-bottom":"20px"}},[r("el-button",{attrs:{type:"primary"},on:{click:e.update}},[e._v("确认修改")])],1)],1)],1)],1)},a=[],o=(s(4114),{name:"Password",data(){const e=(e,r,s)=>{""===r?s(new Error("请确认密码")):r!==this.user.newPassword?s(new Error("确认密码错误")):s()};return{user:JSON.parse(localStorage.getItem("xm-user")||"{}"),rules:{password:[{required:!0,message:"请输入原始密码",trigger:"blur"}],newPassword:[{required:!0,message:"请输入新密码",trigger:"blur"}],confirmPassword:[{validator:e,required:!0,trigger:"blur"}]}}},created(){},methods:{update(){this.$refs.formRef.validate((e=>{e&&this.$request.put("/updatePassword",this.user).then((e=>{"200"===e.code?(localStorage.removeItem("xm-user"),this.$message.success("修改密码成功"),this.$router.push("/login")):this.$message.error(e.msg)}))}))}}}),l=o,u=s(1656),i=(0,u.A)(l,t,a,!1,null,"6ed92316",null),d=i.exports}}]);
//# sourceMappingURL=566.8eadfc73.js.map