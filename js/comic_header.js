//the header of the site would be handled in this javascript file, so you don't have to copypaste it onto every page.
//There are much better methods of handling the header out there but you can stick with this one if you want
document.write(`
    <header align="center">
        <a href="index.html"><img src="./img/logo.png" alt="" /></a> 

        <div id="nav">
            <a href="index.html">HOME</a> |
            <a href="archive.html">ARCHIVE</a> |
            <!--<a href="about.html">ABOUT</a> |
            <a href="characters.html">CHARACTERS</a>-->
			<a href="https://patreon.com/artifly">PATREON</a> | 
			<a href="https://www.patreon.com/posts/56257753">GALLERY</a> |			
			<!--<a href="https://artifice.cf/feed.rss">SUBSCRIBE</a> |-->
			<a href="https://www.topwebcomics.com/vote/25875">VOTE</a>
        </div>
    </header>
`);