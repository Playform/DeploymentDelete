import t from "./Delete.js";
import a from "./Library/Response.js";
var l={fetch:async(o,e,r)=>await a(await t(e.Email,e.ID,e.Key)),scheduled:async(o,e,r)=>console.log(await t(e.Email,e.ID,e.Key))};export { l as default };

