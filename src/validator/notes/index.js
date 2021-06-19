/* eslint-disable linebreak-style */
const { NotePayloadSchema } = require('./schema');
const InvariantError = require('../../exceptions/InvariantError');

const NotesValidator = {
  validateNotePayload: (payload) => {
    const validationResult = NotePayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.Error.message);
    }
  },
};

module.exports = NotesValidator;
