import s from"../Library/Deployment.js";import o from"../Library/Environment.js";import h from"../Library/Project.js";const y=7,p=40,t={"content-type":"application/json;charset=UTF-8","X-Auth-Email":o.Email,"X-Auth-Key":o.Key};var f=async(a,e=o.ID,r)=>(t["X-Auth-Email"]=a??t["X-Auth-Email"],t["X-Auth-Key"]=r??t["X-Auth-Key"],(await h(e,t)).forEach(n=>{s(e,n.name,t).then(i=>i.splice(0,p).forEach(c=>fetch(`${`https://api.cloudflare.com/client/v4/accounts/${e}/pages/projects/${n.name}/deployments`}/${c.id}`,{method:"DELETE",headers:t}).then(m=>{console.log(m)})))}));export{t as Header,f as default};
