const styles = `
  /* Common */
  body {
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    color: #4a4a4a;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5;
  }
  h1, h2, h3, h4, ul, p {
    margin: 0;
    padding: 0;
  }
  a {
    color: #3273dc;
    text-decoration: none;
  }
  a:hover {
    color: #363636;
  }
  /* Layout */
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
  }
  /* Header */
  .header {
    width: 100%;
  }
  .navbar {
    display: flex;
    align-items: stretch;
    flex-grow: 1;
    max-width: 936px;
    min-height: 3.25rem;
    margin: 0 auto;
  }
  .navbar-menu {
    display: flex;
    align-items: stretch;
    justify-content: flex-end;
    margin-left: auto;
    padding-right: 20px;
  }
  .navbar-menu > a {
    display: flex;
    align-items: center;
    padding: .5rem .75rem;
    color: #4a4a4a;
  }
  .navbar-menu > a:hover {
    background-color: #fafafa;
    color: #3273dc;
  }
  .header > h1 {
    margin: 20px 0;
    padding: 0;
    font-family: 'Frank Ruhl Libre',serif;
    font-size: 5em;
    font-weight: 400;
    text-align: center;
  }
  .header > h1 > a {
    color: #363636;
    text-decoration: none;
  }
  /* About */
  .profile {
    display: flex;
    padding: .5rem 0;
  }
  .profile img {
    width: 105px;
    height: 105px;
  }
  .profile aside {
    padding: 0 4rem;
  }
  .profile aside ul {
    display: flex;
    margin-top: .5em;
    list-style: none;
  }
  .profile aside ul li {
    margin-right: 1.5rem;
  }
  /* Footer */
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 3.25rem;
    margin-top: auto;
  }
  /* Section */
  section {
    display: block;
    width: auto;
    width: 936px;
    margin: 0 auto 1.5rem;
    padding: 1rem 0;
  }
  section > h2 {
    margin-bottom: 30px;
    font-family: 游明朝,Yu Mincho,YuMincho,Hiragino Mincho ProN,Hiragino Mincho Pro,HGS明朝E,メイリオ,Meiryo,serif;
    font-size: 1.6em;
    font-weight: 600;
  }
  /* Entries */
  .entries-item {
    margin-bottom: 25px;
  }
  .entries-item h4 {
    margin-bottom: .8em;
  }
  .entries-item h4 a {
    color: #4a4a4a;
  }
  .entries-item h4 a:hover {
    color: #3273dc;
  }
  .entries-item p {
    font-size: .9em;
  }
  /* Entry */
  .entry-title {
    padding-top: 20px;
    padding-bottom: 40px;
    text-align: center;
  }
  .entry-title h1 {
    font-family: 游明朝,Yu Mincho,YuMincho,Hiragino Mincho ProN,Hiragino Mincho Pro,HGS明朝E,メイリオ,Meiryo,serif;
    font-size: 2em;
    font-weight: 700;
  }
  .entry-title h1 a {
    color: #4a4a4a;
  }
  .entry-title h1 a:hover {
    color: #3273dc;
  }
  .entry-content p {
    margin: 0 0 1em;
    padding: .2em 0;
    line-height: 1.8em;
    font-size: 1.1em;
  }
  .entry-content pre {
    margin: 0 0 1.2em;
    padding: 1.2em;
    line-height: 1.3;
    overflow: auto;
    border: 1px solid #ddd;
    background-color: #0a263f;
    color: #fff;
    font-size: 0.9em;
    white-space: pre-wrap;
  }
  .entry-content p code,
  .entry-content ul code {
    padding: .2em .4em;
    border-radius: 6px;
    background-color: #f0f0f0;
  }
  .entry-content pre, .entry-content pre code {
    font-family: Consolas, monospace;
  }
  .entry-content > ul {
    margin: 1em 0 1em 2em;
    padding: 0;
  }
  .entry-content ul {
    margin-left: 2em;
  }
`;

const getStyles = (): string => styles;

export { getStyles };
