loadScriptAsync = (callback) => {
    if (typeof callback !== 'function') {
        throw new Error('Not a valid callback for async script load');
    }
    const script = document.createElement('script');
    script.onload = callback;
    script.src = 'https://www.google-analytics.com/analytics.js';
    document.head.appendChild(script);

    const tag = document.createElement('script');
    tag.onload = callback;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=UA-176802245-1';
    document.head.appendChild(tag);
}

loadScriptAsync(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-176802245-1');
})