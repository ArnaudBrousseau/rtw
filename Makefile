all: virtualenv_run

virtualenv_run:
	virtualenv --python=python2.7 virtualenv_run

start:
	heroku local web

deploy:
	git push heroku master
