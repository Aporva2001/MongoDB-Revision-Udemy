db.createCollection("posts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "text", "creator", "comments"],
      properties: {
        title: {
            bsonType: "string",
            description: "Must be a string and is required"
        },
        text: {
            bsonType: "string",
            description: "Must be a string and is required"
        },
      creator: {
        bsonType: "objectId",
        description: "Must be an objectID and is required"
      },
      comments: {
        bsonType: "array",
        description: "Must be an array and is required",
        items: {
            bsonType: "object",
            required: ["text","author"],
            properties: {
                text: {
                    bsonType: "string",
                    description: "Must be a string and is not required"
                },
                author: {
                    bsonType: "objectId",
                    description: "Must be a objectId and is not required"
                }
            }
        }
    }
}
    },
  },
});
