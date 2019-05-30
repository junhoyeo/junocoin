new Vue({
  el: '#app',
  created () {
    this.updateCommits()
  },
  data () {
    return {
      now: new Date(),
      streak: Math.ceil((new Date() - new Date('2019-03-04')) / 8.64e7),
      commits: [],
      labels: []
    }
  },
  methods: {
    updateCommits () {
      axios.get('https://github-contributions-api.now.sh/v1/junhoyeo?format=nested')
        .then((res) => {
          response = res.data.contributions.contributions[new Date().getFullYear().toString()]
          for (var key in response) {
            for (var _key in response[key]) {
              let commit = response[key][_key]
              if (new Date(commit.date) <= this.now) {
                this.commits.push(commit.count)
                this.labels.push(commit.date)
              }
            }
          }
          updateChart(
            this.labels,
            this.commits
          )
        })
    }
  }
});
