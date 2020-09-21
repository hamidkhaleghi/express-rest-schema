const _ = require('lodash')

const response = (
	res,
	{ response = null, message = null, error = null, status = 200 } = {}
) => {
    if (!res) throw new Error('set the response object')
	return res.status(status).send({
		status,
		result: response,
		message,
		errors: errors && _.pick(errors, ['name', 'details']),
	})
}

module.exports = response
