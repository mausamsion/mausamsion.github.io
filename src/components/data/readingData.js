// (https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app)
// You can also use a powerful third-party library called Axios to make GET calls to a local JSON file instead of fetch API. By loading data directly 
// from a local JSON file you can save your server from tons of unnecessary calls in local development. Alternately, by saving the JSON file as a 
// regular JavaScript file and exporting the entire object globally, you can use it inside any component and save a considerable amount of development time when working with external APIs. 

/* eslint-disable no-multi-str */
import elomus from "../../media/elonmusk.jpg"
import davgog from "../../media/davidgoggins.jpg"
import whysle from "../../media/whywesleep.webp"
import trenoa from "../../media/trevornoah.jpg"
import atohab from "../../media/atomichabits.jpg"

const readingData = {
    current: [
        {
            media: elomus, 
            title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future", 
            author: "Ashlee Vance", 
            desc: "It's a wonderful time to be alive when we see new limits of \
                human beings in terms of innovation and madness \
                (in a good way 🤓). I have read till SpaceX chapter and \
                all I can say is that he is a 'superhuman'😲."
        },
        {
            media: davgog, 
            title: "Can't Hurt Me: Master Your Mind and Defy the Odds", 
            author: "", 
            desc: "Just started. I have heard a lot about David Goggins and \
                saw some of his motivaltional videos. I hope to find something \
                incredible in this book. Already like his lines - \
                <i>\"Don't stop when you're tired. Stop when you're done.\"</i>"
        },
        {
            media: whysle, 
            title: "Why We Sleep", 
            author: "Matthew Walker", 
            desc: "Really fascinating till now (chapter 3). Knowing the \
                research and science behind sleep, something that many of us \
                take for granted. Author not only discuss the importance and \
                mechanism of sleep in homo sapiens but also other species and \
                how their evolution revolving sleep happened."
        }
    ],
    previous: [
        {
            media: trenoa, 
            title: "Born a Crime: Stories From a South African Childhood", 
            author: "", 
            desc: "One of the funniest stand-up comedian I like to watch \
                (rewatch sometimes), in his book Trevor Noah takes us through his \
                struggles and stories of his life in South Africa of the apartheid \
                times. Content is so filled with humor that sometimes the \
                seriousness of the extreme racial discrimination is forgotten.\
                <br/><ul><li>I like his perspective of learning different languages \
                and accents.</li><li>He never stopped thinking about unfair \
                disadvantages he had in life and always found ways by changing \
                himself to adapt with the situations.</li></ul>"
        },
        {
            media: atohab, 
            title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones", 
            author: "James Clear", 
            desc: "I read it and ... realised I need to change myself. \
                It was a short-lived realisation although 🙈 But, changing \
                long-term habits is a long-term process too and so I am still \
                trying ✌🏽.<br/>The book nicely take through ways to make and \
                change the good, long-term and effective habits and also ways \
                to cut-out unwanted habits supported by stories and research."
        }
    ]
}

export default readingData