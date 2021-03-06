################################################################################
Create a prisma container
################################################################################

    prisma init

################################################################################
For running the container
################################################################################

    cd prisma
    dockerd
    docker-compose up -d

Access prisma GraphQL playground at localhost:4466

################################################################################
To update the prisma for latest schema
################################################################################

    prisma deploy

################################################################################
To run custom node server
################################################################################

    cd ..
    npm run dev

Access its GraphQL playground at localhost:4000

################################################################################
To kill a container
################################################################################

get container id from
    docker ps
then 
    docker kill {container id}

################################################################################
use sudo with docker commands if the right permissions are not set up
################################################################################

################################################################################
To get logs docker logs -f (container id) 
################################################################################

################################################################################
To access playgrounds with auth
################################################################################

run
    prisma token
to get a token
in prisma playgrounds add http header
{
    "Authorization":"Bearer {token}"
}

################################################################################
prisma delete to delete all data
################################################################################

################################################################################
To get get-schema to work after auth
################################################################################

Create entry for prisma inside extentions in .graphqlconfig
It will make the get-schema command to look for the file locally and not through :4466, which is protected

################################################################################
Changing prisma datamodel
################################################################################

after changing prisma's datamodel, 
    cd ..
    npm run get-schema
To update bindings datamodel

################################################################################
To use environment variables
################################################################################

    prisma deploy -e ../config/dev.env

-e to specify use of env followed by path

################################################################################
To deploy to prod
################################################################################

    prisma login 
to login
choose your server and continue, prisma.yml file will now contain the correcct address, copy it over to prod.env

################################################################################
Heroku setup
################################################################################

    npm i -g heroku
    heroku login
    heroku create
(this automatically creates and sets heroku's repo and set it as remote)
    git push heroku master

################################################################################
Heroku env variables
################################################################################

They can be set mannually through the web interface, but for cli
    heroku config:set key=value

We can run
    heroku config
To see all the set up environment variables


################################################################################
Graphql is a dependency of apollo-boost, not redundant
################################################################################

################################################################################
Node doesnt support fetch like the browser does, thus cross-fetch is installed
################################################################################

################################################################################