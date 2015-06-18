
export PATH := node_modules/.bin:$(PATH)

all: npm js

npm:
	npm install

js:
	webpack index.js bundle.js

js-watch:
	webpack -w index.js bundle.js

server:
	 python -m SimpleHTTPServer
