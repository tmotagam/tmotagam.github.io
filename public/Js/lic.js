const urlParams = new URLSearchParams(window.location.search);
const app = urlParams.get('d');
license(app)

function license(app) {
    if (app == null || app == '' || app == " ") {
        document.getElementById("licenses").innerHTML = `<img src="/public/images/oops.webp" width="200" height="150" alt="">`;
        return document.getElementById("route").innerHTML = `<p class="h5">You are lost let me help you find a way. <a href="/" class="text-decoration-none">click here</a></p>`;
    } else {
        if (app == 'sw') {
            document.getElementById("licenses").innerHTML = `<p class="h5">All of the software are licensed under <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" class="text-decoration-none">GNU GPL 3.0</a> including this website</p>`;
            return document.getElementById("route").innerHTML = `<p class="h5">The Secweb library is licensed under <a href="https://www.mozilla.org/en-US/MPL/2.0/" class="text-decoration-none">MPL 2.0</a></p>`;
        } else if (app == 'ii') {
            document.getElementById("licenses").innerHTML = `<p class="h5">All of the images and icons of my website as well as all the softwares and libraries are licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" class="text-decoration-none">CC BY-NC-ND 4.0</a></p>`;
            return document.getElementById("route").innerHTML = `<p class="h5">This license is also applicable on all the images in my docs as well</p>`;
        } else if (app == 'cd') {
            document.getElementById("licenses").innerHTML = `<p class="h5">All the docs and the content on all the pages of this website are under the <a href="https://www.gnu.org/licenses/fdl-1.3.html" class="text-decoration-none">GNU FDL</a> license</p>`;
            return document.getElementById("route").innerHTML = ``;
        } else {
        document.getElementById("licenses").innerHTML = `<img src="/public/images/oops.webp" width="200" height="150" alt="">`;
        return document.getElementById("route").innerHTML = `<p class="h5">Something is not right about this page. <a href="/" class="text-decoration-none">click here</a></p>`;
        }
    }
}