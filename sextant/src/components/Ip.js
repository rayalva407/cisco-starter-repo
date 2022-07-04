import React, { useEffect, useState } from 'react'


function Ip({v}) {
  let url;

  const [ip, setIp] = useState("")
  
  v === "v4" ? url = "https://api.ipify.org?format=json" : url = "https://api64.ipify.org?format=json"

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setIp(data.ip))
  
  }, [])

  return (
    <div>
      {ip}
    </div>
  )
}

export default Ip