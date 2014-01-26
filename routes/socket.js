
/*
 * Handling socket events
 */
var ftp = require('./ftp');
var theTvDb = require('./theTvDb');
var config = require('./config')
var fs = require('fs');
//var storedServerFile = './store/storedFtp.json';

// Triggers the connect
exports.connect = function(socket){
  socket.on('connect', function(data) {
    ftp.initRoot(data,socket);
  });
};

// Triggers the connect
exports.list = function(socket){
  socket.on('list', function(data) {
    ftp.list(data,socket);
  });
};

// Save Config the connect
exports.saveFtp = function(socket){
  socket.on('saveFtp', function(data) {
    ftp.save(data);
  });
};


// Get Stored servers
exports.getStoredServers = function(socket){
  socket.on('getStoredServers', function() {
    config.getStoredFtp(function(err, path){
      fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
          console.log('Error: ' + err);
          return;
        }
        data = JSON.parse(data);
        socket.emit('receiveStoredServers',data);
      });
    });
  });
};

// Add entry to downloadlist and report amount of items in List
exports.addToDownloadList = function(socket){
  socket.on('addToDownloadList', function(data) {
    ftp.addToDownloadList(data, socket);
  });
};

// Request to retreive download list
exports.initDownloadList = function(socket){
  socket.on('initDownloadList', function(data) {
    ftp.initDownloadList(socket);
  });
};

//Add entry to scannerlist and report amount of items in List
exports.addToScannerList = function(socket){
  socket.on('addToScannerList', function(data) {
    ftp.addToScannerList(data, socket);
  });
};

// Request to retreive Scanner Search path list
exports.initScannerList = function(socket){
  socket.on('initScannerList', function(data) {
    ftp.initScannerList(socket);
  });
};

// Request to retreive scanner result list
exports.initScannerResultList = function(socket){
  socket.on('initScannerResultList', function(data) {
    ftp.initScannerResultList(socket);
  });
};

// Request to retreive download list
exports.scanFtp = function(socket){
  socket.on('scanFtp', function(data) {
    ftp.scanFtp(data, socket);
  });
};

// Request to retreive Tv Show list
exports.initTvShowList = function(socket){
  socket.on('initTvShowList', function(data) {
    theTvDb.initTvShowList(socket);
  });
};

// Check Tv Show name
exports.checkTvShow = function(socket){
  socket.on('checkTvShow', function(data) {
    theTvDb.checkTvShow(data,socket);
  });
};

// Check Tv Show name
exports.bindOfflineOnlineTvShow = function(socket){
  socket.on('bindOfflineOnlineTvShow', function(data) {
    theTvDb.bindOfflineOnlineTvShow(data,socket);
  });
};

// Check Tv Show name
exports.initLostEpisodesList = function(socket){
  socket.on('initLostEpisodesList', function() {
    theTvDb.initLostEpisodesList(socket);
  });
};

// Check Tv Show Episodes
exports.checkEpisodes = function(socket){
  socket.on('checkEpisodes', function(data) {
    theTvDb.checkEpisodes(data,socket);
  });
};

// Triggers the download
exports.initDownload = function(socket){
  socket.on('initDownload', function(data) {
    ftp.initDownload(data,socket);
  });
};

// Init of config page
exports.initConfig = function(socket){
  socket.on('initConfig', function() {
    config.initConfig(socket);
  });
};


// Save config
exports.saveConfig = function(socket){
  socket.on('saveConfig', function(data) {
    config.saveConfig(data,socket);
  });
};

// Delete Items from Downloadlist
exports.deleteDownloadItem = function(socket){
  socket.on('deleteDownloadItem', function(data) {
    ftp.deleteDownloadItem(data,socket);
  });
};

// Delete Items from Downloadlist
exports.initConfigFiles = function(socket){
  socket.on('initConfigFiles', function(data) {
    config.initConfigFiles(data,socket);
  });
};