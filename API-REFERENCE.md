# API Reference

in this page

-   [Signp](#signup)

**⚠️ Api key must be there in `Authorization` header in every request.**

## Http status codes

| Status code | Description           |
| :---------- | :-------------------- |
| `200`       | OK                    |
| `201`       | Created               |
| `400`       | Bad Request           |
| `403`       | Forbidden             |
| `409`       | Conflict              |
| `500`       | Internal Server Error |

## Auth

### Signup

```http
POST: /api/auth/signup
```

**Body:**

```json
{
	"fname": "Ayush",
	"lname": "Chugh",
	"email": "ayushchugh2006@gmail.com",
	"phone": 987654321,
	"password": "something",
	"cpassword": "something"
}
```

**Response:**

| status code | message                                    | reason                              |
| :---------- | :----------------------------------------- | :---------------------------------- |
| `201`       | User created successfully                  | if request was successful           |
| `400`       | Please fill in all fields                  | if any filed in body is missing     |
| `400`       | Password and Confirm Password do not match | password and cpassword are not same |
| `409 `      | Email or phone already exists              | User already exists in Data Base    |
| `500 `      | Internal server error                      | Internal server error               |

_User created successfully `201`:_

```json
{
	"success": true,
	"message": "User created successfully",
	"data": {
		"fname": "Ayush",
		"lname": "Chugh",
		"email": "ayushchugh2006@gmail.com",
		"phone": 98765431,
		"password": "$2b$10$q0Hlqu6PE8GMDDkqHRmBgOTNc8.AKpI9gMF8TdNkooX/q3x16CQdq",
		"orders": [],
		"_id": "61c45eeea069468f12c078aa",
		"__v": 0
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzQ1ZWVlYTA2OTQ2OGYxMmMwNzhhYSIsImlhdCI6MTY0MDI1OTMxMH0.wrLOMeEzUDunR5ladDrggHnSrQvcuzjxYnSiNXAk3kM"
}
```
