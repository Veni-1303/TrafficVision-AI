from models.user import User

VALID_USER = User(
    email="admin@trafficvision.com",
    password="admin123"
)

def authenticate(email, password):

    if email == VALID_USER.email and password == VALID_USER.password:

        return {
            "status": "success",
            "message": "Login Successful"
        }

    return {
        "status": "failed",
        "message": "Invalid Email or Password"
    }