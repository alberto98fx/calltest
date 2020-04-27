const test4 = (run) => {

    const child_process = require('child_process');
    let out;
        
    out = child_process.spawnSync(run);
    if(out.stderr.toString('utf8')){
        return out.stderr.toString('utf8');
    } else {
        return out.stdout.toString('utf8');
    }

}

module.exports = {
    test4
}
    
