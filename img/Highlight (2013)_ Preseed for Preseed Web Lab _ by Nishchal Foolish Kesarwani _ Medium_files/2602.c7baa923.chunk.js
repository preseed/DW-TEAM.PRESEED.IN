(self.webpackChunklite=self.webpackChunklite||[]).push([[2602],{82602:(e,n,t)=>{"use strict";t.d(n,{u:()=>ne,S:()=>te});var a,r=t(28655),i=t.n(r),l=t(63038),o=t.n(l),u=t(71439),c=t(67294),s=t(42963),m=t(46829),d=t(58875),g=t.n(d),p=t(9785),f=t(89894),h=t(80735),v=t(62630),E=t(28309),x=t(79208),b=t(90038);!function(e){e.Success="success",e.UploadError="uploadError",e.InvalidError="invalidError"}(a||(a={}));var y={height:"132px",width:"132px",display:"flex",flexDirection:"row",justifyContent:"center"},I=function(e){return{backgroundColor:e.baseColor.background.light,borderColor:e.baseColor.border.light,borderRadius:"3px",borderWidth:"1px",alignItems:"center",padding:"25px 20px 25px 20px",marginTop:"",borderStyle:"solid"}},C=function(e){var n=e.setImageId,t=e.initialImageId,r=e.source,i=(0,v.Av)(),l=(0,p.YC)().value,u=(0,E.Iq)(),s=c.useState({imageId:t,imageWidth:0,imageHeight:0}),m=o()(s,2),d=m[0],g=m[1],C=c.useState(null),w=o()(C,2),R=w[0],k=w[1],S=function(e){k(e),i.event("user.updateAvatarResult",{userId:null==l?void 0:l.id,source:r,uploadResult:e})},D=(0,x.JA)((function(e,t,r){var i=t.height,l=t.width,o=e.value.fileId;g({imageId:o,imageHeight:i,imageWidth:l}),i<parseInt("1000px",10)||l<parseInt("1000px",10)?(S(a.InvalidError),F()):(n(o),S(a.Success),r())}),(function(){S(a.UploadError)}),(function(){S(a.InvalidError)})),L=D.inputRef,T=D.fireClick,U=function(){i.event("user.updateAvatarClick",{userId:null==l?void 0:l.id,source:r,hasImage:!!d.imageId}),T()},F=function(){g({imageId:"",imageWidth:0,imageHeight:0}),n("")},P=function(){return c.createElement("div",{className:u([y,I])},c.createElement(f.xu,{alignContent:"center",textAlign:"center"},c.createElement(f.xu,null,"1000 x 1000"),c.createElement(f.xu,null,"pixels")))},A=function(){return c.createElement("div",{className:u([y])},c.createElement("div",{className:u((function(){return{backgroundImage:"url(".concat((0,b.W6)({miroId:d.imageId||"",width:d.imageWidth||0,height:d.imageHeight||0}),")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain",height:"100%",width:"100%",borderRadius:"3px",display:"flex",flexDirection:"row"}}))}))};return c.createElement(f.xu,{display:"flex",flexDirection:"column",maxWidth:"132px"},c.createElement(f.xu,{display:"inline-block",float:"right"},c.createElement((function(){return c.createElement(f.xu,{display:"inline-block",marginBottom:"15px"},d.imageId?c.createElement(A,null):c.createElement(P,null))}),null)),c.createElement((function(){return c.createElement(f.xu,{marginBottom:"10px"},c.createElement("input",{type:"file","aria-hidden":"true",ref:L,className:u({display:"none"})}),c.createElement(f.rU,{inline:!0,linkStyle:"OBVIOUS",onClick:U},"Add photo"))}),null),R===a.UploadError&&c.createElement((function(){return c.createElement(f.xu,{marginTop:"8px"},c.createElement(f.xu,{marginRight:"5px",display:"inline-block"},c.createElement(h.F,{scale:"S",color:"ERROR",tag:"p"},"We couldn't process your request.")),c.createElement(f.xu,{marginRight:"5px",display:"inline-block"},c.createElement(h.F,{scale:"S",tag:"p"},"Try again, or"," ",c.createElement(f.rU,{inline:!0,linkStyle:"OBVIOUS",href:"https://help.medium.com/hc/en-us"},"search our help center for support."))))}),null),R===a.InvalidError&&c.createElement((function(){return c.createElement(f.xu,{marginRight:"5px",display:"inline-block"},c.createElement(h.F,{scale:"S",color:"ERROR",tag:"p"},"That file doesn't meet our requirements. Try another."))}),null))},w=function(e){var n=e.label,t=e.onChangeFn,a=e.onBlurFn,r=e.value,i=e.errorMessage,l=e.characterCountLimit;return c.createElement(c.Fragment,null,c.createElement(f.xu,{marginBottom:"15px",textAlign:"left"},c.createElement(h.F,{scale:"L"},n)),c.createElement(f.nv,{scale:"L",onChange:t,value:r,errorMessage:i,onBlur:a,ariaLabel:n,characterCountLimit:l}))},R=t(22091),k=t(29035);function S(){var e=i()(["\n  mutation userCompleteProfileMutation(\n    $userId: ID!\n    $name: String!\n    $bio: String!\n    $imageId: String!\n  ) {\n    userCompleteProfile(userId: $userId, name: $name, bio: $bio, imageId: $imageId)\n  }\n"]);return S=function(){return e},e}function D(){var e=i()(["\n  fragment UserCompleteProfileDialog_user on User {\n    id\n    name\n    bio\n    imageId\n    hasCompletedProfile\n  }\n"]);return D=function(){return e},e}var L={min:3,max:50,message:"Please try another name that’s between 3 and 50 characters."},T={min:10,max:160,message:"Please try another description that’s between 10 and 160 characters."},U=function(e,n){var t=e.min,a=e.max,r=e.message;return function(e){var i=e.target.value;n(i.length<t||i.length>a?r:void 0)}},F=function(e){var n=(0,p.YC)().value;return{shouldShowDialog:g().canUseDOM&&!(0,k.ic)(navigator.userAgent)&&(null==n?void 0:n.id)===e.id}},P=function(e){var n=e.setHasCompletedProfile,t=e.user,a=(0,v.Av)(),r=(0,p.YC)().value,i=c.useState(!1),l=o()(i,2),u=l[0],s=l[1],m=B(),d=o()(m,1)[0],g=c.useState((null==t?void 0:t.imageId)||""),f=o()(g,2),E=f[0],x=f[1],b=c.useState((null==t?void 0:t.name)||""),y=o()(b,2),I=y[0],k=y[1],S=c.useState((null==t?void 0:t.bio)||""),D=o()(S,2),P=D[0],A=D[1],H=c.useState(),M=o()(H,2),O=M[0],N=M[1],V=c.useState(),$=o()(V,2),_=$[0],G=$[1],W=U(L,N),Y=U(T,G),q=c.useCallback((function(){r&&(s(!0),a.event("user.completedProfile",{userId:r.id,changedName:(null==t?void 0:t.name)!==I,changedBio:(null==t?void 0:t.bio)!==P,changedImage:(null==t?void 0:t.imageId)!==E,hasName:!!I,hasBio:!!P,hasImage:!!E}),d({variables:{userId:r.id,name:I,bio:P,imageId:E}}).then((function(){s(!1),n(!0)})))}),[r,d,s,t,I,P,E]),z=F(t).shouldShowDialog;return c.useEffect((function(){z&&a.event("user.presentedCompleteProfileDialog",{userId:null==r?void 0:r.id})}),[z]),z?c.createElement(c.Fragment,null,c.createElement(R.QH,{contentTag:"p",confirmText:"Continue",titleText:"Complete your profile",isDestructiveAction:!1,onConfirm:q,isVisible:!0,hide:function(){},withCloseButton:!1,showCancelButton:!1,disableConfirm:u},c.createElement(h.F,{scale:"L",color:"DARKER"},"Readers like learning a bit more about their writers"),c.createElement(R.xu,{marginTop:"48px",marginBottom:"28px",display:"flex",flexDirection:"row"},c.createElement(R.xu,{overflow:"visible",maxHeight:"200px"},c.createElement(C,{setImageId:x,initialImageId:E,source:"userCompleteProfileDialog"})),c.createElement(R.xu,{marginLeft:"48px",textAlign:"left"},c.createElement(R.xu,{key:"name"},c.createElement(w,{label:"Full name",onChangeFn:function(e){return k(e.target.value)},onBlurFn:W,value:I,errorMessage:O})),c.createElement(R.xu,{key:"bio",marginTop:"40px"},c.createElement(w,{label:"Bio (optional, max 160 characters)",onChangeFn:function(e){return A(e.target.value)},onBlurFn:Y,value:P,errorMessage:_,characterCountLimit:160})))))):null},A=(0,u.Ps)(D()),B=function(){return(0,m.useMutation)(H)},H=(0,u.Ps)(S()),M=t(23279),O=t.n(M),N=t(70561),V=t(51064),$=t(27952);function _(){var e=i()(["\n  query userDomainValidityQuery($domain: String!) {\n    userDomainValidity(domain: $domain)\n  }\n"]);return _=function(){return e},e}function G(){var e=i()(["\n  mutation createUserDomainMutation($domain: String!) {\n    userDomainLink(domain: $domain) {\n      __typename\n      ... on CustomDomainFailure {\n        reason\n      }\n    }\n  }\n"]);return G=function(){return e},e}function W(){var e=i()(["\n  fragment UserDomainOnboardingDialog_user on User {\n    id\n    hasDomain\n    username\n  }\n"]);return W=function(){return e},e}var Y=function(e){var n=e.user,t=e.isVisible,a=e.hide,r=e.redirectTo,i=e.redirectOnHide,l=void 0!==i&&i,u=e.refreshOnHide,s=void 0!==u&&u,m=(0,E.Iq)(),d=(0,v.Av)(),f=(0,p.YC)().value,x=(null==f?void 0:f.username)?function(e){return e.toLowerCase().replace(/[_.]/g,"-").replace(/[^a-z0-9-]/g,"").replace(/-+/g,"-").replace(/^-/,"").replace(/-$/,"")}(f.username):"",b=c.useState(x),y=o()(b,2),I=y[0],C=y[1],w=(0,V.O)(!1),k=o()(w,3),S=k[0],D=k[1],L=k[2],T=c.useState(!1),U=o()(T,2),F=U[0],P=U[1],A=c.useState(!1),B=o()(A,2),H=B[0],M=B[1],_=J(I),G=Z(I),W=c.useState(null),Y=o()(W,2),q=Y[0],Q=Y[1],j=(0,N.v9)((function(e){return e.config})).productName,X=z(),ee=o()(X,1)[0],ne=K(_),te=ne.isValidityLoading,ae=ne.validityResult,re=ne.checkValidity,ie=c.useCallback(O()((function(e){re(e),P(!1)}),500),[]),le=c.useCallback((function(e){var n=e.target.value;F||P(!0),Q(null),ie({domain:n}),C(n)}),[re,F]),oe=c.useCallback((function(){M(!0),d.event("user.claimedSubdomain",{userId:null==f?void 0:f.id,source:"subdomain_dialog",changedUsername:(null==f?void 0:f.username)!==I}),ee({variables:{domain:_}}).then((function(e){var n,t,r,i;if("CustomDomain"===(null===(n=e.data)||void 0===n||null===(t=n.userDomainLink)||void 0===t?void 0:t.__typename))D(),a();else if("CustomDomainFailure"===(null===(r=e.data)||void 0===r||null===(i=r.userDomainLink)||void 0===i?void 0:i.__typename))switch(e.data.userDomainLink.reason){case"AlreadyInUse":Q("This name is already in use.");break;case"Length":Q("The name must be between 3 and 63 characters long.");break;case"Characters":Q("The name can only include lowercase letters, numbers and hyphens.");break;case"StartEnd":Q("The name cannot begin or end in a hyphen");break;case"Internal":Q("There was a server error, please try again.");break;case"Invalid":Q("This name is invalid. Try another one.");break;default:Q("Something went wrong. Please try again with a different name.")}else Q("Something went wrong. Please try again with a different name.");M(!1)}))}),[ee,d,f,_,I]),ue=c.useCallback((function(){l&&r(G),L(),s&&window.location.reload()}),[G,l,s]),ce=!!f&&n.id===f.id&&!n.hasDomain&&g().canUseDOM;if(c.useEffect((function(){t&&ce&&d.event("user.presentedClaimSubdomainDialog",{userId:null==f?void 0:f.id})}),[t,ce]),!ce)return null;var se=!F&&!te&&(null==ae?void 0:ae.userDomainValidity);return c.createElement(c.Fragment,null,c.createElement(R.QH,{confirmText:"Claim URL",titleText:"Claim your ".concat(j," URL"),isDestructiveAction:!1,onConfirm:oe,isVisible:t,hide:a,withCloseButton:!1,showCancelButton:!1,secondaryButton:c.createElement(R.zx,{href:(0,$.mc)(),size:"REGULAR"},"Learn More"),hideOnConfirm:!1,disableConfirm:H||!!q||!se},"All your stories show up on your profile, and it now comes with a personalized URL. The name you pick below will also be your username on ",j,".",c.createElement(R.xu,{marginBottom:"14px",marginTop:"32px",display:"flex",flexDirection:"column"},c.createElement(R.nv,{ariaLabel:"Profile domain",onChange:le,value:I,errorMessage:null!=q?q:void 0,hideErrorIcon:!0}),!q&&c.createElement(R.xu,{display:"inline-block",marginTop:"8px"},c.createElement("table",{className:m({display:"table",marginLeft:"auto",marginRight:"auto",textAlign:"left",borderSpacing:"4px",tableLayout:"fixed",maxWidth:"100%"})},c.createElement("tbody",null,c.createElement("tr",null,c.createElement("td",{className:m({paddingRight:"4px",verticalAlign:"top"})},c.createElement(h.F,{color:"LIGHTER",scale:"M"},c.createElement("strong",null,"URL"))),c.createElement("td",null,c.createElement(h.F,{color:"LIGHTER",scale:"M"},_))),c.createElement("tr",null,c.createElement("td",{className:m({paddingRight:"4px",verticalAlign:"top"})},c.createElement(h.F,{color:"LIGHTER",scale:"M"},c.createElement("strong",null,"Username"))),c.createElement("td",{className:m({marginBottom:"12px",marginTop:"10px"})},c.createElement(h.F,{color:"LIGHTER",scale:"M"},"@",I))),c.createElement("tr",null,c.createElement("td",null),c.createElement("td",{className:m({visibility:I===n.username?"hidden":"visible"})},c.createElement(h.F,{color:"LIGHTER",scale:"M"},"@",n.username," will no longer be valid")))))))),c.createElement(R.QH,{confirmText:"Done",titleText:"You're all set.",isDestructiveAction:!1,onConfirm:function(){},isVisible:S,hide:ue,withCloseButton:!1,showCancelButton:!1},"Your profile is now available at your ",j," URL.",c.createElement(R.xu,null,c.createElement(R.xu,{display:"inline-block",marginTop:"28px"},c.createElement("table",{className:m({display:"table",marginLeft:"auto",marginRight:"auto",textAlign:"left",tableLayout:"fixed",maxWidth:"100%"})},c.createElement("tbody",null,c.createElement("tr",null,c.createElement("td",{className:m({marginBottom:"12px",paddingRight:"8px",verticalAlign:"top"})},c.createElement(h.F,{color:"LIGHTER",scale:"M"},c.createElement("strong",null,"URL"))),c.createElement("td",null,c.createElement(h.F,{color:"LIGHTER",scale:"M"},_))),c.createElement("tr",{className:m({paddingTop:"8px"})},c.createElement("td",{className:m({paddingRight:"8px",verticalAlign:"top"})},c.createElement(h.F,{color:"LIGHTER",scale:"M"},c.createElement("strong",null,"Username"))),c.createElement("td",{className:m({marginBottom:"12px"})},c.createElement(h.F,{color:"LIGHTER",scale:"M"},"@",I)))))))))},q=(0,u.Ps)(W()),z=function(){return(0,m.useMutation)(Q)},Q=(0,u.Ps)(G()),K=function(e){var n=(0,m.useQuery)(j,{variables:{domain:e}});return{isValidityLoading:n.loading,validityResult:n.data,checkValidity:n.refetch}},j=(0,u.Ps)(_()),J=function(e){var n=(0,N.v9)((function(e){return e.config.authDomain})).split(":")[0];return"".concat(e,".").concat(n)},Z=function(e){var n=(0,N.v9)((function(e){return e.config.authDomain}));return"https://".concat(e,".").concat(n)},X=t(77455);function ee(){var e=i()(["\n  fragment UserDomainFlow_user on User {\n    id\n    hasCompletedProfile\n    name\n    bio\n    imageId\n    ...UserCompleteProfileDialog_user\n    ...UserDomainOnboardingDialog_user\n  }\n  ","\n  ","\n"]);return ee=function(){return e},e}var ne=function(e){var n=e.user,t=e.redirectOnComplete,a=void 0!==t&&t,r=e.refreshOnComplete,i=void 0!==r&&r,l=e.forceVisible,u=void 0!==l&&l,m="true"===(0,X.K)().get("showDomainSetup")||u,d=(0,V.O)(m),g=o()(d,3),p=g[0],f=g[2],h=c.useState(n.hasCompletedProfile),v=o()(h,2),E=v[0],x=v[1],b=c.useState(null),y=o()(b,2),I=y[0],C=y[1],w=F(n).shouldShowDialog&&!E&&(!n.name||!n.bio||!n.imageId);return I?c.createElement(s.Z,{to:I,replace:!0}):c.createElement(c.Fragment,null,c.createElement(Y,{isVisible:p&&!w,hide:u?function(){}:f,user:n,redirectTo:C,redirectOnHide:a,refreshOnHide:i}),p&&w?c.createElement(P,{user:n,setHasCompletedProfile:x}):null)},te=(0,u.Ps)(ee(),A,q)},77455:(e,n,t)=>{"use strict";t.d(n,{K:()=>o});var a=t(63038),r=t.n(a),i=t(67294),l=t(51615),o=function(){var e=(0,l.TH)().search,n=i.useState(new URLSearchParams(e));return r()(n,1)[0]}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/2602.c7baa923.chunk.js.map