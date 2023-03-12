# Polling-Backend

This is a backend project intended to used at platforms where polling/voting type of situation is expected. With this API you can
- Create your own questions
- Delete the questions
- Add Options to the questions
- View questions along with its options
- Delete Options
- Add Votes to the options

# Important endpoints of the API
- Create your own questions: http://localhost:{port}/question/create
- Delete the questions: voteforme-http://localhost:{port}/question/:id/delete
- Add Options to the questions: http://localhost:{port}/question/:id/options/create
- View questions along with its options: http://localhost:{port}/question/:id
- Delete Options: voteforme: http://localhost:{port}/option/:id/delete
- Add Votes to the options : http://localhost:{port}/option/:id/add_vote


# Tech Stack:
- NodeJS
- MongoDB
