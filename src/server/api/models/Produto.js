/**
 * Produto.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    produtoId: {
      type: 'int',
      required: true,
      unique: true,
      description: 'Id do produto que será utilizado como chave primária da classe.',
      example: '1'
    },

    produtoNome: {
      type: 'string',
      required: true,
      description: 'Nome do produto que será mostrado no site.',
      example: 'Chupeta Meu Neném - cor azul'
    },

    produtoPreco: {
      type: 'float',
      required: true,
      description: 'Preço do produto.',
      example: '4,50'
    },

    produtoDescricao: {
      type: 'string',
      required: true,
      description: 'Descrição do produto.',
      example: 'A mais nova chupeta da marca Meu Neném. Designado para bebês de 1~3 anos.'
    },

    produtoImagem: {
      type: 'blob',
      required: true,
      description: 'Imagem do produto.',
      example: '/images/chupetameunenemazul.jpg'
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

