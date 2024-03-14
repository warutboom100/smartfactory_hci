import React, { useEffect } from 'react';
import video from '../../../assets/images/video.png'; 
function createVideoPlayer() {
  if (p2pml.hlsjs.Engine.isSupported()) {
    var engine = new p2pml.hlsjs.Engine();

    var player = new Clappr.Player({
      parentId: "#player",
      source: "https://stream.hcilab.net/hls/smartfactory1.m3u8",
      mute: true,
      autoPlay: true,
      playback: {
        hlsjsConfig: {
          liveSyncDurationCount: 1,
          loader: engine.createLoaderClass(),
        },
      },
    });

    p2pml.hlsjs.initClapprPlayer(player);
  } else {
    console.log("Not supported :(");
  }
}
function Videostreaming() {
  useEffect(() => {
    return () => {
      createVideoPlayer();
      
    };
  }, []); 

  return (
    <>
      <div className="col-sm-8 py-2">
        <div className="card h-100">
          <div className="card-body">
            <li className="d-flex" to="/">
              <img src={video} alt="" height="32px" width="32px" />
              <div className="p-1 h5" style={{ fontWeight: 'bold' }}>ถ่ายทอดสด (FIBO)</div>
            </li>
            <hr className="status-line" />
            
            <div className="container p-4 d-flex justify-content-center align-items-center">
              <div id="player"></div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Videostreaming;
