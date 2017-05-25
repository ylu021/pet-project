export default {
  fetchPopRepos: (lang) => {
    const encodedURI = encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + lang +
      '&sort=stars&order=desc&type=Repositories'
    )

    console.log('uri', encodedURI)

    return fetch(encodedURI).then( res => res.json() ).then((res)=>{
      return res.items
    })
  }
}
