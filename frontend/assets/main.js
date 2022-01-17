btn.onclick = async(env) => {
    let res = await fetch("http://localhost:4000/api/users", {
        method: 'POST',
        body: JSON.stringify({
            username: inputusername.value,
            password: inputpassword.value,
            age: inputage.value,
            gender: inputgender.value

        })
    })
    res = await res.json()

}