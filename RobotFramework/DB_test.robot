#pip install robot-mongodb-library
*** Settings ***
Library   RobotMongoDBLibrary.Insert
Library   RobotMongoDBLibrary.Update
Library   RobotMongoDBLibrary.Find
Library   RobotMongoDBLibrary.Delete

*** Variables ***
&{MONGODB_CONNECT_STRING}=  connection=mongodb://3d-web-mongo-1:27017  database=UusiDB   collection=customers
&{NewCustomer}=   YTunnus=1234test      asiakkaanNimi=robot      postitusosoite=Framework     postinumero=1234    toimipaikka=robotland
&{ModifiedCustomer}=   YTunnus=1234Edit      asiakkaanNimi=robotEdit      postitusosoite=FrameworkEdit     postinumero=12345    toimipaikka=robotlandEdit

*** Test Cases ***
Insert Data
    Insert New Customer  &{NewCustomer}
Find Data
    Find Test Customers  robot
Update Data
    Edit Test Customers  &{ModifiedCustomer}
Remove Test Data
    Remove Test Customers

***Keywords***
Insert New Customer
    [arguments]     &{Customer}
    ${MSG}      InsertOne   ${MONGODB_CONNECT_STRING}    ${Customer}
    Should Be Equal  ${MSG}  INSERTED SUCCESS
    Log To Console  \n${MSG} 

Find Test Customers
    [Arguments]     ${Name}
    &{CustomerToFind}=  Create Dictionary   asiakkaanNimi=${Name}
    ${Customer_documents}     FIND    ${MONGODB_CONNECT_STRING}   ${CustomerToFind}
    Set Global Variable  ${Customer_documents}

Edit Test Customers
    [Arguments]     &{Customer}
    FOR  ${document}  IN  @{Customer_documents}
        ${response}     Update  ${MONGODB_CONNECT_STRING}   ${document['_id']}  ${Customer}
        Should Be Equal     ${response}     UPDATED SUCCESS
    END

Remove Test Customers
    FOR  ${document}  IN  @{Customer_documents}
        ${response}     DeleteOneByID    ${MONGODB_CONNECT_STRING}    ${document['_id']}
        Should Be Equal     ${response}     DELETED SUCCESS
    END
