import {test} from "@playwright/test";

test('login within api', async({request})=> {
    const res = await request.post('https://qacart-todo.herokuapp.com/api/v1/users/login', {
        data: {
            email: "hatem@example.com",
            password: "123456"
        }
    })

    console.log(res)
})