/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const todoList = {
        'items': [
            'Solve human suffering',
            'Implement world peace',
            'Cure cancer',
            'Buy Bananas',
            'Pass Basic Income for everyone',
            'Take a cool photograph',
        ]
    };

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify(todoList),
    };
};
