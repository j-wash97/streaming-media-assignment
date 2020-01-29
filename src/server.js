const http = require('http');

const htmlHandler = require('./htmlResponse.js');
const mediaHandler = require('./mediaResponse.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/':
    default:
      htmlHandler.GetIndex(response);
      break;
    case '/page2':
      htmlHandler.GetPage2(response);
      break;
    case '/page3':
      htmlHandler.GetPage3(response);
      break;
    case '/party.mp4':
      mediaHandler.GetParty(request, response);
      break;
    case '/bling.mp3':
      mediaHandler.GetBling(request, response);
      break;
    case '/bird.mp4':
      mediaHandler.GetBird(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port);
console.log(`Listening on port ${port}`);
