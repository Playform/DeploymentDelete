#!/usr/bin/env node
import { Command as e } from "commander";
import l from "./Delete.js";
import a from "./Library/JSON.js";
try{new e().name("DeploymentDelete").version((await a("../package.json",import.meta.url))?.version).description("Deletes old deployments in your Cloudflare account.").option("-e, --Email <Email>","Cloudflare Account E-mail.").option("-i, --ID <ID>","Cloudflare Account ID.").option("-k, --Key <Key>","Cloudflare API key.").action(async o=>console.log(await l(o?.Email,o?.ID,o?.Key))).parse()}catch(o){console.log(o)}
