import React, {  useEffect, useState } from 'react';

function Main() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8801/userId')
      .then(res => res.json())
      .then(data => setUserData(data));
  }, []);

  return (
    <div>
      {userData && <div> User:  {userData[0].Names}</div>}
    </div>
  )
}

export default Main;