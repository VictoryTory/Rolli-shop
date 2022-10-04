window.addEventListener('click', function (event) {

    let counter;

    if(event.target.dataset.action === 'minus' || event.target.dataset.action === 'plus') {
        const counterWrapper = event.target.closest('.counter-wrapper');

        counter = counterWrapper.querySelector('[data-counter]');
    }

    if(event.target.dataset.action === 'plus') {

        counter.innerText = ++counter.innerText;
    }

    if(event.target.dataset.action === 'minus') {

        if(parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }
    }
});