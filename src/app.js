
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const os = require('os')

function _getsudo(params,settings){
  return ((os.platform() == 'linux') && (params.SUDO || settings.SUDO )) ? 'sudo' :''
}

async function  exposeDeployment(action,settings) {
  let params = action.params;
  let SUDO =  _getsudo(params,settings)
  let type = params.TYPE || 'NodePort'
  let execString = `${SUDO} kubectl expose deployment ${params.DEPLOYMENT} --type=${type} --name=${params.NAME}`
   return  exec(execString);
}

async function getPods(action,settings){
  let SUDO = _getsudo(action.params,settings)
  let execString = ` ${SUDO} kubectl get pod`
  let res = await exec(execString);
  if(!res.stdout.includes('READY')){
    return Promise.resolve(res);
  }
  console.log(res.stdout)
  let spaces = /\s\s+/g;
  let resultsArr = res.stdout.split('\n',res.stdout.replace(/[^'\n']/g, "").length)
  let titles = resultsArr[0].split(spaces)
  let newResult = []
  let newRow = {}
  for (let i = 1; i < resultsArr.length; i++) {
    const row = resultsArr[i].split(spaces);
    titles.forEach((title,index)=>{
      newRow[title] = row[index]
    })
    newResult.push(newRow)
  }
  newResult.stdout = newResult 
  console.log("Output:");
  
  return Promise.resolve(newResult)
}

async function apply(action,settings){
  let SUDO = _getsudo(action.params,settings)
  let force = action.params.FORCE ? '--force' : ''
  let overwrite = action.params.OVERWRITE ? '--overwrite' : ''
  let dryRun = action.params.DRY_RUN ? '--dry-run' : ''
  let execString = `${SUDO} kubectl apply -f ${action.params.FILE_PATH}  ${force} ${overwrite} ${dryRun}`
  return exec(execString);
}


module.exports = {
  exposeDeployment: exposeDeployment,
  getPods: getPods,
  apply: apply 
};

