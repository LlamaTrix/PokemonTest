document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loadingDiv').style.display = 'flex';

    var script = document.createElement('script');
    script.src = 'scripts/registro.js';
    script.defer = true;
    script.onload = function () {
        document.getElementById('loadingDiv').style.display = 'none';
    };
    document.head.appendChild(script);
});