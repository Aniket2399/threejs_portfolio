// Blog posts. Newest first. Add a new object to the top of this array each day.
const posts = [
  {
    slug: "confident-is-not-competent",
    title: "Confident Is Not the Same as Competent",
    date: "2026-09-17",
    dateLabel: "September 17, 2026",
    readingTime: "4 min read",
    excerpt:
      "AI is on almost every desk now, and most people can make it sound smart. Far fewer can tell a good answer from a confident one. That gap is the real skill.",
    body: [
      "You can spot the confident ones fast. They talk about AI easily, they paste a prompt, they get back a clean paragraph or a block of code in seconds, and they nod along like they just watched magic. It reads well, it runs, it sounds sure of itself. So they ship it. The trouble is that sounding sure and being right are two different things, and the tool is very good at the first one.",
      "The numbers say this out loud. AI is everywhere now, on nearly every desk, in most people's day. Around 45 percent of working adults use it, over 60 percent of service companies have it in the building, and yet only about a third of workers feel confident using it well. Even fewer are actually good at it. The tool got very easy to start and stayed very hard to master. We have adoption a mile wide and an inch deep.",
      "Here is the thing nobody warns you about: confidence is the cheap part. The model hands you fluent, formatted, authoritative text no matter whether it is correct. It will invent a statistic in the same calm voice it uses for a real one. It will write SQL that runs perfectly and quietly answers the wrong question. Confidence is free. The model gives it away with every response. Competence is what you have to bring.",
      "Competence looks slower and quieter. It is knowing what to actually ask for, and what context the model needs before it can help. It is reading the output instead of just admiring it. It is knowing where these tools are strong, at drafting, transforming, summarizing, and explaining, and where they are weak, at facts, at math, at the specific messy details of your problem. It is checking the part that would hurt if it were wrong, and owning the result either way.",
      "I run into this every week with data and code. A model will write me a query that looks clean and returns a tidy number, and the confident move is to drop that number in a dashboard and move on. The competent move is to treat it like work from a sharp but new intern: read it, test it, check the one edge case that always breaks things, and only then trust it. The speed is a gift. The judgment is still mine.",
      "So if you want to actually get good at this, practice on things you already understand, because that is the only way you will catch the mistakes. Make the model show its reasoning. Treat every answer as a draft to verify, not a verdict to accept. Learn its habits the way you would learn a coworker's. Competence with AI is not a setting you turn on, it is a habit you build one careful check at a time.",
      "The people who win with these tools will not be the loudest in the room or the quickest to paste an answer. They will be the ones who can look at a confident, well-written response and still ask, quietly, is this actually right. That question is the whole skill. This is post two in a daily set of notes on how AI is changing the way we work, and how to use it well. Confidence is the easy half. Competence is the half worth earning.",
    ],
  },
  {
    slug: "first-we-banned-it",
    title: "First We Banned It, Then We Built With It",
    date: "2026-09-16",
    dateLabel: "September 16, 2026",
    readingTime: "3 min read",
    excerpt:
      "A short story about how AI went from a locked door to a daily collaborator, and what that arc tells us about every tool we are afraid of at first.",
    body: [
      "The first time most people met modern AI, the reaction was not wonder. It was a lock on the door. Schools blocked it. Offices put it on the banned list next to the sites nobody admits to visiting. One country pulled the plug on it entirely for a few weeks. For a technology that was supposed to change everything, the opening move was to keep it out.",
      "The fear was easy to understand. Teachers worried every essay was now a quiet collaboration with a machine. Managers worried about company secrets slipping into a chat box. Writers and artists worried they were training their own replacement. When something arrives that fast and does that much, the first instinct is to build a wall and figure out the rest later.",
      "But bans are strange things. They rarely stop people; they just move the behavior somewhere quieter. Students used it at home. Employees used it on their phones. The tool that was forbidden at nine in the morning was open in a second tab by lunch. Curiosity does not ask for permission.",
      "Then the story turned, the way it always does. The models got more careful and more useful at the same time. The question in every meeting stopped being how do we keep this out, and became how do we use this well. Policies replaced panic. People learned what to trust it with and what to check by hand. The wall came down not because the fear was wrong, but because we finally caught up to the thing we were afraid of.",
      "By the time the newer models arrived, Fable among them, the ground had already shifted. They did not walk into a world that wanted them gone. They walked into one that had learned to ask them for help. Now the same kind of tool that was banned from the classroom explains the hard chapter, drafts the first version, finds the bug, and talks through the plan. Not a threat in the corner, a collaborator at the desk.",
      "If this sounds familiar, it should. We did the same thing with the calculator, the internet, and the online encyclopedia every teacher swore you would never be allowed to cite. Each one was banned before it was embraced. The ban was never really about the tool. It was about us needing time to grow into it, to set the rules, and to remember that judgment is still the human part.",
      "That is what this series is about. Every day I want to write a little on how AI is changing the way we work and live, and how to actually use it well instead of either fearing it or handing it the wheel. This is post one. First we banned it. Then we built with it. Now the interesting work begins.",
    ],
  },
];

export { posts };
