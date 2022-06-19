const urlParams = new URLSearchParams(window.location.search);
const app = urlParams.get('d');
startApp(app)

function download(name) {
    let cip = '0.0.0.0'
    fetch('https://www.cloudflare.com/cdn-cgi/trace', {method: 'GET'}).then(async (response) => {
        try {
            const data = await response.text()
            arr = data.split('=')[3];
            cip = arr.split('\n')[0];
        } catch (error) {}
    }).catch(() => {});
    fetch("https://server.aham.repl.co/app/download/"+name, {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'x-cip': cip}}).then(response => {
        response.json().then((data) => {
            var a = document.createElement('a');
            a.href = data.link;
            document.body.appendChild(a);
            a.click();
            a.remove();
        });
    });
};

function startApp(app) {
    if (app == null || app == '' || app == " ") {
        document.getElementById("app").innerHTML = `<img src="/public/images/oops.webp" width="200" height="150" alt="">`;
        return document.getElementById("route").innerHTML = `<p class="h5">You are lost let me help you find a way. <a href="../projects/" class="text-decoration-none">click here</a></p>`;
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
            document.getElementById("route").innerHTML = `<p class="h5">Something is not right about this page. ${app} <a href="../projects/" class="text-decoration-none">click here</a></p>`;
        }
    }
}