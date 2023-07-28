# Mid Term Project (Backend Only)
This project is submitted for the mid-term project of Full Stack Engineering on GIGIH 3.0 Program.
# Database Structure and Schema
- `videos`

```json
{
	"_id": "string",
	"imgURL": "string"
}
```

- `products`

```json
{
    "_id": "string",
    "video_id": "string",
    "product_id": "string",
    "url": "string",
    "title": "string",
    "price": "string"
}
```

- `comments`

```json
{
    "_id": "string",
    "video_id": "string",
    "username": "string",
    "comment": "string"
}
```

# API Structure
![api structure](./asset/Diagram.png)

# List API Request
- `vidio`
```json
- /vidios
- /addVidio
```
- `product`
```json
- /:vidio_id/product
- /:vidio_id/addProduct
```
- `comment`
```json
- /:vidio_id/comment
- /:vidio_id/addComment
```

# Documenter Postman
https://documenter.getpostman.com/view/18804867/2s9XxsWH2s

# How to run in local
Clone this repository
```
https://github.com/verydianT/mid-Term-Project.git
```
Install the packages
```bash
npm install
```
Open `.env.example` file in the folder, then set it into your database connection.
And Use ```npm start``` to run the program.#   m i d - T e r m - P r o j e c t 
 
 
