module.exports = {
    "get":
    {
        "tags": ["healthcheck"],
        "summary": "Get authentication of the user",
        "description": "this endpoint gives a token for using the sistem",
        "produces": ["application/json"],
        "responses":
        {
            "200":
            {
                "description": "OK",
                "content":
                {
                    "application/json":{
                        "schema":{
                            "$ref": "#/components/schemas/Healthcheck"
                        }
                    }
                }
            }
        }
    }
};