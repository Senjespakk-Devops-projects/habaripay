# Foobar Microservice Template 

This is for test purposes only

## Routes

- Route with auth middleware requires token
- Token lasts for 24 hours
- For authenticated routes, tokens should be present in the Authorization header as such
 `Authorization: Bearer sampleusertoken`
- Success response is in the format
```json
{
    "status": 200,
    "success": true,
    "message": "success",
    "data": {
        ...
    }
}
```
- Error response is in the format
```json
{
    "status": <error_code>,
    "success": false,
    "message": "Sample error message",
    "data": []
}
```
- Responses with status code 422 (validation errors) will contain a JSON object as message, describing the errors for each field
```json
{
    "status": 422,
    "success": false,
    "message": {
        "custom_field_1": [
            "Validation error message for custom_field_1",
            "Another validation error message for custom_field_1"
        ],
        "custom_field_2": [
            "Validation error message for custom_field_2"
        ]
    },
    "data": []
}
```



