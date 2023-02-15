"use strict";(self.webpackChunkproway_computers=self.webpackChunkproway_computers||[]).push([[514],{7514:(pe,D,M)=>{M.r(D),M.d(D,{ContatoModule:()=>w});var P=M(6895),$=M(9541),g=M(433),s=M(1571);function R(n,l,e,t,r,a,h){try{var f=n[a](h),i=f.value}catch(o){return void e(o)}f.done?l(i):Promise.resolve(i).then(t,r)}const O=new s.OlP("ngx-mask config"),F=new s.OlP("new ngx-mask config"),j=new s.OlP("initial ngx-mask config"),Y={suffix:"",prefix:"",thousandSeparator:" ",decimalMarker:[".",","],clearIfNotMatch:!1,showTemplate:!1,showMaskTyped:!1,placeHolderCharacter:"_",dropSpecialCharacters:!0,hiddenInput:void 0,shownMaskExpression:"",separatorLimit:"",allowNegativeNumbers:!1,validation:!0,specialCharacters:["-","/","(",")",".",":"," ","+",",","@","[","]",'"',"'"],leadZeroDateTime:!1,triggerOnMaskChange:!1,maskFilled:new s.vpe,patterns:{0:{pattern:new RegExp("\\d")},9:{pattern:new RegExp("\\d"),optional:!0},X:{pattern:new RegExp("\\d"),symbol:"*"},A:{pattern:new RegExp("[a-zA-Z0-9]")},S:{pattern:new RegExp("[a-zA-Z]")},U:{pattern:new RegExp("[A-Z]")},L:{pattern:new RegExp("[a-z]")},d:{pattern:new RegExp("\\d")},m:{pattern:new RegExp("\\d")},M:{pattern:new RegExp("\\d")},H:{pattern:new RegExp("\\d")},h:{pattern:new RegExp("\\d")},s:{pattern:new RegExp("\\d")}}},Q=["Hh:m0:s0","Hh:m0","m0:s0"],z=["percent","Hh","s0","m0","separator","d0/M0/0000","d0/M0","d0","M0"];let J=(()=>{class n{constructor(){this._config=(0,s.f3M)(O),this.dropSpecialCharacters=this._config.dropSpecialCharacters,this.hiddenInput=this._config.hiddenInput,this.clearIfNotMatch=this._config.clearIfNotMatch,this.maskSpecialCharacters=this._config.specialCharacters,this.maskAvailablePatterns=this._config.patterns,this.prefix=this._config.prefix,this.suffix=this._config.suffix,this.thousandSeparator=this._config.thousandSeparator,this.decimalMarker=this._config.decimalMarker,this.showMaskTyped=this._config.showMaskTyped,this.placeHolderCharacter=this._config.placeHolderCharacter,this.validation=this._config.validation,this.separatorLimit=this._config.separatorLimit,this.allowNegativeNumbers=this._config.allowNegativeNumbers,this.leadZeroDateTime=this._config.leadZeroDateTime,this._shift=new Set,this.maskExpression="",this.actualValue="",this.shownMaskExpression="",this._formatWithSeparators=(e,t,r,a)=>{let h=[],f="";if(Array.isArray(r)){const _=new RegExp(r.map(p=>"[\\^$.|?*+()".indexOf(p)>=0?`\\${p}`:p).join("|"));h=e.split(_),f=e.match(_)?.[0]??""}else h=e.split(r),f=r;const i=h.length>1?`${f}${h[1]}`:"";let o=h[0]??"";const d=this.separatorLimit.replace(/\s/g,"");d&&+d&&(o="-"===o[0]?`-${o.slice(1,o.length).slice(0,d.length)}`:o.slice(0,d.length));const k=/(\d+)(\d{3})/;for(;t&&k.test(o);)o=o.replace(k,"$1"+t+"$2");return void 0===a?o+i:0===a?o:o+i.substring(0,a+1)},this.percentage=e=>Number(e)>=0&&Number(e)<=100,this.getPrecision=e=>{const t=e.split(".");return t.length>1?Number(t[t.length-1]):1/0},this.checkAndRemoveSuffix=e=>{for(let t=this.suffix?.length-1;t>=0;t--){const r=this.suffix.substring(t,this.suffix?.length);if(e.includes(r)&&t!==this.suffix?.length-1&&(t-1<0||!e.includes(this.suffix.substring(t-1,this.suffix?.length))))return e.replace(r,"")}return e},this.checkInputPrecision=(e,t,r)=>{if(t<1/0){if(Array.isArray(r)){const i=r.find(o=>o!==this.thousandSeparator);r=i||r[0]}const a=new RegExp(this._charToRegExpExpression(r)+`\\d{${t}}.*$`),f=(e.match(a)??[])[0]?.length??0;f-1>t&&(e=e.substring(0,e.length-(f-1-t))),0===t&&this._compareOrIncludes(e[e.length-1],r,this.thousandSeparator)&&(e=e.substring(0,e.length-1))}return e}}applyMaskWithPattern(e,t){const[r,a]=t;return this.customPattern=a,this.applyMask(e,r)}applyMask(e,t,r=0,a=!1,h=!1,f=(()=>{})){if(!t||"string"!=typeof e)return"";let i=0,o="",d=!1,k=!1,_=1,p=!1;e.slice(0,this.prefix.length)===this.prefix&&(e=e.slice(this.prefix.length,e.length)),this.suffix&&e?.length>0&&(e=this.checkAndRemoveSuffix(e));const u=e.toString().split("");if("IP"===t){const m=e.split(".");this.ipError=this._validIP(m),t="099.099.099.099"}const v=[];for(let m=0;m<e.length;m++)e[m]?.match("\\d")&&v.push(e[m]??"");if("CPF_CNPJ"===t&&(this.cpfCnpjError=11!==v.length&&14!==v.length,t=v.length>11?"00.000.000/0000-00":"000.000.000-00"),t.startsWith("percent")){if(e.match("[a-z]|[A-Z]")||e.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/)){e=this._stripToDecimal(e);const m=this.getPrecision(t);e=this.checkInputPrecision(e,m,this.decimalMarker)}e.indexOf(".")>0&&!this.percentage(e.substring(0,e.indexOf(".")))&&(e=`${e.substring(0,e.indexOf(".")-1)}${e.substring(e.indexOf("."),e.length)}`),o=this.percentage(e)?e:e.substring(0,e.length-1)}else if(t.startsWith("separator")){(e.match("[w\u0430-\u044f\u0410-\u042f]")||e.match("[\u0401\u0451\u0410-\u044f]")||e.match("[a-z]|[A-Z]")||e.match(/[-@#!$%\\^&*()_\xa3\xac'+|~=`{}\]:";<>.?/]/)||e.match("[^A-Za-z0-9,]"))&&(e=this._stripToDecimal(e)),e=e.length>1&&"0"===e[0]&&e[1]!==this.thousandSeparator&&!this._compareOrIncludes(e[1],this.decimalMarker,this.thousandSeparator)&&!h?e.slice(0,e.length-1):e,h&&(e=this._compareOrIncludes(e[e.length-1],this.decimalMarker,this.thousandSeparator)?e.slice(0,e.length-1):e);const m=this._charToRegExpExpression(this.thousandSeparator);let c='@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(m,"");if(Array.isArray(this.decimalMarker))for(const x of this.decimalMarker)c=c.replace(this._charToRegExpExpression(x),"");else c=c.replace(this._charToRegExpExpression(this.decimalMarker),"");const S=new RegExp("["+c+"]");(e.match(S)||1===e.length&&this._compareOrIncludes(e,this.decimalMarker,this.thousandSeparator))&&(e=e.substring(0,e.length-1));const A=this.getPrecision(t),H=(e=this.checkInputPrecision(e,A,this.decimalMarker)).replace(new RegExp(m,"g"),"");o=this._formatWithSeparators(H,this.thousandSeparator,this.decimalMarker,A);const Z=o.indexOf(",")-e.indexOf(","),C=o.length-e.length;if(C>0&&","!==o[r]){k=!0;let x=0;do{this._shift.add(r+x),x++}while(x<C)}else 0!==Z&&r>0&&!(o.indexOf(",")>=r&&r>3)||!(o.indexOf(".")>=r&&r>3)&&C<=0?(this._shift.clear(),k=!0,_=C,this._shift.add(r+=C)):this._shift.clear()}else for(let m=0,c=u[0];m<u.length&&i!==t.length;m++,c=u[m]??"")if(this._checkSymbolMask(c,t[i]??"")&&"?"===t[i+1])o+=c,i+=2;else if("*"===t[i+1]&&d&&this._checkSymbolMask(c,t[i+2]??""))o+=c,i+=3,d=!1;else if(this._checkSymbolMask(c,t[i]??"")&&"*"===t[i+1])o+=c,d=!0;else if("?"===t[i+1]&&this._checkSymbolMask(c,t[i+2]??""))o+=c,i+=3;else if(this._checkSymbolMask(c,t[i]??"")){if("H"===t[i]&&Number(c)>2){i+=1,this._shiftStep(t,i,u.length),m--,this.leadZeroDateTime&&(o+="0");continue}if("h"===t[i]&&"2"===o&&Number(c)>3){i+=1,m--;continue}if("m"===t[i]&&Number(c)>5){i+=1,this._shiftStep(t,i,u.length),m--,this.leadZeroDateTime&&(o+="0");continue}if("s"===t[i]&&Number(c)>5){i+=1,this._shiftStep(t,i,u.length),m--,this.leadZeroDateTime&&(o+="0");continue}const S=31;if("d"===t[i]&&(Number(c)>3&&this.leadZeroDateTime||Number(e.slice(i,i+2))>S||"/"===e[i+1])){i+=1,this._shiftStep(t,i,u.length),m--,this.leadZeroDateTime&&(o+="0");continue}if("M"===t[i]){const H=0===i&&(Number(c)>2||Number(e.slice(i,i+2))>12||"/"===e[i+1]),Z=e.slice(i-3,i-1).includes("/")&&("/"===e[i-2]&&Number(e.slice(i-1,i+1))>12&&"/"!==e[i]||"/"===e[i]||"/"===e[i-3]&&Number(e.slice(i-2,i))>12&&"/"!==e[i-1]||"/"===e[i-1]),C=Number(e.slice(i-3,i-1))<=S&&!e.slice(i-3,i-1).includes("/")&&"/"===e[i-1]&&(Number(e.slice(i,i+2))>12||"/"===e[i+1]),x=Number(e.slice(i-3,i-1))>S&&!e.slice(i-3,i-1).includes("/")&&!e.slice(i-2,i).includes("/")&&Number(e.slice(i-2,i))>12,de=Number(e.slice(i-3,i-1))<=S&&!e.slice(i-3,i-1).includes("/")&&"/"!==e[i-1]&&Number(e.slice(i-1,i+1))>12;if(Number(c)>1&&this.leadZeroDateTime||H||Z||C||x||de){i+=1,this._shiftStep(t,i,u.length),m--,this.leadZeroDateTime&&(o+="0");continue}}o+=c,i++}else" "===c&&" "===t[i]?(o+=c,i++):-1!==this.maskSpecialCharacters.indexOf(t[i]??"")?(o+=t[i],i++,this._shiftStep(t,i,u.length),m--):this.maskSpecialCharacters.indexOf(c)>-1&&this.maskAvailablePatterns[t[i]??""]&&this.maskAvailablePatterns[t[i]??""]?.optional?(!!u[i]&&"099.099.099.099"!==t&&"000.000.000-00"!==t&&"00.000.000/0000-00"!==t&&!t.match(/^9+\.0+$/)&&(o+=u[i]),i++,m--):"*"===this.maskExpression[i+1]&&this._findSpecialChar(this.maskExpression[i+2]??"")&&this._findSpecialChar(c)===this.maskExpression[i+2]&&d||"?"===this.maskExpression[i+1]&&this._findSpecialChar(this.maskExpression[i+2]??"")&&this._findSpecialChar(c)===this.maskExpression[i+2]&&d?(i+=3,o+=c):this.showMaskTyped&&this.maskSpecialCharacters.indexOf(c)<0&&c!==this.placeHolderCharacter&&(p=!0);o.length+1===t.length&&-1!==this.maskSpecialCharacters.indexOf(t[t.length-1]??"")&&(o+=t[t.length-1]);let N=r+1;for(;this._shift.has(N);)_++,N++;let E=a&&!t.startsWith("separator")?i:this._shift.has(r)?_:0;p&&E--,f(E,k),_<0&&this._shift.clear();let I=!1;h&&(I=u.every(m=>this.maskSpecialCharacters.includes(m)));let T=`${this.prefix}${I?"":o}${this.suffix}`;return 0===o.length&&(T=`${this.prefix}${o}`),T}_findSpecialChar(e){return this.maskSpecialCharacters.find(t=>t===e)}_checkSymbolMask(e,t){return this.maskAvailablePatterns=this.customPattern?this.customPattern:this.maskAvailablePatterns,(this.maskAvailablePatterns[t]?.pattern&&this.maskAvailablePatterns[t]?.pattern.test(e))??!1}_stripToDecimal(e){return e.split("").filter((t,r)=>{const a="string"==typeof this.decimalMarker?t===this.decimalMarker:this.decimalMarker.includes(t);return t.match("^-?\\d")||t===this.thousandSeparator||a||"-"===t&&0===r&&this.allowNegativeNumbers}).join("")}_charToRegExpExpression(e){return e&&(" "===e?"\\s":"[\\^$.|?*+()".indexOf(e)>=0?`\\${e}`:e)}_shiftStep(e,t,r){const a=/[*?]/g.test(e.slice(0,t))?r:t;this._shift.add(a+this.prefix.length||0)}_compareOrIncludes(e,t,r){return Array.isArray(t)?t.filter(a=>a!==r).includes(e):e===t}_validIP(e){return!(4===e.length&&!e.some((t,r)=>e.length!==r+1?""===t||Number(t)>255:""===t||Number(t.substring(0,3))>255))}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac}),n})();function W(){const n=(0,s.f3M)(j),l=(0,s.f3M)(F);return l instanceof Function?{...n,...l()}:{...n,...l}}let L=(()=>{class n extends J{constructor(){super(...arguments),this.maskExpression="",this.isNumberValue=!1,this.placeHolderCharacter="_",this.maskIsShown="",this.selStart=null,this.selEnd=null,this.writingValue=!1,this.maskChanged=!1,this.triggerOnMaskChange=!1,this.onChange=e=>{},this.document=(0,s.f3M)(P.K0),this._config=(0,s.f3M)(O),this._elementRef=(0,s.f3M)(s.SBq),this._renderer=(0,s.f3M)(s.Qsj)}applyMask(e,t,r=0,a=!1,h=!1,f=(()=>{})){if(!t)return e!==this.actualValue?this.actualValue:e;if(this.maskIsShown=this.showMaskTyped?this.showMaskInInput():"","IP"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),"CPF_CNPJ"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),!e&&this.showMaskTyped)return this.formControlResult(this.prefix),this.prefix+this.maskIsShown;const i=e&&"number"==typeof this.selStart?e[this.selStart]??"":"";let o="";if(void 0!==this.hiddenInput&&!this.writingValue){let p=this.actualValue.split("");""!==e&&p.length?"number"==typeof this.selStart&&"number"==typeof this.selEnd&&(e.length>p.length?p.splice(this.selStart,0,i):e.length<p.length&&(p.length-e.length==1?p.splice(this.selStart-1,1):p.splice(this.selStart,this.selEnd-this.selStart))):p=[],this.showMaskTyped&&(e=this.removeMask(e)),o=this.actualValue.length&&p.length<=e.length?this.shiftTypedSymbols(p.join("")):e}this.showMaskTyped&&(e=this.removeMask(e)),o=Boolean(o)&&o.length?o:e;const d=super.applyMask(o,t,r,a,h,f);if(this.actualValue=this.getActualValue(d),"."===this.thousandSeparator&&"."===this.decimalMarker&&(this.decimalMarker=","),this.maskExpression.startsWith("separator")&&!0===this.dropSpecialCharacters&&(this.maskSpecialCharacters=this.maskSpecialCharacters.filter(p=>!this._compareOrIncludes(p,this.decimalMarker,this.thousandSeparator))),this.formControlResult(d),!this.showMaskTyped)return this.hiddenInput&&d&&d.length?this.hideInput(d,this.maskExpression):d;const k=d.length,_=this.prefix+this.maskIsShown;if(this.maskExpression.includes("H")){const p=this._numberSkipedSymbols(d);return d+_.slice(k+p)}return"IP"===this.maskExpression||"CPF_CNPJ"===this.maskExpression?d+_:d+_.slice(k)}_numberSkipedSymbols(e){const t=/(^|\D)(\d\D)/g;let r=t.exec(e),a=0;for(;null!=r;)a+=1,r=t.exec(e);return a}applyValueChanges(e,t,r,a=(()=>{})){const h=this._elementRef.nativeElement;h.value=this.applyMask(h.value,this.maskExpression,e,t,r,a),h!==this._getActiveElement()&&this.clearIfNotMatchFn()}hideInput(e,t){return e.split("").map((r,a)=>this.maskAvailablePatterns&&this.maskAvailablePatterns[t[a]??""]&&this.maskAvailablePatterns[t[a]??""]?.symbol?this.maskAvailablePatterns[t[a]??""]?.symbol:r).join("")}getActualValue(e){const t=e.split("").filter((r,a)=>{const h=this.maskExpression[a]??"";return this._checkSymbolMask(r,h)||this.maskSpecialCharacters.includes(h)&&r===h});return t.join("")===e?t.join(""):e}shiftTypedSymbols(e){let t="";return(e&&e.split("").map((a,h)=>{if(this.maskSpecialCharacters.includes(e[h+1]??"")&&e[h+1]!==this.maskExpression[h+1])return t=a,e[h+1];if(t.length){const f=t;return t="",f}return a})||[]).join("")}numberToString(e){return e||0===e?Number(e).toLocaleString("fullwide",{useGrouping:!1,maximumFractionDigits:20}):String(e)}showMaskInInput(e){if(this.showMaskTyped&&this.shownMaskExpression){if(this.maskExpression.length!==this.shownMaskExpression.length)throw new Error("Mask expression must match mask placeholder length");return this.shownMaskExpression}if(this.showMaskTyped){if(e){if("IP"===this.maskExpression)return this._checkForIp(e);if("CPF_CNPJ"===this.maskExpression)return this._checkForCpfCnpj(e)}return this.maskExpression.replace(/\w/g,this.placeHolderCharacter)}return""}clearIfNotMatchFn(){const e=this._elementRef.nativeElement;this.clearIfNotMatch&&this.prefix.length+this.maskExpression.length+this.suffix.length!==e.value.replace(/_/g,"").length&&(this.formElementProperty=["value",""],this.applyMask(e.value,this.maskExpression))}set formElementProperty([e,t]){Promise.resolve().then(()=>this._renderer.setProperty(this._elementRef.nativeElement,e,t))}checkSpecialCharAmount(e){return e.split("").filter(r=>this._findSpecialChar(r)).length}removeMask(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters.concat("_").concat(this.placeHolderCharacter))}_checkForIp(e){if("#"===e)return`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;const t=[];for(let r=0;r<e.length;r++){const a=e[r]??"";!a||a.match("\\d")&&t.push(a)}return t.length<=3?`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>3&&t.length<=6?`${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>6&&t.length<=9?this.placeHolderCharacter:""}_checkForCpfCnpj(e){const t=`${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`,r=`${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}/${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`;if("#"===e)return t;const a=[];for(let h=0;h<e.length;h++){const f=e[h]??"";!f||f.match("\\d")&&a.push(f)}return a.length<=3?t.slice(a.length,t.length):a.length>3&&a.length<=6?t.slice(a.length+1,t.length):a.length>6&&a.length<=9?t.slice(a.length+2,t.length):a.length>9&&a.length<11?t.slice(a.length+3,t.length):11===a.length?"":12===a.length?r.slice(17===e.length?16:15,r.length):a.length>12&&a.length<=14?r.slice(a.length+4,r.length):""}_getActiveElement(e=this.document){const t=e?.activeElement?.shadowRoot;return t?.activeElement?this._getActiveElement(t):e.activeElement}formControlResult(e){this.writingValue||!this.triggerOnMaskChange&&this.maskChanged?this.maskChanged=!1:Array.isArray(this.dropSpecialCharacters)?this.onChange(this._toNumber(this._removeMask(this._removeSuffix(this._removePrefix(e)),this.dropSpecialCharacters))):this.onChange(this.dropSpecialCharacters?this._toNumber(this._checkSymbols(e)):this._removeSuffix(e))}_toNumber(e){if(!this.isNumberValue||""===e)return e;const t=Number(e);return Number.isNaN(t)?e:t}_removeMask(e,t){return e&&e.replace(this._regExpForRemove(t),"")}_removePrefix(e){return this.prefix?e&&e.replace(this.prefix,""):e}_removeSuffix(e){return this.suffix?e&&e.replace(this.suffix,""):e}_retrieveSeparatorValue(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters)}_regExpForRemove(e){return new RegExp(e.map(t=>`\\${t}`).join("|"),"gi")}_replaceDecimalMarkerToDot(e){const t=Array.isArray(this.decimalMarker)?this.decimalMarker:[this.decimalMarker];return e.replace(this._regExpForRemove(t),".")}_checkSymbols(e){if(""===e)return e;const t=this._retrieveSeparatorPrecision(this.maskExpression),r=this._replaceDecimalMarkerToDot(this._retrieveSeparatorValue(e));return this.isNumberValue?t?e===this.decimalMarker?null:this._checkPrecision(this.maskExpression,r):Number(r):r}_retrieveSeparatorPrecision(e){const t=e.match(new RegExp("^separator\\.([^d]*)"));return t?Number(t[1]):null}_checkPrecision(e,t){return e.indexOf("2")>0?Number(t).toFixed(2):Number(t)}}return n.\u0275fac=function(){let l;return function(t){return(l||(l=s.n5z(n)))(t||n)}}(),n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac}),n})(),G=(()=>{class n{constructor(){this.maskExpression="",this.specialCharacters=[],this.patterns={},this.prefix="",this.suffix="",this.thousandSeparator=" ",this.decimalMarker=".",this.dropSpecialCharacters=null,this.hiddenInput=null,this.showMaskTyped=null,this.placeHolderCharacter=null,this.shownMaskExpression=null,this.showTemplate=null,this.clearIfNotMatch=null,this.validation=null,this.separatorLimit=null,this.allowNegativeNumbers=null,this.leadZeroDateTime=null,this.triggerOnMaskChange=null,this.maskFilled=new s.vpe,this._maskValue="",this._position=null,this._maskExpressionArray=[],this._justPasted=!1,this.document=(0,s.f3M)(P.K0),this._maskService=(0,s.f3M)(L),this._config=(0,s.f3M)(O),this.onChange=e=>{},this.onTouch=()=>{}}ngOnChanges(e){const{maskExpression:t,specialCharacters:r,patterns:a,prefix:h,suffix:f,thousandSeparator:i,decimalMarker:o,dropSpecialCharacters:d,hiddenInput:k,showMaskTyped:_,placeHolderCharacter:p,shownMaskExpression:u,showTemplate:v,clearIfNotMatch:N,validation:E,separatorLimit:I,allowNegativeNumbers:T,leadZeroDateTime:m,triggerOnMaskChange:c}=e;if(t&&(t.currentValue!==t.previousValue&&!t.firstChange&&(this._maskService.maskChanged=!0),t.currentValue&&t.currentValue.split("||").length>1?(this._maskExpressionArray=t.currentValue.split("||").sort((S,A)=>S.length-A.length),this._setMask()):(this._maskExpressionArray=[],this._maskValue=t.currentValue||"",this._maskService.maskExpression=this._maskValue)),r){if(!r.currentValue||!Array.isArray(r.currentValue))return;this._maskService.maskSpecialCharacters=r.currentValue||[]}a&&a.currentValue&&(this._maskService.maskAvailablePatterns=a.currentValue),h&&(this._maskService.prefix=h.currentValue),f&&(this._maskService.suffix=f.currentValue),i&&(this._maskService.thousandSeparator=i.currentValue),o&&(this._maskService.decimalMarker=o.currentValue),d&&(this._maskService.dropSpecialCharacters=d.currentValue),k&&(this._maskService.hiddenInput=k.currentValue),_&&(this._maskService.showMaskTyped=_.currentValue),p&&(this._maskService.placeHolderCharacter=p.currentValue),u&&(this._maskService.shownMaskExpression=u.currentValue),v&&(this._maskService.showTemplate=v.currentValue),N&&(this._maskService.clearIfNotMatch=N.currentValue),E&&(this._maskService.validation=E.currentValue),I&&(this._maskService.separatorLimit=I.currentValue),T&&(this._maskService.allowNegativeNumbers=T.currentValue,this._maskService.allowNegativeNumbers&&(this._maskService.maskSpecialCharacters=this._maskService.maskSpecialCharacters.filter(S=>"-"!==S))),m&&(this._maskService.leadZeroDateTime=m.currentValue),c&&(this._maskService.triggerOnMaskChange=c.currentValue),this._applyMask()}validate({value:e}){if(!this._maskService.validation||!this._maskValue)return null;if(this._maskService.ipError)return this._createValidationError(e);if(this._maskService.cpfCnpjError)return this._createValidationError(e);if(this._maskValue.startsWith("separator")||z.includes(this._maskValue)||this._maskService.clearIfNotMatch)return null;if(Q.includes(this._maskValue))return this._validateTime(e);if(e&&e.toString().length>=1){let t=0;for(const r in this._maskService.maskAvailablePatterns)if(this._maskService.maskAvailablePatterns[r]?.optional&&(this._maskValue.indexOf(r)!==this._maskValue.lastIndexOf(r)?t+=this._maskValue.split("").filter(h=>h===r).join("").length:-1!==this._maskValue.indexOf(r)&&t++,-1!==this._maskValue.indexOf(r)&&e.toString().length>=this._maskValue.indexOf(r)||t===this._maskValue.length))return null;if(1===this._maskValue.indexOf("{")&&e.toString().length===this._maskValue.length+Number((this._maskValue.split("{")[1]??"").split("}")[0])-4||1===this._maskValue.indexOf("*")||1===this._maskValue.indexOf("?"))return null;if(this._maskValue.indexOf("*")>1&&e.toString().length<this._maskValue.indexOf("*")||this._maskValue.indexOf("?")>1&&e.toString().length<this._maskValue.indexOf("?")||1===this._maskValue.indexOf("{"))return this._createValidationError(e);if(-1===this._maskValue.indexOf("*")||-1===this._maskValue.indexOf("?")){const r=this._maskService.dropSpecialCharacters?this._maskValue.length-this._maskService.checkSpecialCharAmount(this._maskValue)-t:this._maskValue.length-t;if(e.toString().length<r)return this._createValidationError(e)}}return e&&this.maskFilled.emit(),null}onPaste(){this._justPasted=!0}onModelChange(e){(""===e||null==e)&&this._maskService.actualValue&&(this._maskService.actualValue=this._maskService.getActualValue(""))}onInput(e){const t=e.target;if(this._inputValue=t.value,this._setMask(),!this._maskValue)return void this.onChange(t.value);const r=1===t.selectionStart?t.selectionStart+this._maskService.prefix.length:t.selectionStart;let a=0,h=!1;if(this._maskService.applyValueChanges(r,this._justPasted,"Backspace"===this._code||"Delete"===this._code,(i,o)=>{this._justPasted=!1,a=i,h=o}),this._getActiveElement()!==t)return;this._position=1===this._position&&1===this._inputValue.length?null:this._position;let f=this._position?this._inputValue.length+r+a:r+("Backspace"!==this._code||h?a:0);f>this._getActualInputLength()&&(f=this._getActualInputLength()),f<0&&(f=0),t.setSelectionRange(f,f),this._position=null}onBlur(){this._maskValue&&this._maskService.clearIfNotMatchFn(),this.onTouch()}onClick(e){if(!this._maskValue)return;const t=e.target;null!==t&&null!==t.selectionStart&&t.selectionStart===t.selectionEnd&&t.selectionStart>this._maskService.prefix.length&&38!==e.keyCode&&this._maskService.showMaskTyped&&(this._maskService.maskIsShown=this._maskService.showMaskInInput(),t.setSelectionRange&&this._maskService.prefix+this._maskService.maskIsShown===t.value?(t.focus(),t.setSelectionRange(0,0)):t.selectionStart>this._maskService.actualValue.length&&t.setSelectionRange(this._maskService.actualValue.length,this._maskService.actualValue.length));const h=t&&(t.value&&t.value!==this._maskService.prefix?t.value:this._maskService.prefix+this._maskService.maskIsShown);t&&t.value!==h&&(t.value=h),t&&(t.selectionStart||t.selectionEnd)<=this._maskService.prefix.length?t.selectionStart=this._maskService.prefix.length:t&&t.selectionEnd>this._getActualInputLength()&&(t.selectionEnd=this._getActualInputLength())}onKeyDown(e){if(!this._maskValue)return;this._code=e.code?e.code:e.key;const t=e.target;if(this._inputValue=t.value,this._setMask(),38===e.keyCode&&e.preventDefault(),37===e.keyCode||8===e.keyCode||46===e.keyCode){if(8===e.keyCode&&0===t.value.length&&(t.selectionStart=t.selectionEnd),8===e.keyCode&&0!==t.selectionStart)if(this.specialCharacters=this.specialCharacters?.length?this.specialCharacters:this._config.specialCharacters,this.prefix.length>1&&t.selectionStart<=this.prefix.length)t.setSelectionRange(this.prefix.length,t.selectionEnd);else if(this._inputValue.length!==t.selectionStart&&1!==t.selectionStart)for(;this.specialCharacters.includes((this._inputValue[t.selectionStart-1]??"").toString())&&(this.prefix.length>=1&&t.selectionStart>this.prefix.length||0===this.prefix.length);)t.setSelectionRange(t.selectionStart-1,t.selectionEnd);this.checkSelectionOnDeletion(t),this._maskService.prefix.length&&t.selectionStart<=this._maskService.prefix.length&&t.selectionEnd<=this._maskService.prefix.length&&e.preventDefault();const r=t.selectionStart;8===e.keyCode&&!t.readOnly&&0===r&&t.selectionEnd===t.value.length&&0!==t.value.length&&(this._position=this._maskService.prefix?this._maskService.prefix.length:0,this._maskService.applyMask(this._maskService.prefix,this._maskService.maskExpression,this._position))}this.suffix&&this.suffix.length>1&&this._inputValue.length-this.suffix.length<t.selectionStart?t.setSelectionRange(this._inputValue.length-this.suffix.length,this._inputValue.length):(65===e.keyCode&&e.ctrlKey||65===e.keyCode&&e.metaKey)&&(t.setSelectionRange(0,this._getActualInputLength()),e.preventDefault()),this._maskService.selStart=t.selectionStart,this._maskService.selEnd=t.selectionEnd}writeValue(e){var t=this;return function U(n){return function(){var l=this,e=arguments;return new Promise(function(t,r){var a=n.apply(l,e);function h(i){R(a,t,r,h,f,"next",i)}function f(i){R(a,t,r,h,f,"throw",i)}h(void 0)})}}(function*(){"object"==typeof e&&null!==e&&"value"in e&&("disable"in e&&t.setDisabledState(Boolean(e.disable)),e=e.value),("number"==typeof e||t._maskValue.startsWith("separator"))&&(e=t._maskService.numberToString(e),Array.isArray(t.decimalMarker)||(e="."!==t.decimalMarker?e.replace(".",t.decimalMarker):e),t._maskService.isNumberValue=!0),"string"!=typeof e&&(e=""),t._inputValue=e,t._setMask(),e&&t._maskService.maskExpression||t._maskService.maskExpression&&(t._maskService.prefix||t._maskService.showMaskTyped)?(t._maskService.writingValue=!0,t._maskService.formElementProperty=["value",t._maskService.applyMask(e,t._maskService.maskExpression)],t._maskService.writingValue=!1):t._maskService.formElementProperty=["value",e],t._inputValue=e})()}registerOnChange(e){this._maskService.onChange=this.onChange=e}registerOnTouched(e){this.onTouch=e}_getActiveElement(e=this.document){const t=e?.activeElement?.shadowRoot;return t?.activeElement?this._getActiveElement(t):e.activeElement}checkSelectionOnDeletion(e){e.selectionStart=Math.min(Math.max(this.prefix.length,e.selectionStart),this._inputValue.length-this.suffix.length),e.selectionEnd=Math.min(Math.max(this.prefix.length,e.selectionEnd),this._inputValue.length-this.suffix.length)}setDisabledState(e){this._maskService.formElementProperty=["disabled",e]}_repeatPatternSymbols(e){return e.match(/{[0-9]+}/)&&e.split("").reduce((t,r,a)=>{if(this._start="{"===r?a:this._start,"}"!==r)return this._maskService._findSpecialChar(r)?t+r:t;this._end=a;const h=Number(e.slice(this._start+1,this._end));return t+new Array(h+1).join(e[this._start-1])},"")||e}_applyMask(){this._maskService.maskExpression=this._repeatPatternSymbols(this._maskValue||""),this._maskService.formElementProperty=["value",this._maskService.applyMask(this._inputValue,this._maskService.maskExpression)]}_validateTime(e){const t=this._maskValue.split("").filter(r=>":"!==r).length;return e&&(0==+(e[e.length-1]??-1)&&e.length<t||e.length<=t-2)?this._createValidationError(e):null}_getActualInputLength(){return this._maskService.actualValue.length||this._maskService.actualValue.length+this._maskService.prefix.length}_createValidationError(e){return{mask:{requiredMask:this._maskValue,actualValue:e}}}_setMask(){this._maskExpressionArray.length>0&&this._maskExpressionArray.some(e=>{const t=this._maskService.removeMask(this._inputValue)?.length<=this._maskService.removeMask(e)?.length;if(this._inputValue&&t)return this._maskValue=e,this.maskExpression=e,this._maskService.maskExpression=e,t;this._maskValue=this.maskExpression=this._maskService.maskExpression=this._maskExpressionArray[this._maskExpressionArray.length-1]??""})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=s.lG2({type:n,selectors:[["input","mask",""],["textarea","mask",""]],hostBindings:function(e,t){1&e&&s.NdJ("paste",function(){return t.onPaste()})("ngModelChange",function(a){return t.onModelChange(a)})("input",function(a){return t.onInput(a)})("blur",function(){return t.onBlur()})("click",function(a){return t.onClick(a)})("keydown",function(a){return t.onKeyDown(a)})},inputs:{maskExpression:["mask","maskExpression"],specialCharacters:"specialCharacters",patterns:"patterns",prefix:"prefix",suffix:"suffix",thousandSeparator:"thousandSeparator",decimalMarker:"decimalMarker",dropSpecialCharacters:"dropSpecialCharacters",hiddenInput:"hiddenInput",showMaskTyped:"showMaskTyped",placeHolderCharacter:"placeHolderCharacter",shownMaskExpression:"shownMaskExpression",showTemplate:"showTemplate",clearIfNotMatch:"clearIfNotMatch",validation:"validation",separatorLimit:"separatorLimit",allowNegativeNumbers:"allowNegativeNumbers",leadZeroDateTime:"leadZeroDateTime",triggerOnMaskChange:"triggerOnMaskChange"},outputs:{maskFilled:"maskFilled"},exportAs:["mask","ngxMask"],standalone:!0,features:[s._Bn([{provide:g.JU,useExisting:n,multi:!0},{provide:g.Cf,useExisting:n,multi:!0},L]),s.TTD]}),n})();const B=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function K(n,l){1&n&&(s.TgZ(0,"small"),s._uU(1," Esse campo precisa de no m\xednimo 4 caracteres. "),s.qZA())}function X(n,l){1&n&&(s.TgZ(0,"small"),s._uU(1," Esse campo precisa ser preenchido "),s.qZA())}function V(n,l){if(1&n&&(s.TgZ(0,"div"),s.YNc(1,K,2,0,"small",4),s.YNc(2,X,2,0,"small",4),s.qZA()),2&n){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",e.formContato.controls.nome.hasError("minlength")),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.nome.hasError("required"))}}function ee(n,l){1&n&&(s.TgZ(0,"small"),s._uU(1," Esse campo precisa de no m\xednimo 10 caracteres. "),s.qZA())}function te(n,l){1&n&&(s.TgZ(0,"small"),s._uU(1," Esse campo precisa ser preenchido "),s.qZA())}function se(n,l){if(1&n&&(s.TgZ(0,"div"),s.YNc(1,ee,2,0,"small",4),s.YNc(2,te,2,0,"small",4),s.qZA()),2&n){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",e.formContato.controls.assunto.hasError("minlength")),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.assunto.hasError("required"))}}function ie(n,l){1&n&&(s.TgZ(0,"small"),s._uU(1," Esse campo precisa de no m\xednimo 11 caracteres. "),s.qZA())}function re(n,l){1&n&&(s.TgZ(0,"small"),s._uU(1," Esse campo precisa ser preenchido "),s.qZA())}function ae(n,l){if(1&n&&(s.TgZ(0,"div"),s.YNc(1,ie,2,0,"small",4),s.YNc(2,re,2,0,"small",4),s.qZA()),2&n){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",e.formContato.controls.telefone.hasError("minlength")),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.telefone.hasError("required"))}}function ne(n,l){1&n&&(s.TgZ(0,"small"),s._uU(1," Esse campo precisa ser um email v\xe1lido. "),s.qZA())}function oe(n,l){1&n&&(s.TgZ(0,"small"),s._uU(1," Esse campo precisa ser preenchido "),s.qZA())}function he(n,l){if(1&n&&(s.TgZ(0,"div"),s.YNc(1,ne,2,0,"small",4),s.YNc(2,oe,2,0,"small",4),s.qZA()),2&n){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",e.formContato.controls.email.hasError("email")),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.email.hasError("required"))}}function le(n,l){1&n&&(s.TgZ(0,"small"),s._uU(1," Esse campo precisa de no m\xednimo 20 caracteres. "),s.qZA())}function ce(n,l){1&n&&(s.TgZ(0,"small"),s._uU(1," Esse campo precisa ser preenchido "),s.qZA())}function fe(n,l){if(1&n&&(s.TgZ(0,"div"),s.YNc(1,le,2,0,"small",4),s.YNc(2,ce,2,0,"small",4),s.qZA()),2&n){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",e.formContato.controls.mensagem.hasError("mensagem")),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.mensagem.hasError("required"))}}B.KeyboardEvent||(B.KeyboardEvent=function(n,l){});class b{constructor(l){this.fb=l,this.formContato=this.fb.group({nome:["",[g.kI.minLength(4),g.kI.required]],assunto:["",[g.kI.minLength(10),g.kI.required]],telefone:["",[g.kI.minLength(11),g.kI.required]],email:["",[g.kI.email,g.kI.required]],mensagem:["",[g.kI.minLength(20),g.kI.required]]})}ngOnInit(){}enviarFormulario(){alert("A mensagem foi enviada"),this.formContato.reset()}}b.\u0275fac=function(l){return new(l||b)(s.Y36(g.qu))},b.\u0275cmp=s.Xpm({type:b,selectors:[["app-contato"]],decls:22,vars:27,consts:[[1,"contact__title"],[1,"contact__container"],[1,"contact-form",3,"formGroup","ngSubmit"],["type","text","placeholder","Digite o seu nome","formControlName","nome"],[4,"ngIf"],["type","assunto","placeholder","Digite o assunto","formControlName","assunto"],["type","tel","placeholder","(00) 0 0000-0000)","mask","(00) 0 0000-0000","formControlName","telefone"],["type","email","placeholder","Digite o  seu e-mail","formControlName","email"],["maxlength","300","placeholder","digite sua mensagem...","rows","4","formControlName","mensagem"],[3,"disabled"],["src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14230.300361031366!2d-49.0703074!3d-26.9169772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa5ec9dd8406a6a7!2sProWay!5e0!3m2!1spt-BR!2sbr!4v1675823892910!5m2!1spt-BR!2sbr","width","600","height","450","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0"]],template:function(l,e){1&l&&(s.TgZ(0,"h2",0),s._uU(1,"Entre em contato"),s.qZA(),s.TgZ(2,"section",1)(3,"form",2),s.NdJ("ngSubmit",function(){return e.enviarFormulario()}),s._UZ(4,"input",3),s.YNc(5,V,3,2,"div",4),s._UZ(6,"input",5),s.YNc(7,se,3,2,"div",4),s._UZ(8,"input",6),s.YNc(9,ae,3,2,"div",4),s._UZ(10,"input",7),s.YNc(11,he,3,2,"div",4),s._uU(12," /> "),s.TgZ(13,"textarea",8),s._uU(14,"\n        "),s.qZA(),s.YNc(15,fe,3,2,"div",4),s.TgZ(16,"button",9),s._uU(17,"Enviar"),s.qZA()(),s.TgZ(18,"address"),s._UZ(19,"iframe",10),s.TgZ(20,"p"),s._uU(21,"R. 7 de Setembro, 1600 - 14\xba andar - Centro, Blumenau - SC, 89010-204"),s.qZA()()()),2&l&&(s.xp6(3),s.Q6J("formGroup",e.formContato),s.xp6(1),s.ekj("valid",e.formContato.controls.nome.valid)("invalid",e.formContato.controls.nome.invalid&&(e.formContato.controls.nome.touched||e.formContato.controls.nome.dirty)),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.nome.touched||e.formContato.controls.nome.dirty),s.xp6(1),s.ekj("valid",e.formContato.controls.assunto.valid)("invalid",e.formContato.controls.assunto.invalid&&(e.formContato.controls.assunto.touched||e.formContato.controls.assunto.dirty)),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.assunto.touched||e.formContato.controls.assunto.dirty),s.xp6(1),s.ekj("valid",e.formContato.controls.telefone.valid)("invalid",e.formContato.controls.telefone.invalid&&(e.formContato.controls.telefone.touched||e.formContato.controls.telefone.dirty)),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.telefone.touched||e.formContato.controls.telefone.dirty),s.xp6(1),s.ekj("valid",e.formContato.controls.email.valid)("invalid",e.formContato.controls.email.invalid&&(e.formContato.controls.email.touched||e.formContato.controls.email.dirty)),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.email.touched||e.formContato.controls.email.dirty),s.xp6(2),s.ekj("valid",e.formContato.controls.mensagem.valid)("invalid",e.formContato.controls.mensagem.invalid&&(e.formContato.controls.mensagem.touched||e.formContato.controls.mensagem.dirty)),s.xp6(2),s.Q6J("ngIf",e.formContato.controls.mensagem.touched||e.formContato.controls.mensagem.dirty),s.xp6(1),s.Q6J("disabled",e.formContato.invalid))},dependencies:[P.O5,g._Y,g.Fj,g.JJ,g.JL,g.nD,g.sg,g.u,G],styles:[".contact__title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}.contact-form[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;row-gap:20px;margin-bottom:50px;min-width:300px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-end;background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px;width:200px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{filter:brightness(1.1)}.contact__container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:20px;padding:20px 0}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:var(--gray)}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover{filter:none}"]});const me=[{path:"",component:b}];class y{}y.\u0275fac=function(l){return new(l||y)},y.\u0275mod=s.oAB({type:y}),y.\u0275inj=s.cJS({imports:[$.Bz.forChild(me),$.Bz]});class w{}w.\u0275fac=function(l){return new(l||w)},w.\u0275mod=s.oAB({type:w}),w.\u0275inj=s.cJS({providers:[function q(n){return[{provide:F,useValue:n},{provide:j,useValue:Y},{provide:O,useFactory:W},J]}()],imports:[P.ez,y,g.UX]})}}]);