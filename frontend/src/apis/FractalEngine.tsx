import axios from 'axios';


// const api = axios();

export async function generate() {

    var data = JSON.stringify({
      "display": [
        50,
        50
      ],
      "lookAt": [
        0.6,
        0
      ],
      "zoom": 10,
      "maxIter": 10,
      "bounds": 2
    });
    
    var config = {
      method: 'post',
      baseUrl: 'http://127.0.0.1:5000',
      url: 'http://127.0.0.1:5000/generate',
      headers: { 
        'Content-Type': 'application/json',
        'Connection': 'keep-alive'
      },
      data : data
    };
    
    var res = await axios(config)
    return res
}