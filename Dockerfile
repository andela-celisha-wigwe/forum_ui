FROM node:6.9
RUN mkdir /myapp_ui
WORKDIR /myapp_ui
ADD ./package.json /myapp_ui/package.json
RUN npm install
ADD ./src /myapp_ui/src
ADD ./utils /myapp_ui/utils
ADD ./shared /myapp_ui/shared
ADD ./config.json /myapp_ui/config.json
ADD ./webpack.config.js /myapp_ui/webpack.config.js
ADD ./.babelrc /myapp_ui/.babelrc
ADD ./.eslintrc /myapp_ui/.eslintrc
ADD ./.gitignore /myapp_ui/.gitignore
ADD ./nightwatch.json /myapp_ui/nightwatch.json
ADD ./ete.sh /myapp_ui/ete.sh
ADD ./.gitmodules /myapp_ui/.gitmodules
#=RUN git submodule update
RUN npm run build
RUN npm run dist
RUN npm rebuild node-sass