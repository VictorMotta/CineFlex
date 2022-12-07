const FILMES = [
    {
        id: 1,
        title: "Zack Snyder Justice League",
        posterURL:
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
        overview:
            "Determined to ensure Superman ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
        releaseDate: "2021-03-18T00:00:00.000Z",
    },
    {
        id: 2,
        title: "Minions: The Rise of Gru",
        posterURL:
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
        overview:
            "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
        releaseDate: "2022-06-30T00:00:00.000Z",
    },
    {
        id: 3,
        title: "Enola Holmes",
        posterURL: "https://image.tmdb.org/t/p/w500/riYInlsq2kf1AWoGm80JQW5dLKp.jpg",
        overview:
            "While searching for her missing mother, intrepid teen Enola Holmes uses her sleuthing skills to outsmart big brother Sherlock and help a runaway lord.",
        releaseDate: "2020-09-23T00:00:00.000Z",
    },
    {
        id: 4,
        title: "Mulan",
        posterURL: "https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        overview:
            "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
        releaseDate: "2020-09-04T00:00:00.000Z",
    },
    {
        id: 5,
        title: "Hard Kill",
        posterURL: "https://image.tmdb.org/t/p/w500/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg",
        overview:
            "The work of billionaire tech CEO Donovan Chalmers is so valuable that he hires mercenaries to protect it, and a terrorist group kidnaps his daughter just to get it.",
        releaseDate: "2020-08-25T00:00:00.000Z",
    },
    {
        id: 6,
        title: "Money Plane",
        posterURL: "https://image.tmdb.org/t/p/w500/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        overview:
            "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
        releaseDate: "2020-09-29T00:00:00.000Z",
    },
    {
        id: 7,
        title: "Happy Halloween Scooby-Doo!",
        posterURL: "https://image.tmdb.org/t/p/w500/5aL71e0XBgHZ6zdWcWeuEhwD2Gw.jpg",
        overview:
            "Scooby-Doo and the gang team up with their pals, Bill Nye The Science Guy and Elvira Mistress of the Dark, to solve this mystery of gigantic proportions and save Crystal Cove!",
        releaseDate: "2020-10-06T00:00:00.000Z",
    },
    {
        id: 8,
        title: "Beckman",
        posterURL: "https://image.tmdb.org/t/p/w500/z0r3YjyJSLqf6Hz0rbBAnEhNXQ7.jpg",
        overview:
            "A contract killer, becomes the reverend of a LA church, until a cult leader and his minions kidnap his daughter. Blinded by vengeance, he cuts a bloody path across the city. The only thing that can stop him is his newfound faith.",
        releaseDate: "2020-09-10T00:00:00.000Z",
    },
    {
        id: 9,
        title: "My Hero Academia: Heroes Rising",
        posterURL: "https://image.tmdb.org/t/p/w500/zGVbrulkupqpbwgiNedkJPyQum4.jpg",
        overview:
            "Class 1-A visits Nabu Island where they finally get to do some real hero work. The place is so peaceful that it's more like a vacation … until they're attacked by a villain with an unfathomable Quirk! His power is eerily familiar, and it looks like Shigaraki had a hand in the plan. But with All Might retired and citizens' lives on the line, there's no time for questions. Deku and his friends are the next generation of heroes, and they're the island's only hope.",
        releaseDate: "2019-12-20T00:00:00.000Z",
    },
    {
        id: 10,
        title: "Rogue",
        posterURL: "https://image.tmdb.org/t/p/w500/uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
        overview:
            "Battle-hardened O’Hara leads a lively mercenary team of soldiers on a daring mission: rescue hostages from their captors in remote Africa. But as the mission goes awry and the team is stranded, O’Hara’s squad must face a bloody, brutal encounter with a gang of rebels.",
        releaseDate: "2020-08-20T00:00:00.000Z",
    },
    {
        id: 11,
        title: "American Pie Presents: Girls Rules",
        posterURL: "https://image.tmdb.org/t/p/w500/xqvX5A24dbIWaeYsMTxxKX5qOfz.jpg",
        overview:
            "It's Senior year at East Great Falls. Annie, Kayla, Michelle, and Stephanie decide to harness their girl power and band together to get what they want their last year of high school.",
        releaseDate: "2020-10-06T00:00:00.000Z",
    },
    {
        id: 12,
        title: "Santana",
        posterURL: "https://image.tmdb.org/t/p/w500/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg",
        overview:
            "Two brothers — one a narcotics agent and the other a general — finally discover the identity of the drug lord who murdered their parents decades ago. They may kill each other before capturing the bad guys.",
        releaseDate: "2020-08-28T00:00:00.000Z",
    },
    {
        id: 13,
        title: "Ava",
        posterURL: "https://image.tmdb.org/t/p/w500/qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg",
        overview:
            "A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.",
        releaseDate: "2020-07-02T00:00:00.000Z",
    },
    {
        id: 14,
        title: "Peninsula",
        posterURL: "https://image.tmdb.org/t/p/w500/sy6DvAu72kjoseZEjocnm2ZZ09i.jpg",
        overview:
            "A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.",
        releaseDate: "2020-07-15T00:00:00.000Z",
    },
    {
        id: 15,
        title: "Unknown Origins",
        posterURL: "https://image.tmdb.org/t/p/w500/vJHSParlylICnI7DuuI54nfTPRR.jpg",
        overview:
            "In Madrid, Spain, a mysterious serial killer ruthlessly murders his victims by recreating the first appearance of several comic book superheroes. Cosme, a veteran police inspector who is about to retire, works on the case along with the tormented inspector David Valentín and his own son Jorge Elías, a nerdy young man who owns a comic book store.",
        releaseDate: "2020-08-28T00:00:00.000Z",
    },
    {
        id: 16,
        title: "Artemis Fowl",
        posterURL: "https://image.tmdb.org/t/p/w500/tI8ocADh22GtQFV28vGHaBZVb0U.jpg",
        overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        releaseDate: "2020-06-12T00:00:00.000Z",
    },
    {
        id: 17,
        title: "Archive",
        posterURL: "https://image.tmdb.org/t/p/w500/eDnHgozW8vfOaLHzfpHluf1GZCW.jpg",
        overview:
            "2038: George Almore is working on a true human-equivalent AI, and his latest prototype is almost ready. This sensitive phase is also the riskiest as he has a goal that must be hidden at all costs—being reunited with his dead wife.",
        releaseDate: "2020-08-13T00:00:00.000Z",
    },
    {
        id: 18,
        title: "One Night in Bangkok",
        posterURL: "https://image.tmdb.org/t/p/w500/i4kPwXPlM1iy8Jf3S1uuLuwqQAV.jpg",
        overview:
            "A hit man named Kai flies into Bangkok, gets a gun, and orders a cab. He offers a professional female driver big money to be his all-night driver. But when she realizes Kai is committing brutal murders at each stop, it's too late to walk away. Meanwhile, an offbeat police detective races to decode the string of slayings before more blood is spilled.",
        releaseDate: "2020-08-25T00:00:00.000Z",
    },
    {
        id: 19,
        title: "Project Power",
        posterURL: "https://image.tmdb.org/t/p/w500/TnOeov4w0sTtV2gqICqIxVi74V.jpg",
        overview:
            "An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers.",
        releaseDate: "2020-08-14T00:00:00.000Z",
    },
    {
        id: 20,
        title: "We Bare Bears: The Movie",
        posterURL: "https://image.tmdb.org/t/p/w500/kPzcvxBwt7kEISB9O4jJEuBn72t.jpg",
        overview:
            "When Grizz, Panda, and Ice Bear's love of food trucks and viral videos went out of hand, it catches the attention of Agent Trout from the National Wildlife Control, who pledges to restore the “natural order” by separating them forever. Chased away from their home, the Bears embark on an epic road trip as they seek refuge in Canada, with their journey being filled with new friends, perilous obstacles, and huge parties. The risky journey also forces the Bears to face how they first met and became brothers, in order to keep their family bond from splitting apart.",
        releaseDate: "2020-06-30T00:00:00.000Z",
    },
];

export default FILMES;
