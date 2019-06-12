
let site = "https://www.ultimateqa.com/automation/";
let user_data = {
    "username": "mongezi9@gmail.com",
    "password": "p@ssword1234",
}

let test_data = {
    "browser": ["chrome", "firefox"],
    "forms": {
        "form 1": {
            "name": "Form one",
            "message": "Filling form"
        },
        "form 2": {
            "name": "Form two",
            "message": "Filling form two"
        }
    }
}

export const data = {
    site,
    user_data,
    test_data
};