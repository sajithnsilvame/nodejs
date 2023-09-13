
import { log } from "node:console";
import {dirname,join} from "node:path";
import { readFile, writeFile } from "node:fs";
import { fileURLToPath } from "node:url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)


readFile(join(__dirname,'mytext.txt'), 'utf-8', (err,data) => {
  if(!err){
    console.log(data.toString())
  }else{
    console.log(err)
  }
})
const data = "Sajith is a software engineer"
const data2 = "Sajith is a fullstack developer"
writeFile(join(__dirname,'write2.txt'), data2, (err) =>{
  if(err)
  { 
    log(err.message()) 
  }
  else
  { 
    log(data2) 
  }
})