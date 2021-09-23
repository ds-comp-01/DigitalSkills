exports.appSettings = {
    db: (function(){
        return 'mongodb://fabmedical-d01:GtuNuer7d2YhKy6qk9fNpocopsoroBqgmLzD564G4jiwIeov6JSny6zCH6Ze70vuq3MdpLYBMg8FueWulv5GYQ%3D%3D@fabmedical-d01.mongo.cosmos.azure.com:10255/contentdb?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@fabmedical-d01@';
        //process.env.MONGODB_CONNECTION || 'mongodb://localhost:27017/contentdb';
    })()
};