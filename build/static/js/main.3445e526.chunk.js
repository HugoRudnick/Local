(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},106:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(104),a(105),a(106),a(37)),i=a(86),u=a(26),s=a(4),m=a(13),f=a.n(m),d="http://localhost:5243/api/",E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d+"usuario/";return{fetchAll:function(){return f.a.get(e)},fetchById:function(t){return f.a.get(e+t)},create:function(t){return f.a.post(e,t)},update:function(t,a){return f.a.put(e+t,a)},delete:function(t){return f.a.delete(e+t)}}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d+"genero/";return{fetchAll:function(){return f.a.get(e)},fetchById:function(t){return f.a.get(e+t)},create:function(t){return f.a.post(e,t)},update:function(t,a){return f.a.put(e+t,a)},delete:function(t){return f.a.delete(e+t)},deleteall:function(){return f.a.delete(e)}}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d+"filme/";return{fetchAll:function(){return f.a.get(e)},fetchById:function(t){return f.a.get(e+t)},create:function(t){return f.a.post(e,t)},update:function(t,a){return f.a.put(e+t,a)},delete:function(t){return f.a.delete(e+t)},deleteall:function(){return f.a.delete(e)}}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d+"locacao/";return{fetchAll:function(){return f.a.get(e)},fetchById:function(t){return f.a.get(e+t)},create:function(t){return f.a.post(e,t)},update:function(t,a){return f.a.put(e+t,a)},delete:function(t){return f.a.delete(e+t)},deleteall:function(){return f.a.delete(e)}}},O="CREATE",v="UPDATE",j="DELETE",h="FETCH_ALL",C=function(e){return Object(s.a)(Object(s.a)({},e),{},{age:parseInt(e.age?e.age:0)})},y={list:[]},I="CREATE",T="UPDATE",x="DELETE",L="FETCH_ALL",S=function(e){return Object(s.a)(Object(s.a)({},e),{},{age:parseInt(e.age?e.age:0)})},A=function(e,t){return function(a){p().delete(e).then((function(n){a({type:x,payload:e}),t()})).catch((function(e){return console.log(e)}))}},D={list:[]},w="CREATE",M="UPDATE",N="DELETE",F="FETCH_ALL",Y=function(e){return Object(s.a)(Object(s.a)({},e),{},{age:parseInt(e.age?e.age:0)})},U=function(e,t){return function(a){b().delete(e).then((function(n){a({type:N,payload:e}),t()})).catch((function(e){return console.log(e)}))}},k={list:[]},G="CREATE",W="UPDATE",_="DELETE",z="FETCH_ALL",V=function(e){return Object(s.a)(Object(s.a)({},e),{},{age:parseInt(e.age?e.age:0)})},R=function(e,t){return function(a){g().delete(e).then((function(n){a({type:_,payload:e}),t()})).catch((function(e){return console.log(e)}))}},P={list:[]},B=Object(l.c)({usuario:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(s.a)(Object(s.a)({},e),{},{list:Object(u.a)(t.payload)});case O:return Object(s.a)(Object(s.a)({},e),{},{list:[].concat(Object(u.a)(e.list),[t.payload])});case v:return Object(s.a)(Object(s.a)({},e),{},{list:e.list.map((function(e){return e.id==t.payload.id?t.payload:e}))});case j:return Object(s.a)(Object(s.a)({},e),{},{list:e.list.filter((function(e){return e.id!=t.payload}))});default:return e}},genero:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(s.a)(Object(s.a)({},e),{},{list:Object(u.a)(t.payload)});case I:return Object(s.a)(Object(s.a)({},e),{},{list:[].concat(Object(u.a)(e.list),[t.payload])});case T:return Object(s.a)(Object(s.a)({},e),{},{list:e.list.map((function(e){return e.id==t.payload.id?t.payload:e}))});case x:return Object(s.a)(Object(s.a)({},e),{},{list:e.list.filter((function(e){return e.id!=t.payload}))});default:return e}},filme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(s.a)(Object(s.a)({},e),{},{list:Object(u.a)(t.payload)});case w:return Object(s.a)(Object(s.a)({},e),{},{list:[].concat(Object(u.a)(e.list),[t.payload])});case M:return Object(s.a)(Object(s.a)({},e),{},{list:e.list.map((function(e){return e.id==t.payload.id?t.payload:e}))});case N:return Object(s.a)(Object(s.a)({},e),{},{list:e.list.filter((function(e){return e.id!=t.payload}))});default:return e}},locacao:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(s.a)(Object(s.a)({},e),{},{list:Object(u.a)(t.payload)});case G:return Object(s.a)(Object(s.a)({},e),{},{list:[].concat(Object(u.a)(e.list),[t.payload])});case W:return Object(s.a)(Object(s.a)({},e),{},{list:e.list.map((function(e){return e.id==t.payload.id?t.payload:e}))});case _:return Object(s.a)(Object(s.a)({},e),{},{list:e.list.filter((function(e){return e.id!=t.payload}))});default:return e}}}),H=Object(l.e)(B,Object(l.d)(Object(l.a)(i.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),X=a(17),J=a(18),$=a(19),q=a(171),K=a(175),Q=a(5),Z=a(57),ee=function(e,t,a){var r=Object(n.useState)(e),c=Object(J.a)(r,2),o=c[0],l=c[1],i=Object(n.useState)({}),u=Object(J.a)(i,2),m=u[0],f=u[1];return{values:o,setValues:l,errors:m,setErrors:f,handleInputChange:function(e){var a=e.target,n=a.name,r=a.value,c=Object(Z.a)({},n,r);l(Object(s.a)(Object(s.a)({},o),c)),t(c)},resetForm:function(){l(Object(s.a)({},e)),f({}),a(0)}}},te=a(16),ae={usuario:"",senha:""},ne={createUsuarios:function(e,t){return function(a){e=C(e),E().create(e).then((function(e){a({type:O,payload:e.data}),t()})).catch((function(e){return console.log(e)}))}},updateUsuario:function(e,t,a){return function(n){t=C(t),E().update(e,t).then((function(r){n({type:v,payload:Object(s.a)({id:e},t)}),a()})).catch((function(e){return console.log(e)}))}}},re=Object(X.b)((function(e){return{usuarioList:e.usuario.list}}),ne)(Object(Q.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),minWidth:230}},formControl:{margin:e.spacing(1),minWidth:230},smMargin:{margin:e.spacing(1)}}}))((function(e){var t=e.classes,a=Object($.a)(e,["classes"]),c=Object(te.useToasts)().addToast,o=ee(ae,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=Object(s.a)({},u);"usuario"in e&&(t.usuario=e.usuario?"":"Campo Obrigat\xf3rio."),m(Object(s.a)({},t))}),a.setCurrentId),l=o.values,i=o.setValues,u=o.errors,m=o.setErrors,f=o.handleInputChange,d=o.resetForm;return Object(n.useEffect)((function(){0!=a.currentId&&(i(Object(s.a)({},a.usuarioList.find((function(e){return e.idUsuario==a.currentId})))),m({}))}),[a.currentId]),r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:t.root,onSubmit:function(e){e.preventDefault();var t=function(){d(),c("Cadastro realziado com sucesso!",{appearance:"success"})};0==a.currentId?a.createUsuarios(l,t):a.updateUsuario(a.currentId,l,t)},label:"teste"},"Cadastro de Usu\xe1rios",r.a.createElement(q.a,{container:!0},r.a.createElement(q.a,{Item:!0,xs:6},r.a.createElement(K.a,Object.assign({name:"usuario",variant:"outlined",label:"Usu\xe1rio",value:l.usuario,onChange:f},u.usuario&&{error:!0,helperText:u.usuario})),r.a.createElement(K.a,Object.assign({name:"senha",variant:"outlined",label:"Senha",type:"password",value:l.senha,onChange:f},u.senha&&{error:!0,helperText:u.senha})),r.a.createElement("div",null,r.a.createElement("button",{variant:"contained",color:"primary",type:"submit",className:t.smMargin},"Cadastrar")))))}))),ce=a(176),oe=a(177),le=a(178),ie=a(179),ue=a(183),se=a(180),me=a(181),fe=a(139),de=a(34),Ee=a.n(de),pe=a(35),be=a.n(pe),ge={fetchAllUsuarios:function(){return function(e){E().fetchAll().then((function(t){e({type:h,payload:t.data})})).catch((function(e){return console.log(e)}))}},deleteUsuario:function(e,t){return function(a){E().delete(e).then((function(n){a({type:j,payload:e}),t()})).catch((function(e){return console.log(e)}))}}},Oe=Object(X.b)((function(e){return{usuarioList:e.usuario.list}}),ge)(Object(Q.a)((function(e){return{root:{"& . MuiTableCell-head":{fontSize:"1.25rem"}},paper:{margin:e.spacing(2),padding:e.spacing(2)}}}))((function(e){var t=e.classes,a=Object($.a)(e,["classes"]),c=Object(n.useState)(0),o=Object(J.a)(c,2),l=o[0],i=o[1];Object(n.useEffect)((function(){a.fetchAllUsuarios()}),[]);var u=Object(te.useToasts)().addToast;return r.a.createElement(ce.a,{className:t.paper},r.a.createElement(q.a,{container:!0},r.a.createElement(q.a,{item:!0,xs:6},r.a.createElement(re,{currentId:l,setCurrentId:i})),r.a.createElement(q.a,{item:!0,xs:6},r.a.createElement(oe.a,null,r.a.createElement("table",null,r.a.createElement(le.a,{className:t.root},r.a.createElement(ie.a,null,r.a.createElement(ue.a,null,"Usuarios"),r.a.createElement("tableCell",null))),r.a.createElement(se.a,null,a.usuarioList.map((function(e,t){return r.a.createElement(ie.a,{key:t},r.a.createElement(ue.a,null,e.usuario),r.a.createElement("tableCell",null,r.a.createElement(me.a,{variant:"Text"},r.a.createElement(fe.a,null,r.a.createElement(Ee.a,{color:"primary",onClick:function(){i(e.idUsuario)}})," "),r.a.createElement(fe.a,null,r.a.createElement(be.a,{color:"secondary",onClick:function(){return t=e.idUsuario,void(window.confirm("Confirmar exclus\xe3o do registro?")&&a.deleteUsuario(t,(function(){return u("Exclus\xe3o realizada com sucesso!",{appearance:"info"})})));var t}})," "))))}))))))))}))),ve=a(137),je=a(143),he=a(140),Ce=a(184),ye=a(138),Ie=a(25),Te=a.n(Ie),xe={nome:"",dataCriacao:"",ativo:""},Le={createGeneros:function(e,t){return function(a){e=S(e),p().create(e).then((function(e){a({type:I,payload:e.data}),t()})).catch((function(e){return console.log(e)}))}},updateGenero:function(e,t,a){return function(n){t=S(t),p().update(e,t).then((function(r){n({type:T,payload:Object(s.a)({id:e},t)}),a()})).catch((function(e){return console.log(e)}))}},deleteGenero:A},Se=Object(X.b)((function(e){return{generoList:e.genero.list}}),Le)(Object(Q.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),minWidth:230}},formControl:{margin:e.spacing(1),minWidth:230},smMargin:{margin:e.spacing(1)}}}))((function(e){var t=e.classes,a=Object($.a)(e,["classes"]),c=Object(te.useToasts)().addToast,o=ee(xe,(function(){var e=Object(s.a)({},u);m(Object(s.a)({},e))}),a.setCurrentId),l=o.values,i=o.setValues,u=o.errors,m=o.setErrors,f=o.handleInputChange,d=o.resetForm,E=r.a.useRef(null),p=r.a.useState(0),b=Object(J.a)(p,2),g=b[0],O=b[1];r.a.useEffect((function(){O(E.current.offsetWidth)}),[]);return Object(n.useEffect)((function(){console.log(a.currentId),0!=a.currentId&&(i(Object(s.a)({},a.generoList.find((function(e){return e.id==a.currentId})))),m({}))}),[a.currentId]),r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:t.root,onSubmit:function(e){e.preventDefault();var t=function(){d(),c("G\xeanero cadastrado com sucesso!",{appearance:"success"})};l.dataCriacao=Te()().format("YYYY-MM-DD"),0==a.currentId?a.createGeneros(l,t):a.updateGenero(a.currentId,l,t)}},"Cadastro de G\xeaneros",r.a.createElement(q.a,{container:!0},r.a.createElement(q.a,{Item:!0,xs:6},r.a.createElement(K.a,Object.assign({name:"nome",variant:"outlined",label:"Nome",value:l.nome,onChange:f},u.nome&&{error:!0,helperText:u.nome})),r.a.createElement(ve.a,Object.assign({variant:"outlined",className:t.formControl},u.ativo&&{error:!0}),r.a.createElement(je.a,{ref:E},"Situa\xe7\xe3o"),r.a.createElement(he.a,{name:"ativo",value:l.ativo,onChange:f,labelWidth:g},r.a.createElement(Ce.a,{value:""},"Selecione"),r.a.createElement(Ce.a,{value:"Ativo"},"Ativo"),r.a.createElement(Ce.a,{value:"Inativo"},"Inativo")),u.ativo&&r.a.createElement(ye.a,null,u.ativo)),r.a.createElement("div",null,r.a.createElement("button",{variant:"contained",color:"primary",name:"incluir",type:"submit",className:t.smMargin},"Submit"),r.a.createElement("button",{variant:"contained",name:"deletar",type:"button",className:t.smMargin,onClick:function(){window.confirm("Confirmar exclus\xe3o dos registros?")&&a.generoList.map((function(e,t){a.deleteGenero(e.id,(function(){return c("Exclus\xe3o realizada com sucesso!",{appearance:"info"})}))}))}},"Excluir Lista")))))}))),Ae={fetchAllGeneros:function(){return function(e){p().fetchAll().then((function(t){e({type:L,payload:t.data})})).catch((function(e){return console.log(e)}))}},deleteGenero:A},De=Object(X.b)((function(e){return{generoList:e.genero.list}}),Ae)(Object(Q.a)((function(e){return{root:{"& . MuiTableCell-head":{fontSize:"1.25rem"}},paper:{margin:e.spacing(2),padding:e.spacing(2)}}}))((function(e){var t=e.classes,a=Object($.a)(e,["classes"]),c=Object(n.useState)(0),o=Object(J.a)(c,2),l=o[0],i=o[1];Object(n.useEffect)((function(){a.fetchAllGeneros()}),[]);var u=Object(te.useToasts)().addToast;return r.a.createElement(ce.a,{className:t.paper},r.a.createElement(q.a,{container:!0},r.a.createElement(q.a,{item:!0,xs:6},r.a.createElement(Se,{currentId:l,setCurrentId:i})),r.a.createElement(q.a,{item:!0,xs:6},r.a.createElement(oe.a,null,r.a.createElement("table",null,r.a.createElement(le.a,{className:t.root},r.a.createElement(ie.a,null,r.a.createElement(ue.a,null,"Nome"),r.a.createElement(ue.a,null,"Data Cria\xe7\xe3o"),r.a.createElement(ue.a,null,"Situa\xe7\xe3o"),r.a.createElement("tableCell",null))),r.a.createElement(se.a,null,a.generoList.map((function(e,t){return r.a.createElement(ie.a,{key:t},r.a.createElement(ue.a,null,e.nome),r.a.createElement(ue.a,null," ",Te()(e.dataCriacao).format("DD-MM-YYYY")," "),r.a.createElement(ue.a,null,e.ativo),r.a.createElement("tableCell",null,r.a.createElement(me.a,{variant:"Text"},r.a.createElement(fe.a,null,r.a.createElement(Ee.a,{color:"primary",onClick:function(){i(e.id)}})," "),r.a.createElement(fe.a,null,r.a.createElement(be.a,{color:"secondary",onClick:function(){return t=e.id,void(window.confirm("Confirmar exclus\xe3o do g\xeanero?")&&a.deleteGenero(t,(function(){return u("Exclus\xe3o realizada com sucesso!",{appearance:"info"})})));var t}})," "))))}))))))))}))),we={nome:"",dataCriacao:"",idGenero:"",ativo:""},Me={createFilmes:function(e,t){return function(a){e=Y(e),b().create(e).then((function(e){a({type:w,payload:e.data}),t()})).catch((function(e){return console.log(e)}))}},updateFilme:function(e,t,a){return function(n){t=Y(t),b().update(e,t).then((function(r){n({type:M,payload:Object(s.a)({id:e},t)}),a()})).catch((function(e){return console.log(e)}))}},deleteFilme:U},Ne=Object(X.b)((function(e){return{filmeList:e.filme.list}}),Me)(Object(Q.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),minWidth:230}},formControl:{margin:e.spacing(1),minWidth:230},smMargin:{margin:e.spacing(1)}}}))((function(e){var t=e.classes,a=Object($.a)(e,["classes"]),c=Object(te.useToasts)().addToast,o=ee(we,(function(){var e=Object(s.a)({},u);m(Object(s.a)({},e))}),a.setCurrentId),l=o.values,i=o.setValues,u=o.errors,m=o.setErrors,f=o.handleInputChange,d=o.resetForm,E=r.a.useRef(null),p=r.a.useState(0),b=Object(J.a)(p,2),g=b[0],O=b[1];r.a.useEffect((function(){O(E.current.offsetWidth)}),[]);return Object(n.useEffect)((function(){0!=a.currentId&&(i(Object(s.a)({},a.filmeList.find((function(e){return e.id==a.currentId})))),m({}))}),[a.currentId]),Object(n.useEffect)((function(){}),[]),r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:t.root,onSubmit:function(e){e.preventDefault();var t=function(){d(),c("Submitted successfully",{appearance:"success"})};l.dataCriacao=Te()().format("YYYY-MM-DD"),0==a.currentId?a.createFilmes(l,t):a.updateFilme(a.currentId,l,t)}},r.a.createElement(q.a,{container:!0},r.a.createElement(q.a,{Item:!0,xs:6},r.a.createElement(K.a,Object.assign({name:"nome",variant:"outlined",label:"Nome",value:l.nome,onChange:f},u.nome&&{error:!0,helperText:u.nome})),r.a.createElement(ve.a,Object.assign({variant:"outlined",className:t.formControl},u.idGenero&&{error:!0}),r.a.createElement(je.a,{ref:E},"Genero"),r.a.createElement(he.a,{name:"genero",value:l.ativo,onChange:f,labelWidth:g},r.a.createElement(Ce.a,{value:""},"Selecione")),u.ativo&&r.a.createElement(ye.a,null,u.ativo)),r.a.createElement(ve.a,Object.assign({variant:"outlined",className:t.formControl},u.ativo&&{error:!0}),r.a.createElement(je.a,{ref:E},"Situa\xe7\xe3o"),r.a.createElement(he.a,{name:"ativo",value:l.ativo,onChange:f,labelWidth:g},r.a.createElement(Ce.a,{value:""},"Selecione"),r.a.createElement(Ce.a,{value:"Ativo"},"Ativo"),r.a.createElement(Ce.a,{value:"Inativo"},"Inativo")),u.ativo&&r.a.createElement(ye.a,null,u.ativo)),r.a.createElement("div",null,r.a.createElement("button",{variant:"contained",color:"primary",name:"incluir",type:"submit",className:t.smMargin},"Submit"),r.a.createElement("button",{variant:"contained",name:"deletar",type:"button",className:t.smMargin,onClick:function(){window.confirm("Confirmar exclus\xe3o dos registros?")&&a.filmeList.map((function(e,t){a.deleteFilme(e.id,(function(){return c("Exclus\xe3o realizada com sucesso!",{appearance:"info"})}))}))}},"Excluir Lista")))))}))),Fe={fetchAllFilmes:function(){return function(e){b().fetchAll().then((function(t){e({type:F,payload:t.data})})).catch((function(e){return console.log(e)}))}},deleteFilme:U},Ye=Object(X.b)((function(e){return{filmeList:e.filme.list}}),Fe)(Object(Q.a)((function(e){return{root:{"& . MuiTableCell-head":{fontSize:"1.25rem"}},paper:{margin:e.spacing(2),padding:e.spacing(2)}}}))((function(e){var t=e.classes,a=Object($.a)(e,["classes"]),c=Object(n.useState)(0),o=Object(J.a)(c,2),l=o[0],i=o[1];Object(n.useEffect)((function(){a.fetchAllFilmes()}),[]);var u=Object(te.useToasts)().addToast;return r.a.createElement(ce.a,{className:t.paper},r.a.createElement(q.a,{container:!0},r.a.createElement(q.a,{item:!0,xs:6},r.a.createElement(Ne,{currentId:l,setCurrentId:i})),r.a.createElement(q.a,{item:!0,xs:6},r.a.createElement(oe.a,null,r.a.createElement("table",null,r.a.createElement(le.a,{className:t.root},r.a.createElement(ie.a,null,r.a.createElement(ue.a,null,"Nome"),r.a.createElement(ue.a,null,"Data Cria\xe7\xe3o"),r.a.createElement(ue.a,null,"Gen\xearo"),r.a.createElement(ue.a,null,"Situa\xe7\xe3o"),r.a.createElement("tableCell",null))),r.a.createElement(se.a,null,a.filmeList&&a.filmeList.map((function(e,t){return r.a.createElement(ie.a,{key:t},r.a.createElement(ue.a,null,e.nome),r.a.createElement(ue.a,null," ",Te()(e.dataCriacao).format("DD-MM-YYYY")," "),r.a.createElement(ue.a,null,e.generoId),r.a.createElement(ue.a,null,e.ativo),r.a.createElement("tableCell",null,r.a.createElement(me.a,{variant:"Text"},r.a.createElement(fe.a,null,r.a.createElement(Ee.a,{color:"primary",onClick:function(){i(e.id)}})," "),r.a.createElement(fe.a,null,r.a.createElement(be.a,{color:"secondary",onClick:function(){return t=e.id,void(window.confirm("Confirmar exclus\xe3o do registro?")&&a.deleteFilme(t,(function(){return u("Exclus\xe3o realizada com sucesso!",{appearance:"info"})})));var t}})," "))))}))))))))}))),Ue={nome:"",dataCriacao:"",idGenero:"",ativo:""},ke={createLocacao:function(e,t){return function(a){e=V(e),g().create(e).then((function(e){a({type:G,payload:e.data}),t()})).catch((function(e){return console.log(e)}))}},updateLocacao:function(e,t,a){return function(n){t=V(t),g().update(e,t).then((function(r){n({type:W,payload:Object(s.a)({id:e},t)}),a()})).catch((function(e){return console.log(e)}))}},deleteLocacao:R},Ge=Object(X.b)((function(e){return{locacaoList:e.locacao.list}}),ke)(Object(Q.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),minWidth:230}},formControl:{margin:e.spacing(1),minWidth:230},smMargin:{margin:e.spacing(1)}}}))((function(e){var t=e.classes,a=Object($.a)(e,["classes"]),c=Object(te.useToasts)().addToast,o=ee(Ue,(function(){var e=Object(s.a)({},u);m(Object(s.a)({},e))}),a.setCurrentId),l=o.values,i=o.setValues,u=o.errors,m=o.setErrors,f=o.handleInputChange,d=o.resetForm,E=r.a.useRef(null),p=r.a.useState(0),b=Object(J.a)(p,2),g=b[0],O=b[1];r.a.useEffect((function(){O(E.current.offsetWidth)}),[]);return Object(n.useEffect)((function(){0!=a.currentId&&(i(Object(s.a)({},a.locacaoList.find((function(e){return e.id==a.currentId})))),m({}))}),[a.currentId]),Object(n.useEffect)((function(){}),[]),r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:t.root,onSubmit:function(e){e.preventDefault();var t=function(){d(),c("Submitted successfully",{appearance:"success"})};l.dataCriacao=Te()().format("YYYY-MM-DD"),0==a.currentId?a.createlocacao(l,t):a.updatelocacao(a.currentId,l,t)}},r.a.createElement(q.a,{container:!0},r.a.createElement(q.a,{Item:!0,xs:6},r.a.createElement(ve.a,Object.assign({variant:"outlined",className:t.formControl},u.idGenero&&{error:!0}),r.a.createElement(je.a,{ref:E},"Filme"),r.a.createElement(he.a,{name:"genero",value:l.ativo,onChange:f,labelWidth:g},r.a.createElement(Ce.a,{value:""},"Selecione")),u.ativo&&r.a.createElement(ye.a,null,u.ativo)),r.a.createElement(K.a,Object.assign({name:"cpf",variant:"outlined",label:"CPF",value:l.cpf,onChange:f},u.cpf&&{error:!0,helperText:u.cpf})),r.a.createElement("div",null,r.a.createElement("button",{variant:"contained",color:"primary",name:"incluir",type:"submit",className:t.smMargin},"Submit"),r.a.createElement("button",{variant:"contained",name:"deletar",type:"button",className:t.smMargin,onClick:function(){window.confirm("Confirmar exclus\xe3o dos registros?")&&a.locacaoList.map((function(e,t){a.deleteLocacao(e.id,(function(){return c("Exclus\xe3o realizada com sucesso!",{appearance:"info"})}))}))}},"Excluir Lista")))))}))),We={fetchAllLocacao:function(){return function(e){g().fetchAll().then((function(t){e({type:z,payload:t.data})})).catch((function(e){return console.log(e)}))}},deleteLocacao:R},_e=Object(X.b)((function(e){return{locacaoList:e.locacao.list}}),We)(Object(Q.a)((function(e){return{root:{"& . MuiTableCell-head":{fontSize:"1.25rem"}},paper:{margin:e.spacing(2),padding:e.spacing(2)}}}))((function(e){var t=e.classes,a=Object($.a)(e,["classes"]),c=Object(n.useState)(0),o=Object(J.a)(c,2),l=o[0],i=o[1];Object(n.useEffect)((function(){a.fetchAllLocacao()}),[]);var u=Object(te.useToasts)().addToast;return r.a.createElement(ce.a,{className:t.paper},r.a.createElement(q.a,{container:!0},r.a.createElement(q.a,{item:!0,xs:6},r.a.createElement(Ge,{currentId:l,setCurrentId:i})),r.a.createElement(q.a,{item:!0,xs:6},r.a.createElement(oe.a,null,r.a.createElement("table",null,r.a.createElement(le.a,{className:t.root},r.a.createElement(ie.a,null,r.a.createElement(ue.a,null,"FIlme"),r.a.createElement(ue.a,null,"CPF"),r.a.createElement(ue.a,null,"Data Cria\xe7\xe3o"),r.a.createElement("tableCell",null))),r.a.createElement(se.a,null,a.locacaoList&&a.locacaoList.map((function(e,t){return r.a.createElement(ie.a,{key:t},r.a.createElement(ue.a,null,e.filmeId),r.a.createElement(ue.a,null,e.cpf),r.a.createElement(ue.a,null," ",Te()(e.dataCriacao).format("DD-MM-YYYY")," "),r.a.createElement(ue.a,null,e.ativo),r.a.createElement("tableCell",null,r.a.createElement(me.a,{variant:"Text"},r.a.createElement(fe.a,null,r.a.createElement(Ee.a,{color:"primary",onClick:function(){i(e.id)}})," "),r.a.createElement(fe.a,null,r.a.createElement(be.a,{color:"secondary",onClick:function(){return t=e.id,void(window.confirm("Confirmar exclus\xe3o do registro?")&&a.deleteLocacao(t,(function(){return u("Exclus\xe3o realizada com sucesso!",{appearance:"info"})})));var t}})," "))))}))))))))}))),ze=a(182),Ve=a(49),Re=a(15);var Pe=function(){return r.a.createElement(Ve.a,null,r.a.createElement(X.a,{store:H},r.a.createElement(te.ToastProvider,{autoDismiss:!0},r.a.createElement(ze.a,{maxWidth:"lg"},r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(Ve.b,{to:"/usuario"},"Usu\xe1rios ")),r.a.createElement("li",null,r.a.createElement(Ve.b,{to:"/genero"},"G\xeaneros ")),r.a.createElement("li",null,r.a.createElement(Ve.b,{to:"/filme"},"Filmes ")),r.a.createElement("li",null,r.a.createElement(Ve.b,{to:"/locacao"},"Loca\xe7\xf5es ")))),r.a.createElement("hr",null),r.a.createElement(Re.c,null,r.a.createElement(Re.a,{path:"/usuario",exact:!0,component:Oe}),r.a.createElement(Re.a,{path:"/genero",exact:!0,component:De}),r.a.createElement(Re.a,{path:"/filme",exact:!0,component:Ye}),r.a.createElement(Re.a,{path:"/locacao",exact:!0,component:_e}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e,t,a){e.exports=a(134)}},[[99,1,2]]]);
//# sourceMappingURL=main.3445e526.chunk.js.map