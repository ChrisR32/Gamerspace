import React from "react";
import "./Rules.scss";
import HistoyOne from "../Images/history1.png";
import HistoryTwo from "../Images/history2.png";
import HistoryThree from "../Images/history3.png";


export default function Home() {
    return (
        <div className="top-div login-bottom">
                    <div className="rules-content">
                    <h1>About Gamerspace</h1>
         <br/>
<div className="row">
            <div className="col-9 rules-view">
           <p>Formerly known as the 'MERN-STACK-APP', Gamerspace first opened in 2020 with the largest thread capacity of any forum in Australia. Since then the forum has been divided into many separate categories. The most popular of which is 'The off-topic' category, This category is famous for its unique posts, large userbase, mesmerising content and signature meme styles. Simularly the category 'Emulation', though smaller in post count and with a tiered userbase, makes-up-ground with the large sub-categories, in-depth and insightfull post-length and usefull and very handy step-by-step diy content, making it a close second to the off-topic content.
</p>
<p>Renowned as one of the Internet's most unique and best gaming forums, Gamerspace plays host to many trolls, spam, dank-memes and a large Boomer userbaser. Though When not being used for off-topic content, the forum comes alive as an amazing function space for finding events such as network parties, console launch parties and diy restoration events.
</p>
<br/>
<div className="row">
            <div className="col-5">
<img src={HistoyOne} className="history-img" alt="Gamerspace Logo"/>
<p className="tiny-text"><strong>Above:</strong> Screenshot of the most popular thread.</p>
<br/>

            </div>
            <div className="col-2">
                <img src={HistoryTwo} className="history-img" alt="Gamerspace Logo"/>

            </div>
            <div className="col-5">
            <img src={HistoryThree} className="history-img" alt="Gamerspace Logo"/>
<p className="tiny-text"><strong>Above:</strong> Screenshot Gamespace's landing page</p>
            </div>

</div>
            <p className="tiny-text"><strong>Above:</strong> Screenshot Reponsive Design</p>

</div>
</div>
           
</div>
</div>
    )
}
