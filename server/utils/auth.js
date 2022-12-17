const jwt = require('jsonwebtoken');

// const secret = process.env.SECRET_KEY;
const secret = 'ThisI$As3cret';
const expiration = '2h';

module.exports = {
    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
    authMiddleware: function ({ req }) {
        // allows token to be sent via req.query or headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        // ["Bearer", "<token
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        // if no token, return request object as is
        if (!token) {
            return req;
        }

        // decode and attach user data to request object
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        }
        catch {
            console.log('Invalid token');
        }
        return req;
    }
};
