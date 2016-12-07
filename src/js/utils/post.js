import API from './api.js'

// Do the same for post and message

export default {
  all (subforum) {
    return API.get(`/subforums/${subforum}/posts`)
  },
  one (subforum, id) {
    return API.get(`/subforums/${subforum}/posts/${id}`)
  },
  edit (subforum, id, postUpdate) {
    return API.put(`/subforums/${subforum}/posts/${id}`, postUpdate)
  },
  del (subforum, id) {
    return API.del(`/subforums/${subforum}/posts/${id}`)
  },
  create (subforum, newPost) {
    return API.post(`/subforums/${subforum}/posts`, newPost)
  }
}
