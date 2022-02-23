class ErrorsMessages {
  badRequest(res, message) {
    return res.status(400).json({
      description: 'Bad Request',
      name: message
    });
  }

  notFound(res, message) {
    return res.status(404).json({
      description: 'Not Found',
      name: message
    });
  }

  invalidPassWd(res, message) {
    return res.status(400).json({
      description: 'Password',
      name: message
    });
  }
}

module.exports = new ErrorsMessages();
