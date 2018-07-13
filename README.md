# RTW -- RememberThatWord

A simple Python app built on Heroku and RememberTheMilk to memorize vocabulary easily.

## Deploying

This app is deployed with `git` and the `heroku` command-line tool. To install it:

    $ curl https://cli-assets.heroku.com/install.sh | sh

Then, inside of this repo:

    $ heroku git:remote -a rtw-prod
    $ git push heroku master
