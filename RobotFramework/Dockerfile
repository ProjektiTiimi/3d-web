FROM almalinux:latest

RUN dnf update -y

RUN dnf install wget -y

RUN dnf install python39 -y

RUN pip3 install robotframework

RUN pip3 install robot-mongodb-library

WORKDIR "/app"

COPY ./ ./robot
