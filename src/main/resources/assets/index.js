webpackJsonp([3],{0:function(e,t,n){e.exports=n(208)},208:function(e,t,n){var s,a;(function(e){!function(){var t=n(15),s=n(13),a=n(7),l=n(4);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return s.getRootInstances(a)},l)}();try{(function(){s=[t,n(9),n(12),n(4),n(136),n(209),n(210),n(137),n(138)],a=function(e,t,n,s,a,l,r,o,c){"use strict";var u=n["default"],i=u(t),d=u(s),m=u(a),p=u(l),f=u(r),b=u(o),h=c.statusObservableTimer,v=c.addClusterSubject,N=c.addClusterResult,E=c.deleteClusterSubject,y=c.deleteClusterResult,C=c.clusterNames;i(document).ready(function(e){d.render(d.createElement(m,{statusObservableTimer:h}),document.getElementById("cr-server-status")),d.render(d.createElement(b,{clusterNames:C}),document.getElementById("cr-sidebar")),d.render(d.createElement(p,{addClusterSubject:v,addClusterResult:N}),document.getElementById("cr-cluster-form")),d.render(d.createElement(f,{clusterNames:C,deleteSubject:E,deleteResult:y}),document.getElementById("cr-cluster-list"))})}.apply(t,s),!(void 0!==a&&(e.exports=a))}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var s=n(14);s(e,n(4))&&(t=!0);var a=t;a&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to index.js: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(11)(e))},209:function(e,t,n){var s,a;(function(e){!function(){var t=n(15),s=n(13),a=n(7),l=n(4);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return s.getRootInstances(a)},l)}();try{(function(){s=[t,e,n(4),n(12)],a=function(e,t,n,s){"use strict";var a=s["default"],l=a(n),r=l.createClass({displayName:"clusterForm",propTypes:{addClusterSubject:l.PropTypes.object.isRequired,addClusterResult:l.PropTypes.object.isRequired},getInitialState:function(){return{addClusterResultMsg:null}},componentWillMount:function(){var e=this;this._clusterResultSubscription=this.props.addClusterResult.subscribeOnNext(function(t){return t.subscribe(function(t){return e.setState({addClusterResultMsg:null})},function(t){return e.setState({addClusterResultMsg:t.responseText})})})},componentWillUnmount:function(){this._clusterResultSubscription.dispose()},_onAdd:function(e){var t=l.findDOMNode(this.refs.in_seed_node).value;this.props.addClusterSubject.onNext(t)},render:function(){var e=null;this.state.addClusterResultMsg&&(e=l.createElement("div",{className:"alert alert-danger",role:"alert"},this.state.addClusterResultMsg));var t=l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12"},l.createElement("div",{className:"form-inline"},l.createElement("div",{className:"form-group"},l.createElement("label",{htmlFor:"in_seed_node"},"Seed node:"),l.createElement("input",{type:"text",className:"form-control",ref:"in_seed_node",id:"in_seed_node",placeholder:"hostname or ip"})),l.createElement("button",{type:"button",className:"btn btn-success",onClick:this._onAdd},"Add Cluster"))));return l.createElement("div",{className:"panel panel-default"},l.createElement("div",{className:"panel-body"},e,t))}});t.exports=r}.apply(t,s),!(void 0!==a&&(e.exports=a))}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var s=n(14);s(e,n(4))&&(t=!0);var a=t;a&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to cluster-form.jsx: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(11)(e))},210:function(e,t,n){var s,a;(function(e){!function(){var t=n(15),s=n(13),a=n(7),l=n(4);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return s.getRootInstances(a)},l)}();try{(function(){s=[t,e,n(4),n(12),n(135)],a=function(e,t,n,s,a){"use strict";var l=s["default"],r=l(n),o=a.DeleteStatusMessageMixin,c=r.createClass({displayName:"TableRow",render:function(){return r.createElement("tr",null,r.createElement("td",null,this.props.name),r.createElement("td",null,r.createElement("button",{type:"button",className:"btn btn-xs btn-danger",onClick:this._onDelete},"Delete")))},_onDelete:function(e){this.props.deleteSubject.onNext(this.props.name)}}),u=r.createClass({displayName:"clusterList",mixins:[o],propTypes:{clusterNames:r.PropTypes.object.isRequired,deleteSubject:r.PropTypes.object.isRequired,deleteResult:r.PropTypes.object.isRequired},getInitialState:function(){return{clusterNames:[],deleteResultMsg:null}},componentWillMount:function(){var e=this;this._clusterNamesSubscription=this.props.clusterNames.subscribeOnNext(function(t){return t.subscribeOnNext(function(t){return e.setState({clusterNames:t})})})},componentWillUnmount:function(){this._clusterNamesSubscription.dispose()},render:function(){var e=this,t=this.state.clusterNames.map(function(t){return r.createElement(c,{name:t,key:t,deleteSubject:e.props.deleteSubject})}),n=null;return n=0==t.length?r.createElement("div",{className:"alert alert-info",role:"alert"},"No clusters found"):r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-6"},r.createElement("div",{className:"table-responsive"},r.createElement("table",{className:"table table-bordered table-hover table-striped"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Cluster Name"),r.createElement("th",null))),r.createElement("tbody",null,t))))),r.createElement("div",{className:"panel panel-default"},r.createElement("div",{className:"panel-body"},this.deleteMessage(),n))}});t.exports=u}.apply(t,s),!(void 0!==a&&(e.exports=a))}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var s=n(14);s(e,n(4))&&(t=!0);var a=t;a&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to cluster-list.jsx: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(11)(e))}});