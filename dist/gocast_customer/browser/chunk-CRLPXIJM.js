import{A as f,E as u,G as s,I as t,J as n,K as m,L as h,M as x,N as C,O as o,P as d,Q as _,W as O,Y as M,aa as b,q as l,r as g,w as p,x as r,z as v}from"./chunk-RV3J3NET.js";import"./chunk-2NFLSA4Y.js";function y(c,i){if(c&1){let e=h();t(0,"div",11),x("click",function(){let S=l(e).$implicit,w=C();return g(w.onServiceSelect(S))}),t(1,"div",12),m(2,"img",13),n(),t(3,"div",14)(4,"h3"),o(5),n(),t(6,"p"),o(7),n()()()}if(c&2){let e=i.$implicit;r(2),s("src",e.imageUrl,p)("alt",e.title),r(3),d(e.title),r(2),d(e.description)}}var P=class c{constructor(i){this.router=i}userName="[Nombre]";services=[{id:"1",title:"Asistencia Vial",description:"Tu auxilio ante cualquier problema en el camino",imageUrl:"assets/images/srv.png",route:"/services/roadside"},{id:"2",title:"Asistencia Vial",description:"Consulta a un m\xE9dico sobre tu condici\xF3n f\xEDsica",imageUrl:"assets/images/srv1.png",route:"/services/medical"},{id:"3",title:"Mascotas",description:"Consulta sobre tu mascota",imageUrl:"assets/images/srv2.png",route:"/services/pets"}];ngOnInit(){}trackServiceById(i,e){return e.id}onServiceSelect(i){let e=i.route.split("/")[2];this.router.navigate(["/services",e])}static \u0275fac=function(e){return new(e||c)(v(b))};static \u0275cmp=f({type:c,selectors:[["app-service-form"]],decls:15,vars:3,consts:[[1,"service-page"],[1,"header"],[1,"header-content"],["src","assets/images/logob.png","alt","GoCast Logo",1,"header-logo"],[1,"main-content"],[1,"welcome-section"],[1,"subtitle"],[1,"contact-info"],["href","tel:+00000000000",1,"contact-button"],[1,"services-grid"],["class","service-card",3,"click",4,"ngFor","ngForOf","ngForTrackBy"],[1,"service-card",3,"click"],[1,"card-image"],[3,"src","alt"],[1,"card-content"]],template:function(e,a){e&1&&(t(0,"div",0)(1,"header",1)(2,"div",2),m(3,"img",3),n()(),t(4,"div",4)(5,"div",5)(6,"h1"),o(7),n(),t(8,"p",6),o(9,"\xBFComo te podemos ayudar?"),n()(),t(10,"div",7)(11,"a",8),o(12," Contacta GoCast: +00-000-0000000 "),n()(),t(13,"div",9),u(14,y,8,4,"div",10),n()()()),e&2&&(r(7),_("Hola, ",a.userName,""),r(7),s("ngForOf",a.services)("ngForTrackBy",a.trackServiceById))},dependencies:[M,O],styles:[".service-page[_ngcontent-%COMP%]{min-height:100vh;width:100vw;display:flex;flex-direction:column}.header[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 2px 4px #0000001a;padding:1rem 0;width:100%}.header-content[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:0 2rem}.header-logo[_ngcontent-%COMP%]{height:32px;width:auto}.main-content[_ngcontent-%COMP%]{flex:1;background-color:#3f51b5;padding:2rem}.welcome-section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 2rem;color:#fff}h1[_ngcontent-%COMP%]{font-size:2rem;margin:0;font-weight:400}.subtitle[_ngcontent-%COMP%]{font-size:1.1rem;margin:.5rem 0 0;opacity:.9}.contact-info[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 2rem;text-align:right}.contact-button[_ngcontent-%COMP%]{display:inline-block;background-color:#2196f3;color:#fff;padding:.75rem 1.5rem;border-radius:4px;text-decoration:none;font-size:.9rem;transition:background-color .3s}.contact-button[_ngcontent-%COMP%]:hover{background-color:#1976d2}.services-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;max-width:1200px;margin:0 auto}.service-card[_ngcontent-%COMP%]{background:#fff;border-radius:8px;overflow:hidden;cursor:pointer;transition:transform .3s,box-shadow .3s}.service-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 4px 8px #0003}.card-image[_ngcontent-%COMP%]{width:100%;height:200px;overflow:hidden}.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.card-content[_ngcontent-%COMP%]{padding:1.5rem}.card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .5rem;color:#333;font-size:1.25rem}.card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#666;font-size:.9rem;line-height:1.4}@media (max-width: 768px){.services-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;padding:0 1rem}.contact-info[_ngcontent-%COMP%]{text-align:center}}"]})};export{P as ServiceFormComponent};
