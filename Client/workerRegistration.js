window.addEventListener('load', () => {
    registerSW().then(() => {
        document
        var html = document.getElementsByTagName('html');
        var ScriptTag = document.createElement("script");
        ScriptTag.setAttribute('src', "./bundle.js");
        html[0].append(ScriptTag);

    });
})
async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./sw.js');
        } catch (e) {
            console.log('Sw Registration Failed');
        }
    }
}