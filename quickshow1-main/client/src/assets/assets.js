import logo from './logo.svg'
import marvelLogo from './marvelLogo.svg'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'

export const assets = {
    logo,
    marvelLogo,
    googlePlay,
    appStore,
    screenImage,
    profile
}

export const dummyTrailers = [
    {
        image: "https://img.youtube.com/vi/nb_fFj_0rq8/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=nb_fFj_0rq8&t=8s'
    },
    {
        image: "https://img.youtube.com/vi/bMgfsdYoEEo/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=bMgfsdYoEEo'
    },
    {
        image: "https://img.youtube.com/vi/v1FAaUxF0kg/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=v1FAaUxF0kg'
    },
    {
        image: "https://img.youtube.com/vi/fdWnfzsx-ks/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=fdWnfzsx-ks'
    },
]

const dummyCastsData = [
    { "name": "Milla Jovovich", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Dave Bautista", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Arly Jover", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Amara Okereke", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", },
    { "name": "Fraser James", "profile_path": "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg", },
    { "name": "Deirdre Mullins", "profile_path": "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg", },
    { "name": "Sebastian Stankiewicz", "profile_path": "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg", },
    { "name": "Tue Lunding", "profile_path": "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg", },
    { "name": "Jacek Dzisiewicz", "profile_path": "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg", },
    { "name": "Ian Hanmore", "profile_path": "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg", },
    { "name": "Eveline Hall", "profile_path": "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg", },
    { "name": "Kamila Klamut", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Caoilinn Springall", "profile_path": "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg", },
    { "name": "Jan Kowalewski", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Pawel Wysocki", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Simon Lööf", "profile_path": "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg", },
    { "name": "Tomasz Cymerman", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", }
]

export const dummyShowsData = [
    {
        "_id": "324544",
        "id": 324544,
        "title": "Thunderbolts*",
        "overview": "After finding themselves ensnared in a death trap, an unconventional team of antiheroes must go on a dangerous mission that will force them to confront the darkest corners of their pasts.",
        "poster_path": "https://image.tmdb.org/t/p/original/hqcexYHbiTBfDIdDWxrxPtVndBX.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 14, "name": "Adventure" },
            { "id": 12, "name": "Sci-fi" },
            { "id": 877, "name": "Superhero" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-08-29",
        "original_language": "hi",
        "tagline": "North ka swag, South ki grace - two worlds collide and sparks fly.",
        "vote_average": 7.2,
        "vote_count": 15000,
        "runtime": 127,
    },
    {
        "_id": "986056",
        "id": 986056,
        "title": "From the World of John Wick: Ballerina",
        "overview": "An assassin trained in the traditions of the Ruska Roma organization sets out to seek revenge after her father's death.",
        "poster_path": "https://image.tmdb.org/t/p/original/2VUmvqsHb6cEtdfscEA6fqqVzLg.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/sItIskd5xpiE64bBWYwZintkGf3.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 878, "name": "Thriller" },
            // { "id": 12, "name": "Adventure" }
        ],
        "casts": [
    { "name": "Ana de Armas", "profile_path": "https://image.tmdb.org/t/p/original/5Qne374OM0ewMM7uSN9eq9jNrWq.jpg", },
    { "name": "Keanu Reeves", "profile_path": "https://image.tmdb.org/t/p/original/8RZLOyYGsoRe9p44q3xin9QkMHv.jpg", },
    { "name": "Ian McShane", "profile_path": "https://image.tmdb.org/t/p/original/qh9RTLbnr128TZLdGuXwUH9mdBM.jpg", },
    { "name": "Anjelica Huston", "profile_path": "https://image.tmdb.org/t/p/original/6hnYeHa7Rc1w1MmQ3JsLSIb7yCX.jpg", },
    { "name": "Gabriel Byrne", "profile_path": "https://image.tmdb.org/t/p/original/9r9oDGENg92VYYFMkV4C09IUlrb.jpg", },
    { "name": "Catalina Moreno", "profile_path": "https://image.tmdb.org/t/p/original/78V4H40NXJ6dzqFZaEe1fBelw56.jpg", },
    { "name": "Ava McCarthy", "profile_path": "https://image.tmdb.org/t/p/original/9HcCr2p1ofBHPb9uuTNBAsxtj0T.jpg", },
    { "name": "Juliet Doherty", "profile_path": "https://image.tmdb.org/t/p/original/pKZjcSanPllyEiHe3rac6OfeQ9a.jpg", },
    { "name": "Jacek Dzisiewicz", "profile_path": "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg", },
    { "name": "Ian Hanmore", "profile_path": "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg", },
    
    
],
        "release_date": "2025-06-04",
        "original_language": "en",
        "tagline": "Everyone deserves a second shot.",
        "vote_average": 8.6,
        "vote_count": 23569,
        "runtime": 127,
    },
    {
        "_id": "1232546",
        "id": 1232546,
        "title": "Final Destination Bloodlines",
        "overview": "Plagued by a violent recurring nightmare, college student Stefanie heads home to track down the one person who might be able to break the cycle and save her family from the grisly demise that inevitably awaits them all.",
        "poster_path": "https://image.tmdb.org/t/p/original/uIpJPDNFoeX0TVml9smPrs9KUVx.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/uIpJPDNFoeX0TVml9smPrs9KUVx.jpg",
        "genres": [
            { "id": 28, "name": "Horror" },
            { "id": 9648, "name": "Supernatural" },
            { "id": 12, "name": "Thriller" }
        ],
        "casts": [
    { "name": "Vera Farmiga", "profile_path": "https://image.tmdb.org/t/p/original/5Vs7huBmTKftwlsc2BPAntyaQYj.jpg", },
    { "name": "Patrick Wilson", "profile_path": "https://image.tmdb.org/t/p/original/tc1ezEfIY8BhCy85svOUDtpBFPt.jpg", },
    { "name": "Mia Tomlinson", "profile_path": "https://image.tmdb.org/t/p/original/cBSSODc05j8s8omYfX0Px07AIvr.jpg", },
    { "name": "Ben Hardy", "profile_path": "https://image.tmdb.org/t/p/original/s8UEIomgY5AaEmPHkcPAScp68Fw.jpg", },
    { "name": "Fraser James", "profile_path": "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg", },
    { "name": "Deirdre Mullins", "profile_path": "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg", },
    { "name": "Sebastian Stankiewicz", "profile_path": "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg", },
    { "name": "Tue Lunding", "profile_path": "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg", },
    { "name": "Jacek Dzisiewicz", "profile_path": "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg", },
    { "name": "Ian Hanmore", "profile_path": "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg", },
    { "name": "Eveline Hall", "profile_path": "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg", },
    { "name": "Kamila Klamut", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Caoilinn Springall", "profile_path": "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg", },
    { "name": "Jan Kowalewski", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Pawel Wysocki", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Simon Lööf", "profile_path": "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg", },
    { "name": "Tomasz Cymerman", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", }
],
        "release_date": "2025-07-15",
        "original_language": "en",
        "tagline": "A darker spirit, a bloodier mission. This time he is not the same!",
        "vote_average": 6.8,
        "vote_count": 18000,
        "runtime": 110,
    },
    {
        "_id": "552524",
        "id": 552524,
        "title": "The Conjuring: Last Rites",
        "overview": "Ed and Lorraine Warren face their most haunting and dangerous case yet, as they confront sinister entities that threaten to unravel everything they hold dear.",
        "poster_path": "https://image.tmdb.org/t/p/original/uDXlaT45ptoW3RAEYTWXeUlenhA.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/fq8gLtrz1ByW3KQ2IM3RMZEIjsQ.jpg",
        "genres": [
            { "id": 10751, "name": "Horror" },
            { "id": 35, "name": "Thriller" },
            // { "id": 878, "name": "Science Fiction" }
        ],
        "casts": [
    { "name": "Vera Farmiga", "profile_path": "https://image.tmdb.org/t/p/original/5Vs7huBmTKftwlsc2BPAntyaQYj.jpg", },
    { "name": "Patrick Wilson", "profile_path": "https://image.tmdb.org/t/p/original/tc1ezEfIY8BhCy85svOUDtpBFPt.jpg", },
    { "name": "Mia Tomlinson", "profile_path": "https://image.tmdb.org/t/p/original/cBSSODc05j8s8omYfX0Px07AIvr.jpg", },
    { "name": "Ben Hardy", "profile_path": "https://image.tmdb.org/t/p/original/s8UEIomgY5AaEmPHkcPAScp68Fw.jpg",}, 
    { "name": "Rebecca Calder", "profile_path": "https://image.tmdb.org/t/p/original/A43USnarLnfWXDvWimT24cPVfEm.jpg"},
    { "name": "Elliot Cowan", "profile_path": "https://image.tmdb.org/t/p/original/zxewsfDGYuCqV7gsZjMQct6BXMJ.jpg" },
    //{ "name": "Shannon Kook", "profile_path": "https://image.tmdb.org/t/p/gBJmrtY2fBFfkQRfosLv2MNWx2J.jpg", },
    { "name": "Steve Coulter", "profile_path": "https://image.tmdb.org/t/p/original/ng01ren9pCYPIsIwRqC1xHzD5IG.jpg", },
    { "name": "Kíla Lord Cassidy", "profile_path": "https://image.tmdb.org/t/p/original/7vUPASAuPkgfXzS9DQhOo9uTLJc.jpg", },
    
    ],
        "release_date": "2025-09-05",
        "original_language": "en",
        "tagline": "Hold on to your coconuts.",
        "vote_average": 6.5,
        "vote_count": 27500,
        "runtime": 135,
    },
    {
        "_id": "668489",
        "id": 668489,
        "title": "F1: The Movie",
        "overview": "Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.",
        "poster_path": "https://image.tmdb.org/t/p/original/9PXZIUsSDh4alB80jheWX4fhZmy.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/ZtcGMc204JsNqfjS9lU6udRgpo.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 80, "name": "Drama" },
            { "id": 53, "name": "Sports" }
        ],
        "casts": [
    { "name": "Brad Pitt", "profile_path": "https://image.tmdb.org/t/p/original/9OfnD7lxgIj3BNQpJFnwxnwl6w5.jpg", },
    { "name": "Damson Idris", "profile_path": "https://image.tmdb.org/t/p/original/4jKOg4jCqNwXyrYd3coqgmCqkMy.jpg", },
    { "name": "Javier Bardem", "profile_path": "https://image.tmdb.org/t/p/original/eCBiiPvBfIY7exDQwH0vEM6Bf3c.jpg", },
    { "name": "Kerry Condon", "profile_path": "https://image.tmdb.org/t/p/original/8RO25vJxQSoNdhsVbiAHOsiGfvl.jpg", },
    { "name": "Tobias Menzies", "profile_path": "https://image.tmdb.org/t/p/original/hGhAw2obMEOu1K0ed9b3jds9thf.jpg", },
    { "name": "Kim Bodnia", "profile_path": "https://image.tmdb.org/t/p/original/koWU6vb82cuCDLeYE1erqnQ39cW.jpg", },
    { "name": "Sarah Niles", "profile_path": "https://image.tmdb.org/t/p/original/ySelhnmCCX9VnlPvceO9c5XOelK.jpg", },
    { "name": "Joseph Balderrama", "profile_path": "https://image.tmdb.org/t/p/original/8BwRFsXzWD25dPih6IePcRD3EjT.jpg", },
    { "name": "Philippine Velge", "profile_path": "https://image.tmdb.org/t/p/original/gqTkAEIlcDisOnfuyusqZtBb1IG.jpg", },
    { "name": "Will Merrick", "profile_path": "https://image.tmdb.org/t/p/original/3IVuzHqE8FIBV679o4VGrZInpsE.jpg", },
],
        "release_date": "2025-06-27",
        "original_language": "en",
        "tagline": "No law. Only disorder.",
        "vote_average": 7.818,
        "vote_count": 35960,
        "runtime": 155,
    },
    {
        "_id": "950387",
        "id": 950387,
        "title": "Jurassic World: Rebirth",
        "overview": "Five years after the events of Jurassic World Dominion, covert operations expert Zora Bennett is contracted to lead a skilled team on a top-secret mission to secure genetic material from the world's three most massive dinosaurs. When Zora's operation intersects with a civilian family whose boating expedition was capsized, they all find themselves stranded on an island where they come face-to-face with a sinister, shocking discovery that's been hidden from the world for decades.",
        "poster_path": "https://image.tmdb.org/t/p/original/1RICxzeoNCAO5NpcRMIgg1XT6fm.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/zNriRTr0kWwyaXPzdg1EIxf0BWk.jpg",
        "genres": [
            { "id": 10751, "name": "Action" },
            { "id": 35, "name": "Sci-fi" },
            { "id": 12, "name": "Thriller" },
            // { "id": 14, "name": "Fantasy" }
        ],
        "casts": [
    { "name": "Scarlett Johansson", "profile_path": "https://image.tmdb.org/t/p/original/8m21eocprLYuW0ywveIgThk6VM.jpg", },
    { "name": "Jonathan Bailey", "profile_path": "https://image.tmdb.org/t/p/original/kMtZtavkXIXYA0CnhaWqbNo6uFV.jpg", },
    { "name": "Rupert Friend", "profile_path": "https://image.tmdb.org/t/p/original/a3HeMHmlXnoRlHLX9h31ZdZgCXM.jpg", },
    { "name": "Mahershala Ali", "profile_path": "https://image.tmdb.org/t/p/original/9ZmSejm5lnUVY5IJ1iNx2QEjnHb.jpg", },
    { "name": "Manuel Garcia-Rulfo", "profile_path": "https://image.tmdb.org/t/p/original/54Rk1hKfNdNKGHQMnONDGmNtUv3.jpg", },
    { "name": "Luna Blaise", "profile_path": "https://image.tmdb.org/t/p/original/huJjq5csPlpwat1bOauptuVoJmF.jpg", },
    { "name": "David Iacono", "profile_path": "https://image.tmdb.org/t/p/original/3QTinnl70cvU3a22fLKCLk4Wpbx.jpg", },
    { "name": "Audrina Miranda", "profile_path": "https://image.tmdb.org/t/p/original/nkKWtafw6r7ekbjbHr3AmKNlybZ.jpg", },
    { "name": "Philippine Velge", "profile_path": "https://image.tmdb.org/t/p/original/gqTkAEIlcDisOnfuyusqZtBb1IG.jpg", },
    { "name": "Bechir Sylvain", "profile_path": "https://image.tmdb.org/t/p/original/wpZZVoUR9IrtsdxsX6A7Rth6AXz.jpg", },
],
        "release_date": "2025-07-01",
        "original_language": "en",
        "tagline": "Be there and be square.",
        "vote_average": 6.516,
        "vote_count": 15225,
        "runtime": 133,
    },
    {
        "_id": "575265",
        "id": 575265,
        "title": "Mission: Impossible - The Final Reckoning",
        "overview": "Ethan Hunt and team continue their search for the terrifying AI known as the Entity — which has infiltrated intelligence networks all over the globe — with the world's governments and a mysterious ghost from Hunt's past on their trail. Joined by new allies and armed with the means to shut the Entity down for good, Hunt is in a race against time to prevent the world as we know it from changing forever.",
        "poster_path": "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 53, "name": "Thriller" }
        ],
        "casts": [
    { "name": "Tom Cruise", "profile_path": "https://image.tmdb.org/t/p/original/3mShHjSQR7NXOVbdTu5rT2Qd0MN.jpg", },
    { "name": "Hayley Atwell", "profile_path": "https://image.tmdb.org/t/p/original/gmfGlGOt62TNzUyH3e7jUu6HNk5.jpg", },
    { "name": "Ving Rhames", "profile_path": "https://image.tmdb.org/t/p/original/4gpLVNKPZlVucc4fT2fSZ7DksTK.jpg", },
    { "name": "Simon Pegg", "profile_path": "https://image.tmdb.org/t/p/original/jw8bEEoTOithyNf0qxu4Zt1yaKp.jpg", },
    { "name": "Esai Morales", "profile_path": "https://image.tmdb.org/t/p/original/cNYciYzUzxraGlw0BPql1QePi5H.jpg", },
    { "name": "Pom Klementieff", "profile_path": "https://image.tmdb.org/t/p/original/hfUKAI2kXTMMWjno0i4sLPJud5N.jpg", },
    { "name": "Henry Czerny", "profile_path": "https://image.tmdb.org/t/p/original/zOWZzRmliKf9032IOOq0a3jXhVv.jpg", },
    { "name": "Holt McCallany", "profile_path": "https://image.tmdb.org/t/p/original/nHZgHsBc8P69LFTGsDSrZYt2PmS.jpg", },
    { "name": "Janet McTeer", "profile_path": "https://image.tmdb.org/t/p/original/kl8cHLOQbwLrBfMWtAwtP4hUXFk.jpg", },
    { "name": "Nick Offerman", "profile_path": "https://image.tmdb.org/t/p/original/f6z3mPVtaF40ewfdmZydprAjmYd.jpg", },
],
        "release_date": "2025-05-17",
        "original_language": "en",
        "tagline": "Our lives are the sum of our choices.",
        "vote_average": 7.042,
        "vote_count": 19885,
        "runtime": 170,
    },
    {
        "_id": "575266",
        "id": 575266,
        "title": "Avatar: Fire and Ash",
        "overview": "In the aftermath of great loss, Jake Sully and Neytiri confront a new and dangerous force on Pandora. As tensions rise, their family`s strength and unity are tested like never before.",
        "poster_path": "https://image.tmdb.org/t/p/original/cf7hE1ifY4UNbS25tGnaTyyDrI2.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/pN3eaCl3sqwrerU8UNdp40F2mK0.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 53, "name": "Fantasy" }
        ],
        "casts": [
    { "name": "Sam Worthington", "profile_path": "https://image.tmdb.org/t/p/original/mflBcox36s9ZPbsZPVOuhf6axaJ.jpg", },
    { "name": "Zoe Saldaña", "profile_path": "https://image.tmdb.org/t/p/original/vQBwmsSOAd0JDaEcZ5p43J9xzsY.jpg", },
    { "name": "Sigourney Weaver", "profile_path": "https://image.tmdb.org/t/p/original/wTSnfktNBLd6kwQxgvkqYw6vEon.jpg", },
    { "name": "Stephen Lang", "profile_path": "https://image.tmdb.org/t/p/original/hdRiM73H2mpJws559TWHCAia7qJ.jpg", },
    { "name": "Kate Winslet", "profile_path": "https://image.tmdb.org/t/p/original/cPRq7uH3PIFcHilP15BrMKunink.jpg", },
    { "name": "Oona Chaplin", "profile_path": "https://image.tmdb.org/t/p/original/tT7QQOrumeGRquaLmWNZk2DyL3Z.jpg", },
    { "name": "Cliff Curtis", "profile_path": "https://image.tmdb.org/t/p/original/3D6qz8vL6DWHAO3HeXeaSuwxq3s.jpg", },
    { "name": "Britain Dalton", "profile_path": "https://image.tmdb.org/t/p/original/asX3eJr9oHNs1ZgRYGwsZRAntqS.jpg", },
    { "name": "Trinity Bliss", "profile_path": "https://image.tmdb.org/t/p/original/a3WQPKhMHOZ5TjdnqStTfquzVB7.jpg", },
    { "name": "Jack Champion", "profile_path": "https://image.tmdb.org/t/p/original/8PXFKzhjFJ0oYP60Bj1kA44XBjY.jpg", },
    { "name": "David Thewlis", "profile_path": "https://image.tmdb.org/t/p/original/sNuYyT8ocLlQr3TdAW9CoKVbCU8.jpg", },
    { "name": "Joel David Moore", "profile_path": "https://image.tmdb.org/t/p/original/mMVhVglj6BZFuvqAXnEibce08k7.jpg", },
    { "name": "CCH Pounder", "profile_path": "https://image.tmdb.org/t/p/original/vJ5Swy2WDBC46zJrbJmwsGgTPJ2.jpg", },
    { "name": "Edie Falco", "profile_path": "https://image.tmdb.org/t/p/original/jS2Hnr5OmntpX0J7EpH70zAG0mz.jpg", },
    { "name": "Jemaine Clement", "profile_path": "https://image.tmdb.org/t/p/original/6eiNbeurpHb2fxIeT0RrJ0wRI25.jpg", },
    { "name": "Giovanni Ribisi", "profile_path": "https://image.tmdb.org/t/p/original/nABPeuB360wvWnVMqgpJHq6wHFz.jpg", },
    { "name": "Brendan Cowell", "profile_path": "https://image.tmdb.org/t/p/original/9Bjc4wYjqAJXMwmy6rKsYq2PeWV.jpg", }
],
        "release_date": "2025-12-19",
        "original_language": "en",
        "tagline": "Our lives are the sum of our choices.",
        "vote_average": 0.0,
        "vote_count": 19885,
        "runtime": 192,
    },
    
]

export const dummyDateTimeData = {
    "2025-07-24": [
        { "time": "2025-07-24T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd1" },
        { "time": "2025-07-24T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd2" },
        { "time": "2025-07-24T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd3" }
    ],
    "2025-07-25": [
        { "time": "2025-07-25T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd4" },
        { "time": "2025-07-25T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd5" },
        { "time": "2025-07-25T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd6" }
    ],
    "2025-07-26": [
        { "time": "2025-07-26T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2025-07-26T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2025-07-26T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ],
    "2025-07-27": [
        { "time": "2025-07-27T01:00:00.000Z", "showId": "68395b407f6329be2bb45bda" },
        { "time": "2025-07-27T03:00:00.000Z", "showId": "68395b407f6329be2bb45bdb" },
        { "time": "2025-07-27T05:00:00.000Z", "showId": "68395b407f6329be2bb45bdc" }
    ]
}

export const dummyDashboardData = {
    "totalBookings": 14,
    "totalRevenue": 1517,
    "totalUser": 5,
    "activeShows": [
        {
            "_id": "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0],
            "showDateTime": "2025-06-30T02:30:00.000Z",
            "showPrice": 59,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "6835238fe96d99513e4221a8",
            "movie": dummyShowsData[1],
            "showDateTime": "2025-06-30T15:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221a9",
            "movie": dummyShowsData[2],
            "showDateTime": "2025-06-30T03:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221aa",
            "movie": dummyShowsData[3],
            "showDateTime": "2025-07-15T16:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A4": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "683682072b5989c29fc6dc0d",
            "movie": dummyShowsData[4],
            "showDateTime": "2025-06-05T15:30:00.000Z",
            "showPrice": 49,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
            "__v": 0
        },
        {
            "_id": "68380044686d454f2116b39a",
            "movie": dummyShowsData[5],
            "showDateTime": "2025-06-20T16:00:00.000Z",
            "showPrice": 79,
            "occupiedSeats": {
                "A1": "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
                "A2": "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
            }
        }
    ]
}


export const dummyBookingData = [
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 98,
        "bookedSeats": ["D1", "D2"],
        "isPaid": false,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 49,
        "bookedSeats": ["A1"],
        "isPaid": true,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 147,
        "bookedSeats": ["A1", "A2","A3"],
        "isPaid": true,
    },
]