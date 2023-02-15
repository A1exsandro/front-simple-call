import React, { useRef } from 'react'

const FaceApi = () => {
  const cam = useRef()
  console.log(cam)

  const startVideo = () => {
    navigator.mediaDevices.enumerateDevices()
    .then(devices => {
      console.log(navigator)
      if (Array.isArray(devices)) {
        devices.forEach(device => {
          if (device.kind === 'videoinput') {
            navigator.getUserMedia(
              { video: {
                  deviceId: device.deviceId
              }},
              stream => cam.srcObject = stream,
              error => console.error(error)
            )
          }
        })
      }
    })
  }
  startVideo()

  return (
    <div>
      <video autoPlay muted ref={cam} width="720" height="560"></video>
    </div>
  )
}
 
export default FaceApi