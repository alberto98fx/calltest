const test3 = () => {

    const child_process = require('child_process');
    let out;
    
    out = child_process.spawnSync('true');
    console.log('status: ' + out.status);
    console.log('stdout: ' + out.stdout.toString('utf8'));
    console.log('stderr: ' + out.stderr.toString('utf8'));
    console.log();
    
    out = child_process.spawnSync('false');
    console.log('status: ' + out.status);
    console.log('stdout: ' + out.stdout.toString('utf8'));
    console.log('stderr: ' + out.stderr.toString('utf8'));
    console.log();
    
    out = child_process.spawnSync('ls', ['-lhatr']);
    console.log('status: ' + out.status);
    console.log('stdout: ' + out.stdout.toString('utf8'));
    if(out.stderr.toString('utf8')){
        return out.stderr.toString('utf8');
    } else {
        return out.stdout.toString('utf8');
    }

}

module.exports = {
    test3
}
    