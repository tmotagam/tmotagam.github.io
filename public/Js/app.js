const urlParams = new URLSearchParams(window.location.search);
const app = urlParams.get('d');
startApp(app)

function startApp(app) {
    if (app == null || app == '' || app == " ") {
      window.location.replace('../../404.html')
    }
      if (app == 'sms') {
        window.location.replace('../sms/')
      } else if (app == 'tfx') {
        window.location.replace('../tfx/')
      } else if (app == 'ftpt') {
        window.location.replace('../ftpt/')
      } else if (app == 'ope') {
        window.location.replace('../ope/')
      } else if (app == 'sms_docs') {
        window.location.assign('../sms_docs/')
      } else if (app == 'tfx_docs') {
        window.location.assign('../tfx_docs/')
      }  else {
        window.location.replace('../../404.html')
      }
  }