var l=async(...[{Email:o,ID:t,Key:r}=p.parse(process.env)])=>{const e={"content-type":"application/json;charset=UTF-8","X-Auth-Email":o,"X-Auth-Key":r};e["X-Auth-Email"]=o??e["X-Auth-Email"],e["X-Auth-Key"]=r??e["X-Auth-Key"];const s=[];for(const{name:n}of await(await import("./Project.js")).default(t,e)??[])for(const{id:c,created_on:i}of(await(async a=>(await(await import("./Deployment.js")).default(t,a,e)).splice(0,500)??[])(n)).reverse())if((Date.now()-new Date(i))/864e5>7){try{await fetch(`${`https://api.cloudflare.com/client/v4/accounts/${t}/pages/projects/${n}/deployments`}/${c}`,{method:"DELETE",headers:e})}catch(a){console.log(a)}s.push(c)}return s};const{default:p}=await import("../Variable/Environment.js");export{p as Environment,l as default};
