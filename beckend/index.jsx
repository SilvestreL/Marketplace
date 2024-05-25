const express = require("express")
const cors = require("cors")




const app = express()

app.use(express.json())
app.use(cors())

app.listen(3001, () => console.log("servidor rodando"))


const users = [
    {
        fullName: "Lucas Silvestre",
        email: 'lucas@lucas',
        cpf: '07822816489',
        password: '123',
        confirmPassword: '123'
    }
]

app.get('/usuarios', (request, response) => {
    response.json(users)
})

app.post('/usuarios', (request, response) => {
    console.log(request.body)

    const newUser = request.body

    users.push(newUser)

    response.status(201).json(newUser)
})