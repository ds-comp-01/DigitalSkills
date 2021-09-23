host="fabmedical-d01.mongo.cosmos.azure.com"
username="fabmedical-d01"
password="GtuNuer7d2YhKy6qk9fNpocopsoroBqgmLzD564G4jiwIeov6JSny6zCH6Ze70vuq3MdpLYBMg8FueWulv5GYQ=="
dbname="contentdb"
port="10255"

for i in {1..250}; do
    mongo $host:$port/$dbname \
        -u $username -p $password \
        --ssl --sslAllowInvalidCertificates \
        --eval 'db.sessions.insert({"title":"Perf Test"})' &
done