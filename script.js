function copyToClipboard(hex) {
    navigator.clipboard.writeText(hex).then(() => {
        const alertBox = document.getElementById('copyAlert');
        alertBox.classList.add('show');
        setTimeout(() => alertBox.classList.remove('show'), 2000);
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

