//the header of the site would be handled in this javascript file, so you don't have to copypaste it onto every page.
//There are much better methods of handling the header out there but you can stick with this one if you want
document.write(`
    <header align="center">
        <a href="index.html"><img src="./img/logo.png" alt="" /></a> 

        <div id="nav">
            &#8226;<a href="index.html">HOME</a>&#8226;
            &#8226;<a href="archive.html">ARCHIVE</a>&#8226;
            <!--<a href="about.html">ABOUT</a> |-->
            <!--&#8226;<a href="characters.html">CHARACTERS</a>&#8226;
			&#8226;<a href="https://patreon.com/artifly">PATREON</a>&#8226;
			&#8226;<a href="https://www.patreon.com/posts/56257753">GALLERY</a>&#8226;-->	
			<!--<a href="https://artifice.cf/feed.rss">SUBSCRIBE</a> |-->
			&#8226;<a href="https://www.topwebcomics.com/vote/25875">VOTE</a>&#8226;
			&#8226;<a href="https://twitter.com/artiflycomic/">TWITTER</a>&#8226;
			&#8226;<a href="https://www.deviantart.com/pang-md">DEVIANTART</a>&#8226;
        </div>
    </header>
`);