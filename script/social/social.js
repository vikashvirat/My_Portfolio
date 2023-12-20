var dataJson = [
    {
        "link":"https://instagram.com/stories/vikash_virat2/3233937274719078699?igshid=MTc4MmM1YmI2Ng==",
        "title":"Instagram",
        "icon":"./res/instagram.svg"
    },
    {
        "link":"https://github.com/vikashvirat",
        "title":"GitHub",
        "icon":"./res/github.svg"
    },
    {
        "link":"https://www.linkedin.com/in/vikash-kumara10313249/",
        "title":"linkedin",
        "icon":"./res/linkedin.svg"
    },
    {
        "link":"https://www.youtube.com/@vikashvivek3974",
        "title":"YouTube",
        "icon":"./res/youtube.svg"
    },
    {
        "link":"https://www.hackerrank.com/profile/h200101120071",
        "title":"hackerrank",
        "icon":"./res/hackerrank.svg"
    }
];

var raw_html = "";
dataJson.forEach(function(item){
    raw_html += `<li>
    <a
      rel="noopener"
      href="${item.link}"
      target="_blank"
      title="${item.title}">
      <img title="${item.title}" src="${item.icon}" class="svg-icon"/>
      </a>
  </li>`;
})

document.getElementById('social-links').innerHTML = `<ul>${raw_html}</ul>`;

