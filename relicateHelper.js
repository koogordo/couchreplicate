const PouchDB = require('pouchdb');
const replicationSettings = {
    prodUser: "admin",
    devUser: "admin",
    prodPass: "wK0mI55ghBU9pp",
    devPass: "GBP%40ck3rs%231",
    dbname: "families"
}

const SOURCEDB = `https://${replicationSettings.prodUser}:${replicationSettings.prodPass}@www.hfatracking.net/couchdb/${replicationSettings.dbname}`;
const TARGETDB = `http://${replicationSettings.devUser}:${replicationSettings.devPass}@0.0.0.0:5984/${replicationSettings.dbname}`

const replicator = PouchDB.replicate(SOURCEDB, TARGETDB);
replicator.on('complete', onComplete);
replicator.on('active', onActive);
replicator.on('paused', onComplete);
replicator.on('denied', onComplete);
replicator.on('error', onError);

function onComplete() {
    console.log("complete")
}
function onActive() {
    console.log("active")
}

function onPaused() {
    console.log("paused")
}

function onDenied() {
    console.log("denied")
}

function onError(err) {
    console.log(err)
}

