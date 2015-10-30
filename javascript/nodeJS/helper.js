function sleep(seconds) {
    var start = new Date().getTime();
    while(new Date().getTime() < start + seconds);
}

exports.sleep = sleep;
