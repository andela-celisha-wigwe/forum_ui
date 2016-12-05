import API from './api.js'

// Do the same for post and message

export default {
  all() {
    return API.get('/subforums')
  }
  one(id) {
    return API.get(`/subforums/${id}`)
  }
  edit(id, new_content) {
    return API.put(`/subforums/${id}`, new_content)
  }
  del(id) {
    return API.del(`/subforums/${id}`)
  }
  create(new_content) {
    return API.post(`/subforums`, new_content)
  }
}