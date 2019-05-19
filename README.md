# Getting started

To get the Node server running locally:

- Clone this repo
- `docker-compose up`

Server is running by default on port 3000. You can change it by editing the `.env` file.

This project uses `eslint`.

## List of endpoints

- `post /stations` with `name`
- `get /stations/:id`
- `put /stations/:id` with `name`
- `delete /stations/:id`

- `post /cars` with `name`, `available` and `station` (station id)
- `get /cars/:id`
- `put /cars/:id` with `name`, `available` and `station` (station id)
- `delete /cars/:id`
