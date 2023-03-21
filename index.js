require("dotenv").config();
const fastify = require("fastify")({ logger: true });
const Knex = require("knex");
const { Model } = require("objection");
const knexConfig = require("./knexfile");
const path = require("path");

// Initialize knex.
const knex = Knex(knexConfig[process.env.NODE_ENV]); // added prodcution incase of mispelling, wont mess up production DB

// Bind all Models to the knex instance. You only
// need to do this once before you use any of
// your model classes.
Model.knex(knex);

fastify.get("/", function (req, reply) {
    console.log("this route was called successfully ");
    return reply.status(200).send({ status: true, data: {}, message: "wellcome to test demo" })
});


const start = async () => {
    try {
        const port = process.env.PORT || 3000;
        await fastify.listen(port);
    } catch (err) {
        fastify.log.error(err);
    }
};
start();
