import request from 'superagent'

export default {
  root: 'http://localhost:3000',
  get (path) {
    return this.wrapCall(request.get(this.root + path))
  },
  post (path, data) {
    return this.wrapCall(request.post(this.root + path, data))
  },
  del (path) {
    return this.wrapCall(request.del(this.root + path))
  },
  put (path, data) {
    return this.wrapCall(request.put(this.root + path, data))
  },
  wrapCall (req) {
    return new Promise((resolve, reject) => {
      req.end((err, res) => {
        if (err || res.statusCode >= 400) {
          console.log(err)
          return reject(Object.assign(res || {}, { err }))
        }
        resolve(res.body)
      })
    })
  }
}
