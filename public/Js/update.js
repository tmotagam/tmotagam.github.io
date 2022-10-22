const urlParams = new URLSearchParams(window.location.search);
const aname = urlParams.get('name');
const v = urlParams.get('v');

update(aname, v)

async function download(name) {
    const clientid = await clid()
    document.getElementById('dl').innerHTML += `<a id="download-link" href="https://server.aham.repl.co/app/download/${name}/${typeof clientid !== 'string' ? '0' : clientid}"></a>`
    document.getElementById('download-link').click()
    document.getElementById('download-link').remove()
};

async function update(name, v) {
    const clientid = await clid()
    if (v == null || v == '' || v == " ") {
        return document.getElementById("name").innerHTML = `<p class="h5">Error: Invalid parameters</p>`;
    }
    if (name == null || name == '' || name == " ") {
        return document.getElementById("name").innerHTML = `<p class="h5">Error: Invalid parameters</p>`;
    } else {
        if (name == 'sms') {
            document.getElementById("name").innerHTML = `<p class="h5">Application: Store Management System</p>`;
            document.getElementById("userv").innerHTML = `<p class="h5">Your App version: ` + v + `</p>`;
            fetch("https://server.aham.repl.co/app/update", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'name': name, 'version': v, 'clientid': typeof clientid !== 'string' ? '0' : clientid })
            }).then((response) => {
                if (response.status === 200) {
                    response.json().then((data) => {
                        if (data.link === '#') {
                            document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: ` + data.version + `</p>`;
                            document.getElementById("message").innerHTML = `<p class="h5">` + data.message + `</p>`;
                        } else {
                            document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: ` + data.version + `</p>`;
                            document.getElementById("message").innerHTML = `<p class="h5">` + data.message + `<a class="text-decoration-none" href="javascript:download('sms')">Click here to download</a></p>`;
                        }
                    })
                } else if (response.status === 404) {
                    response.json().then((data) => {
                        document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: ` + data.version + `</p>`;
                        document.getElementById("message").innerHTML = `<p class="h5">` + data.message + `</p>`;
                    })
                } else {
                    response.json().then((data) => {
                        document.getElementById("message").innerHTML = `<p class="h5">` + data.error + `</p>`;
                    })
                }
            });
        } else if (name == 'tfx') {
            document.getElementById("name").innerHTML = `<p class="h5">Application: Tahafacex</p>`;
            document.getElementById("userv").innerHTML = `<p class="h5">Your App version: ` + v + `</p>`;
            fetch("https://server.aham.repl.co/app/update", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'name': name, 'version': v, 'clientid': typeof clientid !== 'string' ? '0' : clientid })
            }).then((response) => {
                if (response.status === 200) {
                    response.json().then((data) => {
                        if (data.link === '#') {
                            document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: ` + data.version + `</p>`;
                            document.getElementById("message").innerHTML = `<p class="h5">` + data.message + `</p>`;
                        } else {
                            document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: ` + data.version + `</p>`;
                            document.getElementById("message").innerHTML = `<p class="h5">` + data.message + `<a class="text-decoration-none" href="javascript:download('tfx')">Click here to download</a></p>`;
                        }
                    })
                } else if (response.status === 404) {
                    response.json().then((data) => {
                        document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: ` + data.version + `</p>`;
                        document.getElementById("message").innerHTML = `<p class="h5">` + data.message + `</p>`;
                    })
                } else {
                    response.json().then((data) => {
                        document.getElementById("message").innerHTML = `<p class="h5">` + data.error + `</p>`;
                    })
                }
            });
        } else if (name == 'ftpt') {
            document.getElementById("name").innerHTML = `<p class="h5">Application: FTPT</p>`;
            document.getElementById("userv").innerHTML = `<p class="h5">Your App version: ` + v + `</p>`;
            fetch("https://server.aham.repl.co/app/update", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'name': name, 'version': v, 'clientid': typeof clientid !== 'string' ? '0' : clientid })
            }).then((response) => {
                if (response.status === 200) {
                    response.json().then((data) => {
                        if (data.link === '#') {
                            document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: ` + data.version + `</p>`;
                            document.getElementById("message").innerHTML = `<p class="h5">` + data.message + `</p>`;
                        } else {
                            document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: ` + data.version + `</p>`;
                            document.getElementById("message").innerHTML = `<p class="h5">` + data.message + `<a class="text-decoration-none" href="javascript:download('ftpt')">Click here to download</a></p>`;
                        }
                    })
                } else if (response.status === 404) {
                    response.json().then((data) => {
                        document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: ` + data.version + `</p>`;
                        document.getElementById("message").innerHTML = `<p class="h5">` + data.message + `</p>`;
                    })
                } else {
                    response.json().then((data) => {
                        document.getElementById("message").innerHTML = `<p class="h5">` + data.error + `</p>`;
                    })
                }
            });
        } else if (name == 'ope') {
            document.getElementById("name").innerHTML = `<p class="h5">Application: Online Protracted Examination System</p>`;
            document.getElementById("userv").innerHTML = `<p class="h5">Your App version: ` + v + `</p>`;
            fetch("https://server.aham.repl.co/app/update", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'name': name, 'version': v, 'clientid': typeof clientid !== 'string' ? '0' : clientid })
            }).then((response) => {
                if (response.status === 200) {
                    response.json().then((data) => {
                        if (data.link === '#') {
                            document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: ` + data.version + `</p>`;
                            document.getElementById("message").innerHTML = `<p class="h5">` + data.message + `</p>`;
                        } else {
                            document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: ` + data.version + `</p>`;
                            document.getElementById("message").innerHTML = `<p class="h5">` + data.message + `<a class="text-decoration-none" href="javascript:download('ope')">Click here to download</a></p>`;
                        }
                    })
                } else if (response.status === 404) {
                    response.json().then((data) => {
                        document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: ` + data.version + `</p>`;
                        document.getElementById("message").innerHTML = `<p class="h5">` + data.message + `</p>`;
                    })
                } else {
                    response.json().then((data) => {
                        document.getElementById("message").innerHTML = `<p class="h5">` + data.error + `</p>`;
                    })
                }
            });
        } else {
            return document.getElementById("name").innerHTML = `<p class="h5">Error: Cannot check version ! Try again with proper name</p>`;
        }
    }
}