module.exports = {
  book: {
      assets: "./assets",
      js: [
          "https://unpkg.com/github-comments@0.5.0/gc.js"
      ],
      css: [
          "plugin.css"
      ]
  },
  hooks: {
    "page": function(page) {
      if (this.output.name != 'website') return page;
      if (!page.issue_id) return page;

      var _repo = this.config.get('pluginsConfig.ghcomment.repo');
      var _owner = this.config.get('pluginsConfig.ghcomment.owner');
      var _issue_id = page.issue_id;

      //var _gh_comments_js = '<script async src="https://unpkg.com/github-comments/gc.js"></script>'
      var _gh_comments_div = '<div class="gc-comments" data-repos="_owner/_repo" data-issues="_issue_id" >'.replace('_owner', _owner).replace('_repo', _repo).replace('_issue_id', _issue_id);
      var _gh_comments_div = _gh_comments_div + '<div class="gc-comments-title">评论</div>';
      var _gh_comments_div = _gh_comments_div + '<div class="gc-comments-info">';
      var _gh_comments_div = _gh_comments_div + '请访问 <a target="_blank" href="issues_link#new_comment_field">GitHub issue</a> 提交评论';
      var _gh_comments_div = _gh_comments_div + '</div></div>';
      page.content = page.content + _gh_comments_div;
      return page;
    }
  }
};
