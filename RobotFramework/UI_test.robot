***Settings***
Library     SeleniumLibrary

Suite Teardown      Close Browser

***Variables***

${URL}      http://localhost:3000

${Browser}  Chrome

***Test Cases***
Login
    Open Browser To Login Page
    Set Selenium Speed  0.2

Add Customer
    Navigate To Add Customer
    Add Data For New Customer
    Save New Customer

Modify Customer
    Navigate To Customerlist
    Select Customer
    Modify Customer

    

Add Data For invoice
    Fill First Form Invalid Data
    Fill First Form Valid Data
    Fill Second Form

***Keywords***

Open Browser To Login Page
    Open Browser    ${URL}  ${Browser}  
    #options=add_argument("--ignore-certificate-errors"); add_experimental_option("excludeSwitches", ["enable-logging"]); add_argument('--window-size=1920,1080'); add_argument('--no-sandbox')
    Maximize Browser Window

Navigate To Add Customer
    Click Element       //*[@id="root"]/div/nav/ul/li[2]/a
    Location Should Contain     /addcustomer

Add Data For New Customer
    Input Text  //*[@id="root"]/div/div/input[1]    RobotYTunnus
    Input Text  //*[@id="root"]/div/div/input[2]    RobotYritys
    Input Text  //*[@id="root"]/div/div/input[3]    Robottiosoite
    Input Text  //*[@id="root"]/div/div/input[4]    12345
    Input Text  //*[@id="root"]/div/div/input[5]    RobottiKaupunki

Save New Customer
    Click Element  //*[@id="root"]/div/div/button

Navigate To Customerlist
    Click Element  //*[@id="root"]/div/nav/ul/li[1]/a
    Location Should Contain     /invoice

Select Customer
    Input Text  //*[@id="root"]/div/div/div[1]/input  RobotYritys
    Click Element  //*[@id="root"]/div/div/div[1]/div[1]/div/a/button

Modify Customer    
    Input Text  //*[@id="root"]/div/div/input[1]    RobotEdit
    Input Text  //*[@id="root"]/div/div/input[2]    RobotEdit
    Input Text  //*[@id="root"]/div/div/input[3]    RobottiEdit
    Input Text  //*[@id="root"]/div/div/input[4]    12345678
    Input Text  //*[@id="root"]/div/div/input[5]    RobottiEdit
    Click Element  //*[@id="root"]/div/div/button
    Navigate To Customerlist
    Input Text  //*[@id="root"]/div/div/div[1]/input  RobotEdit
    Click Element  //*[@id="root"]/div/div/div[1]/div/div/button

Fill First Form Invalid Data
    Location Should Contain     /invoice
    Input Text  //*[@id="root"]/div/div/div[2]/input[1]     FI37 1590 3000 0007 77
    Input Text  //*[@id="root"]/div/div/div[2]/div[3]/input[1]  123456789
    Click Element  //*[@id="root"]/div/div/div[2]/button
    Element Should Not Be Visible  //*[@id="barCodeImg"]/img

Fill First Form Valid Data
    Location Should Contain     /invoice
    Input Text  //*[@id="root"]/div/div/div[2]/input[1]     FI37 1590 3000 0007 76
    Input Text  //*[@id="root"]/div/div/div[2]/div[3]/input[1]  123456789
    Click Element  //*[@id="root"]/div/div/div[2]/button
    Element Should Be Visible  //*[@id="barCodeImg"]/img


Fill Second Form
    Input Text  //*[@id="root"]/div/div/div[3]/div/input[1]  RobottiLasku
    Input Text  //*[@id="root"]/div/div/div[3]/div/input[2]  2
    Input Text  //*[@id="root"]/div/div/div[3]/div/input[3]  44
    Click Element  //*[@id="root"]/div/div/div[3]/button 
    ${kpl}=  Get Text  //*[@id="DivToPrint"]/body/div[1]/table[1]/tr/td[2]
    Should Be Equal As Strings  ${kpl}  2
    ${hinta}=  Get Text  //*[@id="DivToPrint"]/body/div[1]/table[1]/tr/td[3]
    Should Be Equal As Strings  ${hinta}    44