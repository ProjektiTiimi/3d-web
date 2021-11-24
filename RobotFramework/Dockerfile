FROM almalinux:latest

RUN dnf update -y

RUN dnf install wget -y

RUN dnf install python39 -y

RUN pip3 install robotframework

RUN pip3 install robot-mongodb-library

RUN pip3 install --upgrade robotframework-seleniumlibrary

RUN pip3 install webdrivermanager

RUN webdrivermanager chrome --linkpath /usr/local/bin

RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm

RUN dnf localinstall google-chrome-stable_current_x86_64.rpm -y

WORKDIR "/app"

COPY ./ ./robot
