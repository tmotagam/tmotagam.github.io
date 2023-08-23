const urlParams = new URLSearchParams(window.location.search);
const aname = urlParams.get('name');
const v = urlParams.get('v');

update(aname, v)

const re = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/gm

async function updatechecker(name, v) {
    const { compare } = window.compareVersions
    let d = {message: '', version: '', link: ''}
    const data = await (await fetch('./data.json')).json()
    Object.entries(data).forEach(([key, value]) => {
        if (name === key) {
            if(re.test(v)) {
                if (compare(v, value, '<')) {
                    d =  {message: 'New version is available ', version: value, link: '$'};
                } else if (compare(v, value, '=')) {
                    d = {message: 'Your application is latest no need to update it', version: value, link: '#'};
                } else {
                    d = {message: 'Error: Enter the parameters correctly', version: value, link: '#'};
                }
            } else {
                d = {message: 'Error: Enter the parameters correctly', version: value, link: '#'};
            }
        }
    });
    return d
}

async function update(name, v) {
    if (v == null || v.trim().length === 0) {
        return document.getElementById("name").innerHTML = `<p class="h5">Error: Invalid parameters</p>`;
    }
    if (name == null || name.trim().length === 0) {
        return document.getElementById("name").innerHTML = `<p class="h5">Error: Invalid parameters</p>`;
    } else {
        if (name == 'sms') {
            document.getElementById("name").innerHTML = `<p class="h5">Application: Store Management System</p>`;
            document.getElementById("userv").innerHTML = `<p class="h5">Your App version: ` + v + `</p>`;
            const data = await updatechecker(name, v);
            if (data.link === '#') {
                document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: ` + data.version + `</p>`;
                document.getElementById("message").innerHTML = `<p class="h5">` + data.message + `</p>`;
            } else {
                document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: ` + data.version + `</p>`;
                document.getElementById("message").innerHTML = `<p class="h5">` + data.message + `<a class="text-decoration-none" target="_blank" href="https://mega.nz/file/p3tCQBLZ#EHVdcZD6DmvIoOjqHRSykRTGWxkpyP9vmTPzBqRpUxI">Click here to download</a></p>`;
            }
        } else if (name == 'tfx') {
            document.getElementById("name").innerHTML = `<p class="h5">Application: Tahafacex</p>`;
            document.getElementById("userv").innerHTML = `<p class="h5">Your App version: ` + v + `</p>`;
            const data = await updatechecker(name, v);
            if (data.link === '#') {
                document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: ` + data.version + `</p>`;
                document.getElementById("message").innerHTML = `<p class="h5">` + data.message + `</p>`;
            } else {
                document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: ` + data.version + `</p>`;
                document.getElementById("message").innerHTML = `<p class="h5">` + data.message + `<a class="text-decoration-none" target="_blank" href="https://mega.nz/file/ZrkAwYaS#xbvx1RDxk0bBYwX3qM5hiJFAF3Aq-flUEntc0gvrtI8">Click here to download</a></p>`;
            }
        } else if (name == 'ftpt') {
            document.getElementById("name").innerHTML = `<p class="h5">Application: FTPT</p>`;
            document.getElementById("userv").innerHTML = `<p class="h5">Your App version: ` + v + `</p>`;
            const data = await updatechecker(name, v);
            if (data.link === '#') {
                document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: ` + data.version + `</p>`;
                document.getElementById("message").innerHTML = `<p class="h5">` + data.message + `</p>`;
            } else {
                document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: ` + data.version + `</p>`;
                document.getElementById("message").innerHTML = `<p class="h5">` + data.message + `<a class="text-decoration-none" target="_blank" href="https://mega.nz/file/kn0l3CSI#qw9AH1xWJDplQcEBpDhTzfX5nIv9K0J0AQWBNQTThxc">Click here to download</a></p>`;
            }
        } else if (name == 'ope') {
            document.getElementById("name").innerHTML = `<p class="h5">Application: Online Protracted Examination System</p>`;
            document.getElementById("userv").innerHTML = `<p class="h5">Your App version: ` + v + `</p>`;
            const data = await updatechecker(name, v);
            if (data.link === '#') {
                document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: ` + data.version + `</p>`;
                document.getElementById("message").innerHTML = `<p class="h5">` + data.message + `</p>`;
            } else {
                document.getElementById("nv").innerHTML = `<p class="h5">Latest Version: ` + data.version + `</p>`;
                document.getElementById("message").innerHTML = `<p class="h5">` + data.message + `<a class="text-decoration-none" target="_blank" href="https://mega.nz/file/grFDDKDB#TMxRFnZMI0hAQaKRW6LnB6ajkcKbb9zo1_pgCLMCN6M">Click here to download</a></p>`;
            }
        } else {
            return document.getElementById("name").innerHTML = `<p class="h5">Error: Cannot check version ! Try again with proper name</p>`;
        }
    }
}