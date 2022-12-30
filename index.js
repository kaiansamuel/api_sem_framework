const http = require('http')

const server = http.createServer((request, response) => {
  const result = {
    message: 'Minha primeira resposta!',
  }

  response.statusCode = 201
  response.setHeader('Content-type', 'application/json')
  response.statusMessage = 'Usuário salvo com sucesso!'

  response.write(JSON.stringify(result))
  response.end()

})
server.listen(3000, () => console.log('Server started!'))