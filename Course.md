# Udemy - Elasticsearch 8 and the Elastic Stack

## Notes

- Elastic search is based on Lucene
- Supports different data types
- Old version indexes support a single data type
- Elastic search is naturally horizontal scalable. For that it uses shards and replicas.
- Elastic search uses mainly a REST interface
- Base behavior: **Term Frequency / Inverse Document Frequency (TF/IDF)**
- === <Rev further>
- Mapping. Is a schema definition.
    - field types: string, byte, date, double, boolean
    - field index: not_analyzed
    - analyzer: standard, whitespace, simple, english
    - character filters. Remove HTML encoding, convert & to and
    - Split string on whitespace / punctuation / non-letters
    - lowercasing, stemming, synonyms, stopwords

## Experiments

- Test data - grouplens.org
- download data:

```sh
mkdir data
cd data
curl -O http://media.sundog-soft.com/es/ml-latest-small.zip
```

- mapping command
```sh
./curl.sh -XPUT 127.0.0.1:9200/movies -d '
{
    "mappings": {
        "properties": {
            "year": {
                "type": "date"
            }
        }
    }
}'
```

- get mappings
```sh
./curl.sh -XGET 127.0.0.1:9200/movies/_mapping
```


- import command
```sh
./curl.sh -XPUT 127.0.0.1:9200/movies/_doc/109487 -d '
{
    "genre": ["IMAX", "Sci-Fi"],
    "title": "Interstellar",
    "year": 2014
}'
```

```sh
./curl.sh -XGET 127.0.0.1:9200/movies/_search
```
