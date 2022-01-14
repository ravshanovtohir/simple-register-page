(async() => {
    let res = await fetch('http://localhost:4000')
    res = await res.json()
    for (let user of res) {
        let li = document.createElement('li')
        let p = document.createElement('p')
        p.textContent = user.username
        li.append(p)
        wrapper.append(li)
    }
})()