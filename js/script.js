
let clipboard1 = new ClipboardJS(".button-copy");
let clipbtn = document.querySelector(".button-copy");

clipboard1.on('success', function (e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    setTimeout(() => {
        setTimeout(() => {
            e.trigger.classList.toggle('success');
        }, 1500)
        e.trigger.classList.toggle('success');
    }, 300)
    e.clearSelection();
});

clipboard1.on('error', function (e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);

    setTimeout(() => {
        setTimeout(() => {
            e.trigger.classList.toggle('error')
        }, 1500)
        e.trigger.classList.toggle('error');
    },300)
    e.clearSelection();
});

