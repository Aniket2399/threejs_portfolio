// Blog posts. Newest first. Add a new object to the top of this array each day.
const posts = [
  {
    slug: "taking-apart-nba-2k",
    title: "Taking Apart NBA 2K",
    date: "2026-09-24",
    dateLabel: "September 24, 2026",
    readingTime: "4 min read",
    excerpt:
      "I have been pulling apart NBA 2K to understand how it stores animation and motion capture, and what I can borrow from it for my own projects.",
    body: [
      "I have a habit I mention on my home page: I like **taking things apart** to see how they work. Lately the thing on my desk is NBA 2K. Not to play it, though I do plenty of that, but to _understand_ it. Every time a player rises for a jump shot the motion looks uncannily real, and I wanted to know where that realism actually lives inside the game.",
      "So I started digging. Underneath a basketball game like this is a mountain of animation data, and most of it comes from **motion capture**: real players wearing markers, their movement recorded frame by frame and turned into numbers a computer can replay. I wanted to see how that data is stored, how a single jump shot goes from a person in a mocap suit to a few kilobytes on disk that the engine can play back a thousand different ways.",
      "The reality of this kind of work is that nobody hands you a manual. The formats are undocumented, packed and compressed for the engine and not for a curious outsider. So it becomes **detective work**: open a file, stare at the bytes, look for patterns, guess where one animation clip ends and the next begins, and find the skeleton that all the motion hangs on. It is slow, it is frustrating, and it is honestly _some of the most fun I have had in months_.",
      "What keeps surprising me is how elegant the underlying idea is. A movement is really just a skeleton, a set of joints, and a timeline of how each joint rotates over time. Motion capture records the real thing, the game stores it as keyframes, and then it blends between them so a player can flow from a dribble to a step back to a shot without any of it looking stitched together. **Once you see motion as data, you cannot unsee it.** A jump shot becomes a small, oddly beautiful table of numbers.",
      "I am doing this because I want to **use what I learn in my own projects**. I build sports analytics tools, and understanding how motion is captured and represented changes how I think about showing it. If I can read how the pros structure and blend movement, I can borrow the ideas, the data shapes and the math, and apply them to things I am building myself, from smoother motion in a dashboard to representing real player movement in a project of my own.",
      "AI has quietly become my _co-investigator_ in this. When I hit a wall on an unfamiliar binary format, or a chunk of linear algebra I have not touched since school, I talk it through with an AI coding tool the same way I would with a sharp colleague. **It does not hand me the answer, and it should not**, but it helps me form better guesses faster and keeps me moving when I would otherwise be stuck staring at a hex dump at midnight.",
      "That is really the throughline of everything I write here. **Curiosity plus the patience to take something apart is how you learn to build.** The game just happens to be the thing I am pulling apart this week. Next week it will be something else. If you have ever wondered how the magic inside a piece of software actually works, my advice is simple: _open it up and find out_.",
    ],
  },
  {
    slug: "builders-asked-it-to-slow-down",
    title: "The People Building It Just Asked It to Slow Down",
    date: "2026-09-21",
    dateLabel: "September 21, 2026",
    readingTime: "4 min read",
    excerpt:
      "The heads of Anthropic, OpenAI, and xAI rarely agree on anything. This month they agreed on one thing: give the most powerful AI a little more time. That is worth noticing.",
    body: [
      "There is a strange new sound in the AI world this month, and it is the sound of the accelerator easing off. Dario Amodei, who runs Anthropic, has been arguing that the most powerful systems should be built more slowly. Sam Altman of OpenAI and Elon Musk of xAI, two people not known for agreeing with him or with each other, said more or less the same thing. They are calling it _pacing_: leaving more room for safety work as the models get stronger. **When the people racing each other hardest all reach for the brakes at once, it is worth sitting up.**",
      "It is easy to be cynical about this. Slowing down is convenient to ask for when you are already in the lead, and not everyone is playing along. China has pushed back on calls to ease off frontier development, reading them as a way to freeze an American advantage in place. The UN has asked governments to rein in AI agents, and the US and China have floated a hotline for AI incidents serious enough to touch national security. So the same week the builders talked about pacing, the governments started reaching for the wheel too. **Everyone suddenly wants a hand on the throttle.**",
      "But strip away the politics and there is a real signal underneath. For three years the only direction that mattered was faster. More parameters, longer context, higher benchmarks, shipped sooner. The fact that the conversation has shifted at all, from how fast _can_ we go to how fast _should_ we, is a kind of maturity the field did not have a year ago. It is the difference between a teenager with a new license and a driver who has finally noticed the road has other people on it.",
      "I think about this at a much smaller scale in my own work, and the lesson rhymes. The fastest way to ship is almost never the best way. The model writes the code in seconds, and the temptation is to merge it just as fast. The discipline is to slow down for the part that matters, to read it, test it, and understand it before it goes live. **Speed is a tool, not a virtue.** Pacing yourself is not falling behind. It is the thing that keeps you from shipping a fast mistake.",
      "That is really what pacing means for the rest of us, the people who use these tools rather than build them. It is permission to not treat every new model as a mandate to move faster and think less. The tools will keep getting quicker. _Our judgment does not have to._ You can adopt something powerful and still decide, deliberately, where you slow down: the decision you cannot easily undo, the number that will end up in front of a customer, the code that touches money.",
      "The healthiest thing about this month is not that anyone will actually pump the brakes hard. They probably will not, and the competition is too fierce for that. The healthy part is that **caution stopped being an embarrassing thing to say out loud**. For a long time worrying about AI marked you as a skeptic or a laggard. Now the fastest builders in the world are saying it plainly, and that gives everyone else room to be thoughtful without feeling left behind.",
      "So take the hint. **Move fast where a mistake is cheap, and slow down where it is not.** The people building this stuff just admitted, out loud and together, that not every second of speed is worth it. That might be the most useful thing they have shipped all year. This is post three in a daily set of notes on how AI is changing the way we work, and how to use it well.",
    ],
  },
  {
    slug: "confident-is-not-competent",
    title: "Confident Is Not the Same as Competent",
    date: "2026-09-17",
    dateLabel: "September 17, 2026",
    readingTime: "4 min read",
    excerpt:
      "AI is on almost every desk now, and most people can make it sound smart. Far fewer can tell a good answer from a confident one. That gap is the real skill.",
    body: [
      "You can spot the confident ones fast. They talk about AI easily, they paste a prompt, they get back a clean paragraph or a block of code in seconds, and they nod along like they just watched magic. It reads well, it runs, it sounds sure of itself. So they ship it. The trouble is that _sounding sure_ and _being right_ are two different things, and the tool is very good at the first one.",
      "The numbers say this out loud. AI is everywhere now, on nearly every desk, in most people's day. Around 45 percent of working adults use it, over 60 percent of service companies have it in the building, and yet only about a third of workers feel confident using it well. Even fewer are actually good at it. The tool got very easy to start and stayed very hard to master. **We have adoption a mile wide and an inch deep.**",
      "Here is the thing nobody warns you about: confidence is the cheap part. The model hands you fluent, formatted, authoritative text no matter whether it is correct. It will invent a statistic in the same calm voice it uses for a real one. It will write SQL that runs perfectly and quietly answers the wrong question. **Confidence is free.** The model gives it away with every response. **Competence is what you have to bring.**",
      "Competence looks slower and quieter. It is knowing what to actually ask for, and what context the model needs before it can help. It is _reading the output instead of just admiring it_. It is knowing where these tools are strong, at drafting, transforming, summarizing, and explaining, and where they are weak, at facts, at math, at the specific messy details of your problem. It is **checking the part that would hurt if it were wrong**, and owning the result either way.",
      "I run into this every week with data and code. A model will write me a query that looks clean and returns a tidy number, and the confident move is to drop that number in a dashboard and move on. The competent move is to treat it like work from **a sharp but new intern**: read it, test it, check the one edge case that always breaks things, and only then trust it. The speed is a gift. _The judgment is still mine._",
      "So if you want to actually get good at this, **practice on things you already understand**, because that is the only way you will catch the mistakes. Make the model show its reasoning. Treat every answer as a draft to verify, not a verdict to accept. Learn its habits the way you would learn a coworker's. Competence with AI is not a setting you turn on, it is _a habit you build one careful check at a time_.",
      "The people who win with these tools will not be the loudest in the room or the quickest to paste an answer. They will be the ones who can look at a confident, well-written response and still ask, quietly, is this actually right. **That question is the whole skill.** This is post two in a daily set of notes on how AI is changing the way we work, and how to use it well. Confidence is the easy half. Competence is the half worth earning.",
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
      "The first time most people met modern AI, the reaction was not wonder. It was a lock on the door. Schools blocked it. Offices put it on the banned list next to the sites nobody admits to visiting. One country pulled the plug on it entirely for a few weeks. For a technology that was supposed to change everything, **the opening move was to keep it out**.",
      "The fear was easy to understand. Teachers worried every essay was now a quiet collaboration with a machine. Managers worried about company secrets slipping into a chat box. Writers and artists worried they were training their own replacement. When something arrives that fast and does that much, the first instinct is to _build a wall and figure out the rest later_.",
      "But bans are strange things. They rarely stop people; they just move the behavior somewhere quieter. Students used it at home. Employees used it on their phones. The tool that was forbidden at nine in the morning was open in a second tab by lunch. **Curiosity does not ask for permission.**",
      "Then the story turned, the way it always does. The models got more careful and more useful at the same time. The question in every meeting stopped being how do we keep this out, and became **how do we use this well**. _Policies replaced panic._ People learned what to trust it with and what to check by hand. The wall came down not because the fear was wrong, but because we finally caught up to the thing we were afraid of.",
      "By the time the newer models arrived, Fable among them, the ground had already shifted. They did not walk into a world that wanted them gone. They walked into one that had learned to ask them for help. Now the same kind of tool that was banned from the classroom explains the hard chapter, drafts the first version, finds the bug, and talks through the plan. Not a threat in the corner, **a collaborator at the desk**.",
      "If this sounds familiar, it should. We did the same thing with the calculator, the internet, and the online encyclopedia every teacher swore you would never be allowed to cite. **Each one was banned before it was embraced.** The ban was never really about the tool. It was about us needing time to grow into it, to set the rules, and to remember that _judgment is still the human part_.",
      "That is what this series is about. Every day I want to write a little on how AI is changing the way we work and live, and how to actually use it well instead of either fearing it or handing it the wheel. This is post one. First we banned it. Then we built with it. **Now the interesting work begins.**",
    ],
  },
];

export { posts };
