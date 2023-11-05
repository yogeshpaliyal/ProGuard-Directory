import Ajv from "ajv";
import { data } from "../src/db";
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const schema = {
    type: "object",
    properties: {
        name: {type: "string"},
        link: {type: "string"},
    },
    required: ["name", "link"],
    additionalProperties: false
}

const validate = ajv.compile(schema)

const valid = validate(data)
if (!valid) console.log(validate.errors)
