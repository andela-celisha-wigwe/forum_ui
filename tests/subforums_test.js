module.exports = {
	"SubforumTest" : function (client) {
		client
		.url("http://localhost:8080")
		.waitForElementVisible('body', 1000)
		.assert.title('Roy Forums - Home')
		.end()
	}
}