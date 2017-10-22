FROM node:8


RUN mkdir -p /opt/app/sample-app

WORKDIR /opt/app/sample-app

RUN npm install -g create-react-app

RUN npm install -g react-scripts

ADD sample-app/package.json /opt/app/sample-app

RUN npm install

ENV PATH /opt/app/sample-app/node_modules/.bin:$PATH

ADD . /opt/app/

EXPOSE 3000

CMD ["npm", "start", "--no-optional"]
#CMD ["tail", "-f", "/dev/null"]
