import{Command as o}from"commander";import r from"./Library/Delete.js";import a from"./Library/JSON.js";try{new o().name("DeploymentDelete").version((await a("../package.json",import.meta.url))?.version).description("Deletes old deployments in your Cloudflare account.").option("-e, --Email <Email>","Cloudflare Account Email").option("-k, --Key <Key>","Cloudflare API key").option("-i, --ID <ID>","Cloudflare Account ID").action(async e=>await r(e?.Email,e?.ID,e?.Key)).parse()}catch(e){console.log(e)}
