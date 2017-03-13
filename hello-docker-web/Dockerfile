FROM ubuntu:xenial

# Update apt cache
RUN apt-get update

# Install nodejs
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -
RUN apt-get install -y nodejs

# Clear apt cache
RUN rm -rf /var/lib/apt/lists/*

# Create workspace
RUN mkdir -p /usr/src/hello-docker-web
WORKDIR /usr/src/hello-docker-web

# Install hello-docker-web app
COPY . /usr/src/hello-docker-web
RUN npm install

# Run app on container start up
CMD npm start
EXPOSE 3000