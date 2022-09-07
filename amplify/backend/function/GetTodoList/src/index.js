const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
    TableName: 'todolist-serverless'
}

async function getItems() {
    try {
        const data = await docClient.scan(params).promise();
        return data;
    } catch(err) {
        console.log(err);
        return err
    }
}

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    try {
        const data = await getItems();

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify(data),
        };
    } catch (err) {
        return { error: err }
    }
};
