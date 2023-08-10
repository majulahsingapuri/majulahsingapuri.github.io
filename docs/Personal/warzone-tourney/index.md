---
id: warzone-tourney
title: Warzone Tourney
description: A self hosted warzone tournament during Covid
sidebar_position: 1
sidebar_label: Warzone
keywords: [full stack, ruby, bootstrap]
image: https://github.com/majulahsingapuri.png
tags: [full stack, ruby, bootstrap]
draft: false
---

## Background

### How did it come about?

I have, at this point been playing [Warzone](https://www.callofduty.com) for over 6 months and it has become one of the primary way The Boys and I bond.
We play this game not just for the entertainment value, but also to strengthen the brotherhood and get that elusive "dub".
We realised that most of the games that we were playing were pretty difficult due to the whole **Skill-Based Match Making** that Activision uses.

The game developers finally added a way for us to make custom private games but of course there are minimum player requirements for it.
Hence, there was a need for us to find more people that play the game, so that we can all have a great time and make friends at the same time.

### Ruby on Rails

I was first introduced to [Ruby on Rails](https://rubyonrails.org) back when I started my internship at Tinkertanker.
One of the onboarding intern projects was to create a simple CRUD website that keeps track of a couple of fields, which I cannot recall off the back of my head.
Obviously I didn't complete that project as I had no idea how to wrap my head around the entire process back then (and I was adamant on doing only iOS development LOL).

I realised that the simplicity of the way Ruby on Rails works makes it perfect for this project.
It is also modular like Python so I can add in packages (`Gems`) as needed to add functionality to my website.
Although I have never learnt Ruby ever, I thought how hard could it be to watch a few YouTube videos and figuring it out myself?

---

## The Journey

### Crash Course

As any Uni kid will say, "You have to watch your lectures at 2x speed" and the same holds for any YouTube video as well.
I watched [this](https://youtu.be/fmyvWz5TUWg) video one sleepless night at 5 am in the morning and surprisingly understood most of it.
It also cemented my view that it was the perfect platform to use for the application.
Most of the crash course covered things that I would need to do for my actual application, albeit a few changes here and there.

### Liftoff

The tutorial was generally easy to follow and the application was coming along well.
All the basic functions worked well and I even managed to add in addtional stylistic changes such as making the Show, Edit, Destroy options appear as a dropdown and only visible to the Team owner.
I also managed to add more [Bootstrap](https://getbootstrap.com) stylings than shown in the tutorial to achieve the exact look that I was going for.
It was simple yet elegant and it worked.

### Tragedy Strikes

The tutorial covered adding in [Devise](https://github.com/heartcombo/devise), which included the wonderful world of adding a user sign in system to the platform.
It also covered the use of [Heroku](https://heroku.com), which is a wonderful hosting platform that allows the use of free resources to host and test such a application with ease.
Or so I thought.

The first issue that I had was with Devise.
I wanted to make the user confirm their email before they can proceed to log in and create their team.
The issue with that was getting the Gmail server to stop blocking my log in requests by placing CAPTCHAs between my mail request and it actually carrying out the delivery.
I managed to overcome that issue by using [SendGrid](https://sendgrid.com), which is a free SMTP mail server that thankfully allows for verification by the use of API keys and thus eliminates the CAPTCHA issue.
The mails still show "sent via SendGrid" but who cares for a hobby application?

The second issue that I had was with Heroku constantly failing to build my `Rake` tasks for some reason.
The command worked perfectly well on my machine but on the server it was causing problems.
I also removed the Tests to make sure that it deploys but to no avail.
After a whole day of frantic Googling (and some intense Warzone matches), I found a comment on StackOverflow that said that it might be related to my Ruby version.
Lo and behold, once I updated that, it all magically worked.
Coders really are professional Googlers.

### Re-entry

After fixing all of these issues, the application was finally deployed up to Heroku and it actually did work!
We managed to get a few people to register for the tourney.
The tourney has yet to be completed at the time of writing so we shall see how it goes!
I also managed to add in a countdown timer till the start of the tourney and a Discord server as well.

## Conclusion

Despite it being such a rushed project (it only took me 3 days to do), I have to say that it turned out pretty well.
I do definitely want to properly learn the ins and outs of Rails so that going forward, I am more prepared for my Software Engineering module in my upcoming semester.
It definitely would have helped to have learnt this earlier but it is never too late to learn.
Now I hope that my groupmates for that Software Engineering project can keep up and learn the system quickly.

## Images

| ![Home Page](./Home%20Page.png) |
| :-----------------------------: |
|          **Home Page**          |

| ![Teams Page](./Teams%20Page.png) |
| :-------------------------------: |
|          **Teams Page**           |
