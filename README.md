# Adele's JavaScript Walkthrough

Hi Adele! Are you prepared to enter an industry level realm of JavaScript
learning? Are you – at the same time as learning JavaScript – ready to learn
practices such as **Test Driven Development** (TDD) and **Source Code Management**
(SCM)? Are you – at the same time as learning JavaScript and practices such as
TDD and SCM – ready to learn the package management tool **NPM**, write code to
run in the **browser** and **node.js** simultaneously and use a bunch of
libraries that will help you get things done quicker?

Your wonderfully zealous attempts at smaller tasks I've set tell me you are.
Your passion tells me you want to solve hard problems. Your tenacity will help
you solve them.

Do not worry if you don't understand the phrases I've used above the next time
you encounter them they will be explained and additional resources linked to.
You will be learning practices, libraries and design patterns that are used
at the forefront of our industry. Most of this is not taught in universities.
You are not expected to know any of this.

> So without further ado,
>
> Adele,
>
> A JavaScript Walkthrough,
>
> I present to You.

## Prerequisites

Adele mou, I assume you are running on OS X. You will want to install
[iterm2][install-iterm], a [command line terminal][cli]. If I tell you to type
something into the terminal or on the command line I mean you need to open
iterm2 and type something into it. The installation process happens on the
command line so once iterm2 is installed proceed to Installation.

## Installation

First things first you'll want to download this project onto your computer to
work on. It's pretty easy. Open up the terminal and type:

```
pwd
```

You must always hit enter after I tell you to type a command. This will then
be interpreted and a response given. The command `pwd` stands for present
working directory and simply tells you what directory on your computer the
terminal is executing commands in. The command line probably returned something
like `/Users/adele`. This is because you are in your home directory.

Let's prove it, in the terminal type:

```
ls
```

You should then see all your folders such as `Documents`, `Movies`, `Music`,
etc. listed. Let's created a `Work` for you to work from. On the command line:

```
mkdir Work
ls
```

You have created a directory called `Work`. You then repeated the `ls` command
that listed your directories inside your home directory but this time you
should see `Work` also listed.

Now let's move into that directory so we can install this walkthrough. On the
command line:

```
cd Work
```

You have now changed into the `Work` directory. Well done you! Such adventure
huh? I'm exicted forgive me, let's continue.

We now want to download this walkthrough from Github to a directory called
`adele` inside the `Work` directory. Github is a hosting platform for code.
You can google about and try a find a better definition but it's easier to
just understand this project you are viewing is code written by me but shared
via Github. In order to grab a copy we need to use the `git clone` command to
clone a copy to your computer. On the command line:

```
git clone https://github.com/DrPheltRight/adele.js adele
```

This will then clone down the files from Github into a directory called `adele`.
Change into this directory, on the command line:

```
cd adele
```

Okay so now we are ready to start! Well before that I want to give you a couple
of tidbits – a few words of advice.

## Advice

### If you get stuck

1. Google any terms you don't understand until you understand them
2. If that didn't work, go for a walk for 5 minutes and try again
3. If the walk didn't help [create a new issue][github-issue] and wait for an
   email from me

### Coming back to a this walkthrough

If you closed iterm2 you will need to open it back up, and navigate to the
`adele` directory using the `cd` command. Probably something like this will do:

```
cd ~/Work/adele
```

That's if you cloned the walkthrough into the `Work` directory.

### Never fear

Don't be scared, I will help you all the way to the finish line. If something
doesn't make sense, and you get to step 3 of my "If you get stuck" advice it
probably was me not explaining something properly.

At some points I might leave things up for interpretation or ask you to complete
them without much help. Before leaving you to your own devices in a particular
chapter I will have covered enough concepts for you to get it. Again I may
not have and you should [create an issue][github-issue].

## Table of Contents

So let's get started shall we? Work your way through this ToC as and when you
find time. Try and work on each chapter with a block of time. They should take
no more than a couple of hours to complete each. You should always break up your 
block however with breaks here and there. At work I break these up with coffee,
food, twitter and emails.

 - [Chapter One: Adele's first TDD Project][chapter-one]

[install-iterm]: http://www.iterm2.com/
[cli]: http://en.wikipedia.org/wiki/Command-line_interface
[github-issue]: https://github.com/DrPheltRight/adele.js/issues/new

[chapter-one]: https://github.com/DrPheltRight/adele.js/tree/develop/01-adeles-first-tdd-project

## About this project

If you aren't Adele and are looking at this project that's okay. It's open
source. It's MIT licensed. Do what you will with it. If you find it a useful
learning resource, learn from it :)

## Author

Luke Morton

## License

MIT
