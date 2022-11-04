let a = document.querySelector('.add');
a.addEventListener('click', function (event) {
    event.preventDefault();
    let tl = document.querySelector('.task-list')
    let cont = document.createElement('div');
    let lis = document.createElement('li');
    let d = document.querySelector('.list');
    lis.textContent = d.value;
 
    let e = document.createElement('button');
    e.classList.add('cancel');
    e.innerHTML = '<i class="fa-solid fa-xmark" src="/xmark-solid.svg">'
    cont.style.display = 'flex';

    e.addEventListener('click', function () {
        let r = e.parentElement;
        r.remove();
    })
    if (d.value.trim().length == 0) {
        return false
    }
    else {
    cont.append(lis);
    cont.append(e);
    tl.append(cont);
    d.value = null;

    let ar = document.querySelector('.arrw1');
    ar.addEventListener('click', function () {
        let m = []
        let l = document.querySelectorAll('li');
        l.forEach(el => {
            m.push(el.innerText);
        })
        m.sort();
        for (let i = 0; i < m.length; i++) {
            let z = document.querySelectorAll('li')[i];
            z.textContent = m[i];
        };
    })

    let ar1 = document.querySelector('.arrw2');
    ar1.addEventListener('click', function () {
        let m1 = []
        let h = document.querySelectorAll('li');
        h.forEach(el => {
            m1.push(el.innerText);
        })
        m1.sort();
        m1.reverse();
        for (let i = 0; i < m1.length; i++) {
            let z = document.querySelectorAll('li')[i];
            z.textContent = m1[i];
        };
    })
}

})