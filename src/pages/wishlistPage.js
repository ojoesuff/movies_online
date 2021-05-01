import React, { useContext } from "react";
import TemplatePage from "../components/templatePage";
import WishlistDetail from "../components/wishListDetail";
import { WishlistsContext } from "../contexts/wishlistsContext";
import { MoviesContext } from "../contexts/moviesContext";

const movies = [
        {
            "adult": false,
            "backdrop_path": "/fev8UFNFFYsD5q7AcYS8LyTzqwl.jpg",
            "genre_ids": [
                28,
                35,
                10751,
                16,
                12
            ],
            "id": 587807,
            "original_language": "en",
            "original_title": "Tom & Jerry",
            "overview": "Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can’t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.",
            "popularity": 4099.159,
            "poster_path": "/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
            "release_date": "2021-02-11",
            "title": "Tom & Jerry",
            "video": false,
            "vote_average": 7.8,
            "vote_count": 703,
            "wishlist_ids" : [
                0,
                1
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/8tNX8s3j1O0eqilOQkuroRLyOZA.jpg",
            "genre_ids": [
                14,
                28,
                12
            ],
            "id": 458576,
            "original_language": "en",
            "original_title": "Monster Hunter",
            "overview": "A portal transports Cpt. Artemis and an elite unit of soldiers to a strange world where powerful monsters rule with deadly ferocity. Faced with relentless danger, the team encounters a mysterious hunter who may be their only hope to find a way home.",
            "popularity": 2725,
            "poster_path": "/1UCOF11QCw8kcqvce8LKOO6pimh.jpg",
            "release_date": "2020-12-03",
            "title": "Monster Hunter",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 1024,
            "wishlist_ids" : [
                0,
                1
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/7prYzufdIOy1KCTZKVWpjBFqqNr.jpg",
            "genre_ids": [
                16,
                12,
                14,
                10751,
                28,
                18
            ],
            "id": 527774,
            "original_language": "en",
            "original_title": "Raya and the Last Dragon",
            "overview": "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
            "popularity": 2440.581,
            "poster_path": "/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
            "release_date": "2021-03-03",
            "title": "Raya and the Last Dragon",
            "video": false,
            "vote_average": 8.7,
            "vote_count": 647,
            "wishlist_ids" : [
                1,
                2
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/srYya1ZlI97Au4jUYAktDe3avyA.jpg",
            "genre_ids": [
                14,
                28,
                12
            ],
            "id": 464052,
            "original_language": "en",
            "original_title": "Wonder Woman 1984",
            "overview": "A botched store robbery places Wonder Woman in a global battle against a powerful and mysterious ancient force that puts her powers in jeopardy.",
            "popularity": 1967.361,
            "poster_path": "/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
            "release_date": "2020-12-16",
            "title": "Wonder Woman 1984",
            "video": false,
            "vote_average": 6.9,
            "vote_count": 4117,
            "wishlist_ids" : [
                0,
                2
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/drulhSX7P5TQlEMQZ3JoXKSDEfz.jpg",
            "genre_ids": [
                18,
                14,
                878
            ],
            "id": 581389,
            "original_language": "ko",
            "original_title": "승리호",
            "overview": "When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that's known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.",
            "popularity": 1739.248,
            "poster_path": "/y2Yp7KC2FJSsdlRM5qkkIwQGCqU.jpg",
            "release_date": "2021-02-05",
            "title": "Space Sweepers",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 352
        },
        {
            "adult": false,
            "backdrop_path": "/7KL4yJ4JsbtS1BNRilUApLvMnc5.jpg",
            "genre_ids": [
                18,
                53
            ],
            "id": 649087,
            "original_language": "sv",
            "original_title": "Red Dot",
            "overview": "On a hiking trip to rekindle their marriage, a couple find themselves fleeing for their lives in the unforgiving wilderness from an unknown shooter.",
            "popularity": 1716.74,
            "poster_path": "/xZ2KER2gOHbuHP2GJoODuXDSZCb.jpg",
            "release_date": "2021-02-11",
            "title": "Red Dot",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 302
        },
        {
            "adult": false,
            "backdrop_path": "/vKzbIoHhk1z9DWYi8kyFe9Gg0HF.jpg",
            "genre_ids": [
                35
            ],
            "id": 484718,
            "original_language": "en",
            "original_title": "Coming 2 America",
            "overview": "Prince Akeem Joffer is set to become King of Zamunda when he discovers he has a son he never knew about in America – a street savvy Queens native named Lavelle. Honoring his royal father's dying wish to groom this son as the crown prince, Akeem and Semmi set off to America once again.",
            "popularity": 1602.496,
            "poster_path": "/nWBPLkqNApY5pgrJFMiI9joSI30.jpg",
            "release_date": "2021-03-05",
            "title": "Coming 2 America",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 501
        },
        {
            "adult": false,
            "backdrop_path": "/lOSdUkGQmbAl5JQ3QoHqBZUbZhC.jpg",
            "genre_ids": [
                53,
                28,
                878
            ],
            "id": 775996,
            "original_language": "en",
            "original_title": "Outside the Wire",
            "overview": "In the near future, a drone pilot is sent into a deadly militarized zone and must work with an android officer to locate a doomsday device.",
            "popularity": 1289.956,
            "poster_path": "/6XYLiMxHAaCsoyrVo38LBWMw2p8.jpg",
            "release_date": "2021-01-15",
            "title": "Outside the Wire",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 811
        },
        {
            "adult": false,
            "backdrop_path": "/vfuzELmhBjBTswXj2Vqxnu5ge4g.jpg",
            "genre_ids": [
                53,
                80
            ],
            "id": 602269,
            "original_language": "en",
            "original_title": "The Little Things",
            "overview": "Deputy Sheriff Joe \"Deke\" Deacon joins forces with Sgt. Jim Baxter to search for a serial killer who's terrorizing Los Angeles. As they track the culprit, Baxter is unaware that the investigation is dredging up echoes of Deke's past, uncovering disturbing secrets that could threaten more than his case.",
            "popularity": 1146.444,
            "poster_path": "/c7VlGCCgM9GZivKSzBgzuOVxQn7.jpg",
            "release_date": "2021-01-28",
            "title": "The Little Things",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 502
        },
        {
            "adult": false,
            "backdrop_path": "/6TPZSJ06OEXeelx1U1VIAt0j9Ry.jpg",
            "genre_ids": [
                28,
                80,
                53
            ],
            "id": 587996,
            "original_language": "es",
            "original_title": "Bajocero",
            "overview": "When a prisoner transfer van is attacked, the cop in charge must fight those inside and outside while dealing with a silent foe: the icy temperatures.",
            "popularity": 1034.81,
            "poster_path": "/dWSnsAGTfc8U27bWsy2RfwZs0Bs.jpg",
            "release_date": "2021-01-29",
            "title": "Below Zero",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 414
        },
        {
            "adult": false,
            "backdrop_path": "/fRrpOILyXuWaWLmqF7kXeMVwITQ.jpg",
            "genre_ids": [
                27,
                53,
                12,
                9648
            ],
            "id": 522444,
            "original_language": "en",
            "original_title": "Black Water: Abyss",
            "overview": "An adventure-loving couple convince their friends to explore a remote, uncharted cave system in the forests of Northern Australia. With a tropical storm approaching, they abseil into the mouth of the cave, but when the caves start to flood, tensions rise as oxygen levels fall and the friends find themselves trapped. Unknown to them, the storm has also brought in a pack of dangerous and hungry crocodiles.",
            "popularity": 1001.517,
            "poster_path": "/95S6PinQIvVe4uJAd82a2iGZ0rA.jpg",
            "release_date": "2020-07-09",
            "title": "Black Water: Abyss",
            "video": false,
            "vote_average": 5.1,
            "vote_count": 154
        },
        {
            "adult": false,
            "backdrop_path": "/nz8xWrTKZzA5A7FgxaM4kfAoO1W.jpg",
            "genre_ids": [
                878,
                28
            ],
            "id": 651571,
            "original_language": "en",
            "original_title": "Breach",
            "overview": "A hardened mechanic must stay awake and maintain an interstellar ark fleeing the dying planet Earth with a few thousand lucky souls on board... the last of humanity. Unfortunately, humans are not the only passengers. A shapeshifting alien creature has taken residence, its only goal is to kill as many people as possible. The crew must think quickly to stop this menace before it destroys mankind.",
            "popularity": 928.95,
            "poster_path": "/13B6onhL6FzSN2KaNeQeMML05pS.jpg",
            "release_date": "2020-12-17",
            "title": "Breach",
            "video": false,
            "vote_average": 4.5,
            "vote_count": 290
        },
        {
            "adult": false,
            "backdrop_path": "/3ombg55JQiIpoPnXYb2oYdr6DtP.jpg",
            "genre_ids": [
                878,
                28
            ],
            "id": 560144,
            "original_language": "en",
            "original_title": "Skylines",
            "overview": "When a virus threatens to turn the now earth-dwelling friendly alien hybrids against humans, Captain Rose Corley must lead a team of elite mercenaries on a mission to the alien world in order to save what's left of humanity.",
            "popularity": 864.818,
            "poster_path": "/2W4ZvACURDyhiNnSIaFPHfNbny3.jpg",
            "release_date": "2020-10-25",
            "title": "Skylines",
            "video": false,
            "vote_average": 6.1,
            "vote_count": 208
        },
        {
            "adult": false,
            "backdrop_path": "/jeAQdDX9nguP6YOX6QSWKDPkbBo.jpg",
            "genre_ids": [
                14,
                28,
                878
            ],
            "id": 590706,
            "original_language": "en",
            "original_title": "Jiu Jitsu",
            "overview": "Every six years, an ancient order of jiu-jitsu fighters joins forces to battle a vicious race of alien invaders. But when a celebrated war hero goes down in defeat, the fate of the planet and mankind hangs in the balance.",
            "popularity": 840.243,
            "poster_path": "/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg",
            "release_date": "2020-11-20",
            "title": "Jiu Jitsu",
            "video": false,
            "vote_average": 5.3,
            "vote_count": 306
        },
        {
            "adult": false,
            "backdrop_path": "/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg",
            "genre_ids": [
                10751,
                16,
                35,
                18,
                10402,
                14
            ],
            "id": 508442,
            "original_language": "en",
            "original_title": "Soul",
            "overview": "Joe Gardner is a middle school teacher with a love for jazz music. After a successful gig at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.",
            "popularity": 821.763,
            "poster_path": "/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg",
            "release_date": "2020-12-25",
            "title": "Soul",
            "video": false,
            "vote_average": 8.3,
            "vote_count": 5147
        },
        {
            "adult": false,
            "backdrop_path": "/psTz3J2QXVKTQCGrPDFuC4kAOLb.jpg",
            "genre_ids": [
                16,
                35,
                10751,
                9648,
                12
            ],
            "id": 682254,
            "original_language": "en",
            "original_title": "Scooby-Doo! The Sword and the Scoob",
            "overview": "An evil sorceress transports the gang back to the age of chivalrous knights, spell-casting wizards, and fire-breathing dragons.",
            "popularity": 814.428,
            "poster_path": "/sCoG0ibohbPrnyomtzegSuBL40L.jpg",
            "release_date": "2021-02-22",
            "title": "Scooby-Doo! The Sword and the Scoob",
            "video": false,
            "vote_average": 7.7,
            "vote_count": 20
        },
        {
            "adult": false,
            "backdrop_path": "/fX8e94MEWSuTJExndVYxKsmA4Hw.jpg",
            "genre_ids": [
                28,
                12,
                80
            ],
            "id": 604822,
            "original_language": "zh",
            "original_title": "急先锋",
            "overview": "Covert security company Vanguard is the last hope of survival for an accountant after he is targeted by the world's deadliest mercenary organization.",
            "popularity": 805.182,
            "poster_path": "/vYvppZMvXYheYTWVd8Rnn9nsmNp.jpg",
            "release_date": "2020-09-30",
            "title": "Vanguard",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 224
        },
        {
            "adult": false,
            "backdrop_path": "/yR27bZPIkNhpGEIP3jKV2EifTgo.jpg",
            "genre_ids": [
                16,
                10751
            ],
            "id": 755812,
            "original_language": "fr",
            "original_title": "Miraculous World: New York, United HeroeZ",
            "overview": "During a school field trip, Ladybug and Cat Noir meet the American superheroes, whom they have to save from an akumatised super-villain. They discover that Miraculous exist in the United States too.",
            "popularity": 803.979,
            "poster_path": "/kIHgjAkuzvKBnmdstpBOo4AfZah.jpg",
            "release_date": "2020-09-26",
            "title": "Miraculous World: New York, United HeroeZ",
            "video": false,
            "vote_average": 8.5,
            "vote_count": 449
        },
        {
            "adult": false,
            "backdrop_path": "/h9DIlghaiTxbQbt1FIwKNbQvEL.jpg",
            "genre_ids": [
                28,
                12,
                53
            ],
            "id": 581387,
            "original_language": "ko",
            "original_title": "백두산",
            "overview": "Stagnant since 1903, at an elevation of 9000', a volcano erupts on the mythical and majestic Baekdu Mountain.",
            "popularity": 760.748,
            "poster_path": "/zoeKREZ2IdAUnXISYCS0E6H5BVh.jpg",
            "release_date": "2019-12-19",
            "title": "Ashfall",
            "video": false,
            "vote_average": 6.6,
            "vote_count": 207
        },
        {
            "adult": false,
            "backdrop_path": "/cjaOSjsjV6cl3uXdJqimktT880L.jpg",
            "genre_ids": [
                10751,
                14,
                16,
                35
            ],
            "id": 529203,
            "original_language": "en",
            "original_title": "The Croods: A New Age",
            "overview": "Searching for a safer habitat, the prehistoric Crood family discovers an idyllic, walled-in paradise that meets all of its needs. Unfortunately, they must also learn to live with the Bettermans -- a family that's a couple of steps above the Croods on the evolutionary ladder. As tensions between the new neighbors start to rise, a new threat soon propels both clans on an epic adventure that forces them to embrace their differences, draw strength from one another, and survive together.",
            "popularity": 740.365,
            "poster_path": "/tbVZ3Sq88dZaCANlUcewQuHQOaE.jpg",
            "release_date": "2020-11-25",
            "title": "The Croods: A New Age",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 1663
        }
    ]

const WishlistPage = () => {

    const wishlistContext = useContext(WishlistsContext);
    const { wishlists  } = wishlistContext;
    // const moviesContext = useContext(MoviesContext)
    // const { movies } = moviesContext

    return (
        <>
            <TemplatePage>
                <WishlistDetail
                    movies={movies}
                    wishlists={wishlists}
                >

                </WishlistDetail>
            </TemplatePage>

        </>
    );
};

export default WishlistPage;