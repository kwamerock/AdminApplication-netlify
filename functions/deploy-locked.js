const fetch = require("node-fetch");


// Based on example 7 here: https://functions-playground.netlify.app/

exports.handler = async (event, context) => {
	if (event.httpMethod !== "POST") {
		return { statusCode: 405, body: "Method Not Allowed" };
	}

	var payload = JSON.parse(event["body"])["payload"];
	var message = "<" + payload["admin_url"] + "|" + payload["name"] + "> is `" + payload["state"] + "`";
	var data = {
		"blocks": [
            {
	            "type": "section",
	            "text": {
	                "type": "mrkdwn",
	                "text": "Netlify build notifications:"
	            }
	        }
        ],
        "attachments": [
            {
                "color": "#0d66a6",
                "blocks": [
	                {
			            "type": "section",
			            "text": {
			                "type": "mrkdwn",
			                "text": message
			            }
			        }
                ]
            }
        ]
    }
	console.log(data);

	return fetch(process.env.SLACK_OPERATIONS_WEBHOOK_URL, {
		headers: {
			"content-type": "application/json"
		},
		method: "POST",
		body: JSON.stringify(data)
	})
};