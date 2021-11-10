const User = require('./schemas/user-schema');
const Paragraph = require('./schemas/paragraph-schema');
const Sesion = require('./schemas/sesion-schema');

const Schemas = {'Users:':User,'Paragraphs':Paragraph,'Sesion':Sesion};

module.exports = Schemas;