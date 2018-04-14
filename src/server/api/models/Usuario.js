/**
 * Usuario.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    usuarioId: {
      type: 'int',
      required: true,
      unique: true,
      description: 'Id do usuário que será utilizado como chave primária da classe.',
      example: '1'
    },

    usuarioNome: {
      type: 'string',
      required: true,
      maxLength: 40,
      description: 'Primeiro nome do usuário.',
      example: 'Lucas'
    },

    usuarioSobrenome: {
      type: 'string',
      required: true,
      maxLength: 40,
      description: 'Sobrenome(s) do usuário.',
      example: 'Ferreira'
    },

    usuarioSenha: {
      type: 'string',
      required: true,
      maxLength: 18,
      description: 'Senha do usuário',
      example: 'luquinhas123'
    },

    usuarioCEP: {
      type: 'string',
      required: true,
      maxLength: 9,
      description: 'CEP do usuário',
      example: '21011200'
    },

    usuarioEndereco: {
      type: 'string',
      required: true,
      maxLength: 100,
      description: 'Endereço do usuário',
      example: 'Rua das Couves'
    },

    usuarioComplemento: {
      type: 'string',
      required: false,
      maxLength: 40,
      description: 'Complemento do usuário (caso tenha)',
      example: 'Fundos'
    },

    usuarioNumero: {
      type: 'string',
      required: true,
      maxLength: 6,
      description: 'Número da casa do usuário',
      example: '25'
    },

    usuarioUF: {
      type: 'string',
      required: true,
      maxLength: 2,
      description: 'UF do usuário em sigla',
      example: 'RJ'
    },

    usuarioCidade: {
      type: 'string',
      required: true,
      description: 'Cidade do usuário',
      example: 'Rio de Janeiro'
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

