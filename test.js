echo "const assert = require('assert'); 
const http = require('http');

describe('Basic test', function() {
    it('should return hello message', function(done) {
        http.get('http://localhost:80808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080/', (res) => {
            let data = '';
            res.on('data', chunk => { data += chunk; });
            res.on('end', () => {
                assert.strictEqual(data, 'Hello from Node.js app!');
                done();
            });
        });
    });
});" > test.js

