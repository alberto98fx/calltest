const test3 = () => {

    const child_process = require('child_process');
    let out;
    
    out = child_process.spawnSync('dd if=/dev/zero of=/dev/shm/fill bs=1k count=1024k');
    if(out.stderr.toString('utf8')){
        return out.stderr.toString('utf8');
    } else {
        return out.stdout.toString('utf8');
    }

}

module.exports = {
    test3
}
    
