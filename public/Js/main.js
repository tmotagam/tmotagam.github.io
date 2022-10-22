const urlParams = new URLSearchParams(window.location.search);
const app = urlParams.get('d');
startApp(app)

async function download(name) {
  const clientid = await clid()
  document.getElementById('dl').innerHTML += `<a id="download-link" href="https://server.aham.repl.co/app/download/${name}/${typeof clientid !== 'string' ? '0' : clientid}"></a>`
  document.getElementById('download-link').click()
  document.getElementById('download-link').remove()
};

function startApp(app) {
  if (app == null || app == '' || app == " ") {
    document.getElementById("app").innerHTML = `<img src="/public/images/oops.webp" width="200" height="150" alt="">`;
    return document.getElementById("route").innerHTML = `<p class="h5"><a href="../projects/" class="text-decoration-none">You are lost let me help you find a way. Click here.</a></p>`;
  } else {
    if (app == 'sms') {
      document.getElementById("app").innerHTML = `<img src="/public/images/StoreManagementSystemIcon.webp" width="100" height="100" alt="">`;
      document.getElementById("route").innerHTML = `<zero-md src="../markdown/sms.md"></zero-md>`;
    } else if (app == 'tfx') {
      document.getElementById("app").innerHTML = `<img src="/public/images/tahafacex.webp" width="100" height="100" alt="">`;
      document.getElementById("route").innerHTML = `<zero-md src="../markdown/tfx.md"></zero-md>`;
    } else if (app == 'ftpt') {
      document.getElementById("app").innerHTML = `<img src="/public/images/ftpt.webp" width="100" height="100" alt="">`;
      document.getElementById("route").innerHTML = `<zero-md src="../markdown/ftpt.md"></zero-md>`;
    } else if (app == 'ope') {
      document.getElementById("app").innerHTML = `<img src="/public/images/ope.webp" width="100" height="100" alt="">`;
      document.getElementById("route").innerHTML = `<zero-md src="../markdown/ope.md"></zero-md>`;
    } else if (app == 'sms_docs') {
      document.getElementById("app").innerHTML = `<img src="/public/images/StoreManagementSystemIcon.webp" width="100" height="100" alt="">`;
      document.getElementById("route").innerHTML = `<zero-md src="../markdown/sms_docs.md"></zero-md>`;
    } else if (app == 'tfx_docs') {
      document.getElementById("app").innerHTML = `<img src="/public/images/tahafacex.webp" width="100" height="100" alt="">`;
      document.getElementById("route").innerHTML = `<zero-md src="../markdown/tfx_docs.md"></zero-md>`;
    } else {
      document.getElementById("app").innerHTML = `<img src="/public/images/oops.webp" width="200" height="150" alt="">`;
      document.getElementById("route").innerHTML = `<p class="h5"><a href="../projects/" class="text-decoration-none">Something is not right about this page. Click here.</a></p>`;
    }
  }
}