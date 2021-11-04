#python3 -m venv venv
#source venv/bin/activate  On windows: venv/Scripts/activate
#pip install --upgrade RESTinstance
***Settings***
Library  REST    http://localhost:8040

*** Variables ***
${register-json}     {"username": "RobottiTesti", "password": "RobottiPassu" }
${message}
${login-token}
${customer-json}    {"YTunnus": "RobotYTunnus", "asiakkaanNimi": "Robotti", "Postitusosoite": "Robottiosoite", "Postinumero": "11111", "Toimipaikka": "Robotland"}
${customer-id}
${editName}         RobotTest

*** Test Cases ***
Login Test
    Register
    Login With False Credentials
    Login
Route Tests
    Test Route GET /customers
    Test Route POST /customer
    Test Route GET /customer:id
    Test Route PATCH /customer:id
    Test Route DELETE /customer:id
    

***Keywords***
Register
    POST  /user/register    ${register-json}
    ${message}=  REST.Output  response body message
    Should Be true  '${message}' == '1 User created succesfully.' or '${message}' == 'User already exists'

Login With False Credentials
    POST  /user/login
    ${message}=  REST.Output  response body message
    Should Be Equal As Strings  ${message}  User not found

Login
    POST  /user/login   ${register-json}
    ${message}=  REST.Output  response body username
    Should Be Equal As Strings  ${message}  RobottiTesti
    ${token}=   Rest.Output  response body token
    Set Global Variable  ${login-token}  ${token}

Test Route GET /customers
    GET  /customers
    ${message}=  REST.Output  response body message
    Should Be Equal As Strings  ${message}  No auth token provided
    Log  ${login-token}
    Get  /customers  headers={"x-access-token": "${login-token}"}
    ${message}=  REST.Output  response reason
    Should Be Equal As Strings  ${message}  OK

Test Route POST /customer
    POST  /customer  ${customer-json}
    ${message}=  REST.Output  response body _id
    Set Global Variable  ${customer-id}  ${message}
    Log To Console  ${customer-id}

Test Route GET /customer:id
    GET  /customer/${customer-id}
    ${message}=  REST.Output  response body _id
    Should Be Equal As Strings  ${message}  ${customer-id}

Test Route PATCH /customer:id
    PATCH  /customer/${customer-id}  { "asiakkaanNimi": "${editName}" }
    GET  /customer/${customer-id}
    ${message}=  REST.Output  response body asiakkaanNimi
    Should Be Equal As Strings  ${message}  ${editName}

Test Route DELETE /customer:id
    DELETE  /customer/${customer-id}
    ${message}=  REST.Output  response reason
    Should Be Equal As Strings  ${message}  OK