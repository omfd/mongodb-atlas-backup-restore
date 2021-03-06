let config = {
    atlas_connection: {
        user: '<almightyUserName>',
        password: '<PASSWORD>',
        replicaSet: 'Cluster0-shard-0',
        nodes: [
            'cluster0-shard-00-00-abcdef.mongodb.net:27017',
            'cluster0-shard-00-01-abcdef.mongodb.net:27017',
            'cluster0-shard-00-02-abcdef.mongodb.net:27017'
        ],
        database: 'mydb',
        directory: "dump",
        skip: 0
    },
    restore: {
        user: undefined,
        password: undefined,
        host: 'localhost',
        port: 27017,
        database: 'mydb',
        directory: 'dump',
        skip: 0
    }
};


export {config as configuration}