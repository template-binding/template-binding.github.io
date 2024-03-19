import{r as l,t as c,s as u,x as p}from"./Bind-wx6g8c6u.js";class i{constructor(t,r){return i.isObservable(t)?t:(this.callback=r,new Proxy(t,{set:(e,a,n)=>{n&&typeof n=="object"&&!i.isObservable(n)&&(n=new i(n,this.callback));const o=e[a];return e[a]=n,this.callback&&this.callback(e,{property:a,oldValue:o,value:n}),!0},get:(e,a)=>a==="_observableInstance"?this:e[a]}))}static isObservable(t){return t&&t._observableInstance instanceof i}static getPureObject(t){if(i.isObservable(t)){const r={...t};return Object.keys(r).forEach(e=>{i.isObservable(r[e])&&(r[e]=i.getPureObject(r[e]))}),r}return t}}function b(s,t){return new i(s,t)}var x=Object.defineProperty,f=Object.getOwnPropertyDescriptor,h=(s,t,r,e)=>{for(var a=e>1?void 0:e?f(t,r):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(a=(e?o(t,r,a):o(a))||a);return e&&a&&x(t,r,a),a};let d=class extends u{constructor(){super(),this.data={title:"hello-world",author:{name:"deni",email:"deni@xxx.oo"}},this.dataType=null,this.count=1,this.onChangedValue=this.onChangedValue.bind(this),this.requestUpdate=this.requestUpdate.bind(this),this.updateData()}createRenderRoot(){return this}render(){var s,t,r,e,a;return p`
      <div class="flex items-center justify-center h-screen">
        <div class="container mx-auto p-4">
        <h1 class="text-center text-xl font-bold mb-4">Observable TEST</h1>
          <h1 class="text-center text-xl mb-4">Data Title: ${(s=this.data)==null?void 0:s.title}</h1>
          <h1 class="text-center text-xl mb-4">Data Author: ${(r=(t=this.data)==null?void 0:t.author)==null?void 0:r.name}(${(a=(e=this.data)==null?void 0:e.author)==null?void 0:a.email})</h1>
          <h1 class="text-center text-xl font mb-4">Data Type: ${this.dataType}</h1>

          <div class="flex flex-wrap justify-center gap-4 mb-4">
            <button class="px-4 py-2 border border-gray-300 rounded" @click=${this.onUpdateData}>Update Data (Show Log)</button>
            <button class="px-4 py-2 border border-gray-300 rounded" @click=${this.onRequestUpdate}>Request UI Update</button>
            <button class="px-4 py-2 border border-gray-300 rounded" @click=${this.onToggleObservableData}>Toggle Observable Data</button>
          </div>
        </div>
      </div>
    `}update(s){s.forEach((t,r)=>{r==="data"&&this.updateDataType()}),super.update(s)}updateDataType(){this.dataType=i.isObservable(this.data)?"Observable Object":"Pure Object"}onUpdateData(){this.updateData()}updateData(){const s=this.count++;this.data.title=`hello-world: ${s}`,this.data.author.name=`deni: ${s}`,this.data.author.email=`deni@xxx.oo: ${s}`,console.log("Update Data",this.data)}onRequestUpdate(){this.requestUpdate()}onToggleObservableData(){i.isObservable(this.data)?(this.updateData(),this.data=i.getPureObject(this.data)):(this.updateData(),this.data=b(this.data,this.requestUpdate)),this.updateDataType()}onChangedValue(s,t){console.log("onChangedValue",s,t),this.requestUpdate()}};h([l()],d.prototype,"data",2);h([l()],d.prototype,"dataType",2);d=h([c("app-shell")],d);
