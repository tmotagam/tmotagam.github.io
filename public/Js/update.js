const urlParams = new URLSearchParams(window.location.search);
const aname = urlParams.get('name');
const v = urlParams.get('v');

update(aname, v)

function download(name) {
    let cip = '0.0.0.0'
    fetch('https://www.cloudflare.com/cdn-cgi/trace', {method: 'GET'}).then(async (response) => {
        try {
            const data = await response.text()
            arr = data.split('=')[3];
            cip = arr.split('\n')[0];
        } catch (error) {}
    }).catch(() => {})
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

function update(name, v) {
    let x_cip = '0.0.0.0'
    if (v == null || v == '' || v == " ") {
        return document.getElementById("name").innerHTML = `<p class="h5">Error: Invalid parameters</p>`;
    }
    if (name == null || name == '' || name == " ") {
        return document.getElementById("name").innerHTML = `<p class="h5">Error: Invalid parameters</p>`;
    } else {
        fetch('https://www.cloudflare.com/cdn-cgi/trace', {method: 'GET'}).then(async (response) => {
            try {
                const data = await response.text()
                arr = data.split('=')[3];
                x_cip = arr.split('\n')[0];
            } catch (error) {}
        }).catch( () => {});

        if (name == 'sms') {
            document.getElementById("name").innerHTML = `<p class="h5">Application: Store Management System</p>`;
            document.getElementById("userv").innerHTML = `<p class="h5">Your App version: `+ v +`</p>`;
            fetch("https://server.aham.repl.co/app/update", {method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'x-cip': x_cip
            },
            body: JSON.stringify({'name': name, 'version': v})}).then((response) => {
                if (response.status === 200) {
                    response.json().then((data) => {
                        if (data.link === '#') {
                            document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: `+ data.version +`</p>`;
                            document.getElementById("message").innerHTML = `<p class="h5">`+ data.message +`</p>`;
                        } else {
                            document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: `+ data.version +`</p>`;
                            document.getElementById("message").innerHTML = `<p class="h5">`+ data.message +`<a class="text-decoration-none" href="javascript:download('sms')">Click here to download</a></p>`;
                        }
                    })
                } else {
                    response.json().then((data) => {
                        document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: `+ data.version +`</p>`;
                        document.getElementById("message").innerHTML = `<p class="h5">`+ data.message +`</p>`; 
                    })
                }
            });
        } else if (name == 'tfx') {
            document.getElementById("name").innerHTML = `<p class="h5">Application: Tahafacex</p>`;
            document.getElementById("userv").innerHTML = `<p class="h5">Your App version: `+ v +`</p>`;
            fetch("https://server.aham.repl.co/app/update", {method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'x-cip': x_cip
            },
            body: JSON.stringify({'name': name, 'version': v})}).then((response) => {
                if (response.status === 200) {
                    response.json().then((data) => {
                        if (data.link === '#') {
                            document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: `+ data.version +`</p>`;
                            document.getElementById("message").innerHTML = `<p class="h5">`+ data.message +`</p>`;
                        } else {
                            document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: `+ data.version +`</p>`;
                            document.getElementById("message").innerHTML = `<p class="h5">`+ data.message +`<a class="text-decoration-none" href="javascript:download('tfx')">Click here to download</a></p>`;
                        }
                    })
                } else {
                    response.json().then((data) => {
                        document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: `+ data.version +`</p>`;
                        document.getElementById("message").innerHTML = `<p class="h5">`+ data.message +`</p>`; 
                    })
                }
            });
        } else if (name == 'ftpt') {
            document.getElementById("name").innerHTML = `<p class="h5">Application: FTPT</p>`;
            document.getElementById("userv").innerHTML = `<p class="h5">Your App version: `+ v +`</p>`;
            fetch("https://server.aham.repl.co/app/update", {method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'x-cip': x_cip
            },
            body: JSON.stringify({'name': name, 'version': v})}).then((response) => {
                if (response.status === 200) {
                    response.json().then((data) => {
                        if (data.link === '#') {
                            document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: `+ data.version +`</p>`;
                            document.getElementById("message").innerHTML = `<p class="h5">`+ data.message +`</p>`;
                        } else {
                            document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: `+ data.version +`</p>`;
                            document.getElementById("message").innerHTML = `<p class="h5">`+ data.message +`<a class="text-decoration-none" href="javascript:download('ftpt')">Click here to download</a></p>`;
                        }
                    })
                } else {
                    response.json().then((data) => {
                        document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: `+ data.version +`</p>`;
                        document.getElementById("message").innerHTML = `<p class="h5">`+ data.message +`</p>`; 
                    })
                }
            });
        } else if (name == 'ope') {
            document.getElementById("name").innerHTML = `<p class="h5">Application: Online Protracted Examination System</p>`;
            document.getElementById("userv").innerHTML = `<p class="h5">Your App version: `+ v +`</p>`;
            fetch("https://server.aham.repl.co/app/update", {method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'x-cip': x_cip
            },
            body: JSON.stringify({'name': name, 'version': v})}).then((response) => {
                if (response.status === 200) {
                    response.json().then((data) => {
                        if (data.link === '#') {
                            document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: `+ data.version +`</p>`;
                            document.getElementById("message").innerHTML = `<p class="h5">`+ data.message +`</p>`;
                        } else {
                            document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: `+ data.version +`</p>`;
                            document.getElementById("message").innerHTML = `<p class="h5">`+ data.message +`<a class="text-decoration-none" href="javascript:download('ope')">Click here to download</a></p>`;
                        }
                    })
                } else {
                    response.json().then((data) => {
                        document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: `+ data.version +`</p>`;
                        document.getElementById("message").innerHTML = `<p class="h5">`+ data.message +`</p>`; 
                    })
                }
            });
        } else {
            return document.getElementById("name").innerHTML = `<p class="h5">Error: Cannot check version ! Try again with proper name</p>`;
        }
    }
}