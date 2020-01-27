docker run /
    --name postgres /
    -e POSTGRES_USER=diego /
    -e POSTGRES_PASSWORD=12304560 \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgress

    docker run --name postgres POSTGRES_USER=diego POSTGRES_PASSWORD=12304560 POSTGRES_DB=heroes -p 5432:5432 -d postgress