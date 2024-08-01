# Test @elastic/elasticsearch

Reference: [https://www.npmjs.com/package/@elastic/elasticsearch](https://www.npmjs.com/package/@elastic/elasticsearch)

```sh
pnpm install
```

Add `.env` file with:

```
ELASTIC_CLOUD_HOST=
ELASTIC_CLOUD_USER=
ELASTIC_CLOUD_PASSWORD=
```


## Docker local environment

### Configure

Create a `.env` file with:

```
ELK_VERSION=8.14.3
KIBANA_USERNAME=
KIBANA_PASSWORD=

```

```sh
cd elk-on-docker
docker compose up -d
```

### Kibana Access:

[localhost:5601](http://localhost:5601)

Remove environment completely:

```sh
docker compose down --rmi all -v
```
