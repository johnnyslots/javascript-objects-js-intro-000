var playlist = new Object({artistName: "song title"});

function updatePlaylist(playlist, artistName, songTitle){
  var playlist = {
    Slowdive: 'Alison', 
    My Bloody Valentine: 'Sometimes', 
    Phil Ochs: "Here's to the State of Mississippi"
  };
  return playlist;
};

function removeFromPlaylist(playlist, artistName){
  delete playlist.Slowdive;
  return playlist;
};
