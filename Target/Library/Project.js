import{fetch as r}from"@cloudflare/workers-types/experimental";var a=async(e,t)=>(await(await r(`https://api.cloudflare.com/client/v4/accounts/${e}/pages/projects`,{headers:t})).json())?.result;export{a as default};
