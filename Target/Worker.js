import t from"./Library/Delete.js";import n from"./Library/Response.js";var l={fetch:async(r,e,o)=>(await t(e.Email,e.ID,e.Key),n("Ok")),scheduled:async(r,e,o)=>await t(e.Email,e.ID,e.Key)};export{l as default};
