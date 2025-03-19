import{a as P,b as w,c as p,d as O,e as S,f as E,g as y,h as k,i as F,j as L}from"./chunk-VEUFIKNG.js";import{a as M}from"./chunk-PJQCE5WN.js";import{A as f,E as c,G as l,I as e,J as t,K as m,M as g,N as b,O as n,Q as h,X as C,Y as x,aa as _,ba as v,x as s,z as d}from"./chunk-RV3J3NET.js";import"./chunk-2NFLSA4Y.js";function N(i,a){i&1&&(e(0,"span",27),n(1,"Este campo es requerido"),t())}function G(i,a){i&1&&(e(0,"span",27),n(1,"Este campo es requerido"),t())}function T(i,a){if(i&1&&(e(0,"div",28),n(1),t()),i&2){let o=b();s(),h(" ",o.errorMessage," ")}}var I=class i{constructor(a,o,r){this.fb=a;this.authService=o;this.router=r;this.loginForm=this.fb.group({cedula:["",p.required],password:["",p.required],remember:[!1]})}loginForm;isLoading=!1;errorMessage="";showError(a){let o=this.loginForm.get(a);return o?o.invalid&&(o.dirty||o.touched):!1}onSubmit(){if(this.loginForm.valid){this.isLoading=!0,this.errorMessage="";let{cedula:a,password:o,remember:r}=this.loginForm.value;this.authService.login(a,o,r).subscribe({next:()=>{this.router.navigate(["/dashboard"])},error:u=>{this.errorMessage="Error al iniciar sesi\xF3n. Por favor, verifica tus credenciales.",this.isLoading=!1},complete:()=>{this.isLoading=!1}})}}goToForgotPassword(){this.router.navigate(["/auth/forgot-password"])}static \u0275fac=function(o){return new(o||i)(d(F),d(M),d(_))};static \u0275cmp=f({type:i,selectors:[["app-login"]],decls:40,vars:5,consts:[[1,"login-page"],[1,"header"],[1,"header-content"],["src","assets/images/logob.png","alt","GoCast Logo",1,"header-logo"],[1,"main-content"],[1,"logo-container"],["src","assets/images/logow.png","alt","GoCast Logo",1,"logo"],[1,"login-form-container"],[3,"ngSubmit","formGroup"],[1,"form-group"],["for","cedula"],[1,"input-container"],["type","text","id","cedula","formControlName","cedula","placeholder","Correo o c\xE9dula"],[1,"info-icon"],["class","error-text",4,"ngIf"],["for","password"],["type","password","id","password","formControlName","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"],[1,"remember-container"],[1,"switch"],["type","checkbox","formControlName","remember"],[1,"slider"],[1,"remember-text"],["type","submit",3,"disabled"],[1,"forgot-password"],["routerLink","/auth/register"],[3,"click"],["class","error-message",4,"ngIf"],[1,"error-text"],[1,"error-message"]],template:function(o,r){o&1&&(e(0,"div",0)(1,"header",1)(2,"div",2),m(3,"img",3),t()(),e(4,"div",4)(5,"div",5),m(6,"img",6),t(),e(7,"div",7)(8,"form",8),g("ngSubmit",function(){return r.onSubmit()}),e(9,"div",9)(10,"label",10),n(11,"ID"),t(),e(12,"div",11),m(13,"input",12),e(14,"span",13),n(15,"i"),t()(),c(16,N,2,0,"span",14),t(),e(17,"div",9)(18,"label",15),n(19,"Contrase\xF1a"),t(),e(20,"div",11),m(21,"input",16),e(22,"span",13),n(23,"i"),t()(),c(24,G,2,0,"span",14),t(),e(25,"div",17)(26,"label",18),m(27,"input",19)(28,"span",20),t(),e(29,"span",21),n(30,"Recu\xE9rdame"),t()(),e(31,"button",22),n(32," Ingresar "),t(),e(33,"div",23)(34,"a",24),n(35,"\xBFNo tienes cuenta? Registrate en GoCast"),t()(),e(36,"div",23)(37,"a",25),g("click",function(){return r.goToForgotPassword()}),n(38,"\xBFOlvidaste tu contrase\xF1a?"),t()(),c(39,T,2,1,"div",26),t()()()()),o&2&&(s(8),l("formGroup",r.loginForm),s(8),l("ngIf",r.showError("cedula")),s(8),l("ngIf",r.showError("password")),s(7),l("disabled",r.loginForm.invalid||r.isLoading),s(8),l("ngIf",r.errorMessage))},dependencies:[x,C,L,E,w,P,O,S,y,k,v],styles:['.login-page[_ngcontent-%COMP%]{min-height:100vh;width:100vw;display:flex;flex-direction:column;background-color:#3f51b5}.header[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 2px 4px #0000001a;padding:1rem 0;width:100%}.header-content[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:0 2rem}.header-logo[_ngcontent-%COMP%]{height:32px;width:auto}.main-content[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem}.logo-container[_ngcontent-%COMP%]{margin-bottom:2rem;text-align:center}.logo[_ngcontent-%COMP%]{width:200px;height:auto}.login-form-container[_ngcontent-%COMP%]{background:#fff;padding:2rem;border-radius:8px;width:100%;max-width:400px;box-shadow:0 4px 6px #0000001a}.form-group[_ngcontent-%COMP%]{margin-bottom:1.5rem}label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;color:#333;font-size:.9rem}.input-container[_ngcontent-%COMP%]{position:relative}input[_ngcontent-%COMP%]{width:100%;padding:.75rem;border:1px solid #ddd;border-radius:4px;font-size:1rem}input[_ngcontent-%COMP%]:focus{outline:none;border-color:#3f51b5}.info-icon[_ngcontent-%COMP%]{position:absolute;right:1rem;top:50%;transform:translateY(-50%);color:#666;cursor:help;font-style:italic}.remember-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;margin-bottom:1.5rem}.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:40px;height:24px}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;inset:0;background-color:#ccc;transition:.4s;border-radius:24px}.slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:16px;width:16px;left:4px;bottom:4px;background-color:#fff;transition:.4s;border-radius:50%}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#3f51b5}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translate(16px)}.remember-text[_ngcontent-%COMP%]{color:#666;font-size:.9rem}button[_ngcontent-%COMP%]{width:100%;padding:1rem;background:#3f51b5;color:#fff;border:none;border-radius:4px;font-size:1rem;cursor:pointer;transition:background-color .3s}button[_ngcontent-%COMP%]:hover:not(:disabled){background:#303f9f}button[_ngcontent-%COMP%]:disabled{background:#9fa8da;cursor:not-allowed}.forgot-password[_ngcontent-%COMP%]{text-align:center;margin-top:1rem}.forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3f51b5;text-decoration:none;font-size:.9rem}.forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.error-message[_ngcontent-%COMP%]{color:#f44336;font-size:.9rem;margin-top:1rem;text-align:center}.error-text[_ngcontent-%COMP%]{color:#f44336;font-size:.8rem;margin-top:.25rem;display:block}']})};export{I as LoginComponent};
