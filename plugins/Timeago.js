import Vue from 'vue'
import VueTimeago from 'vue-timeago'

Vue.use(VueTimeago, {
  name: 'timeago',
  locale: 'en-US',
  locales: {
    'en-US': [
      "just now",
      ["%s second ago", "%s seconds ago"],
      ["%s minute ago", "%s minutes ago"],
      ["%s hour ago", "%s hours ago"],
      ["%s day ago", "%s days ago"],
      ["%s week ago", "%s weeks ago"],
      ["%s month ago", "%s months ago"],
      ["%s year ago", "%s years ago"],
    ]
  },
})
