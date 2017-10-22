FROM node:8


RUN mkdir -p /opt/app/sample-app

WORKDIR /opt/app/sample-app

ENV PATH /opt/app/sample-app/node_modules/.bin:$PATH

ADD . /opt/app/

EXPOSE 3000

CMD ["npm", "start", "--no-optional"]
