# Polling-Backend

This is a backend project intended to used at platforms where polling/voting type of situation is expected. With this API you can
- Create your own questions
- Delete the questions
- Add Options to the questions
- View questions along with its options
- Delete Options
- Add Votes to the options

# Use Postman to run and test following links:

# Important endpoints of the API
- Create your own questions: https://polling-api-production.up.railway.app/question/create
- Delete the questions: voteforme-https://polling-api-production.up.railway.app/question/:id/delete
- Add Options to the questions: https://polling-api-production.up.railway.app/question/:id/options/create
- View questions along with its options: https://polling-api-production.up.railway.app/question/:id
- Delete Options: voteforme: https://polling-api-production.up.railway.app/option/:id/delete
- Add Votes to the options : https://polling-api-production.up.railway.app/option/:id/add_vote


# Tech Stack:
- NodeJS
- MongoDB
