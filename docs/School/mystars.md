---
id: mystars
title: MySTARS CLI App
description: A CLI tool for module registration in NTU
sidebar_position: 1
sidebar_label: NTU STARS
keywords: [stars, ntu, cli, tool]
image: https://github.com/majulahsingapuri.png
slug: stars
tags: [stars, ntu, cli, tool]
draft: true
---

## Background

### The Course

This is a project that was taught in Year 2 Semester 1 when we learnt about Object Oriented Programming and of course the language of choice was **Java**.
The first half of the semester was dedicated to teaching us about basic OO design as it is a concept that is hard for most new developers to grasp.
I have had experience in such developement due to my internship at [TinkerTanker](https://tk.sg) while working on their [GetHacking iOS application](https://apps.apple.com/sg/app/get-hacking-digital-maker/id1214152554).

### Project Description

In week 8 of the semester they released the project requirements, which was to build an application that closely models our school's course registration application, [STARS](https://www.ntu.edu.sg/docs/librariesprovider121/undergraduate/current_students/starsplanner_stars_user_guide.pdf?sfvrsn=8ad88f90_2).
The only caveat is that it is supposed to be written in console, which isn't the best of environments to work with but it is a fair challenge nonetheless.

For this project, my Group members were [Timothy](https://github.com/timothytancy), [Jia Hui](https://github.com/Tigeronz), [Esther](https://github.com/esther-gan) and [Nicolette](https://github.com/nicolettehay) and since I had the most experience, I was the de-facto group leader.

## The Journey

### Preparation

Since this was the first time any of us had atttempted to make such an application, we decided to use our [seniors' code](https://github.com/tanay8star/moblima) as a reference.
This helped us to frame our problem and thus break it down into the components that we would need for the project.
Once we had a rough heading, we started to work on specific **Entities**, **Interfaces** and **Controls** that we would need.

### Collaboration

I personally am a big proponent of using `git` as it allows everyone to work on individual parts of the program and makes merging changes easy for me.
It also allows for accountability as all changes are tracked and thus it is easy to make sure that everyone is putting in the effort, in theory at least.

### Execution

Since we were short on time, we decided to split up the workload along different aspects of the program.
Jia Hui worked on the `User` classes while Timothy worked on the `Course`-related classes.
I worked on writing the information to file as well as all the numerous `Enum`s that we had.
Esther and Nicolette started off with the `View`s but needed help with that as they were not the strongest when it comes to OO developement so I ended up helping them out instead.

It was a tough **6 weeks** of intense coding and weekly project meetings despite the COVID-19 situation, where it is already difficult to have proper meetings.
We made full use of the empty classrooms in [The Hive](http://ecocampus.ntu.edu.sg/Pages/The-Hive.aspx) at NTU and their wide panoramic whiteboards for discussions.
Despite the upcoming finals, we managed to complete the program in time as well as thoroughly test it out to make sure that it does not contain errors or crash unexpectedly.
We managed to submit the program as well as the supporting report and **UML Diagrams** just in time.

### Challenges

Of course with any projects there are challenges and the biggest one for us was that the debugging of the program.
Due to its large size, it was tricky to keep track of what infomation is being stored, retrieved and manipulated, thus we would end up with unexpected behaviour at times.
It took a lot of patience and careful analysis to iron out the bugs and deploy solutions.

Another issue is that a few of my groupmates do not have the technical skills to fully understand what is going on in the project so it took some time and understanding to ensure that everyone is on the same page.
This means that there were times when progress had to be made first and the code explained later to ensure that we meet our own internal deadlines as well as the submission deadline.

Lastly, the UML Diagramming tools that we were trying to use were not very user friendly.
Despite the aesthetics, they were cumbersome to use at best so we decided to use **PlantUML** and code out the diagram.
This gave us full control of what we needed in the diagram and it was pretty easy to pick up and customise.
We managed to get it done in less than 3 hours, which is quite the feat.

## Conclusion

Despite the time crunch, we managed to pull it off as I carried the project, and in doing so the team, to the final goal.
I hope that I have managed to be a good mentor to my peers and teach them how to make such high level programs and how each component works together to ensure that the system is functional.
Going forward, I hope that my team members can use the skills that they have learnt for their future projects as well and I look forward to seeing what they can create with what they have learnt.

It has been one of the most tiring yet fulfilling projects to date and I look forward to more such projects (hopefully no more console applications) in my time to come at NTU.

## Images

| ![Add Course](../../static/img/docs/School/STARS/Add%20Course.png) |
| :----------------------------------------------------------------: |
|                           **Add Course**                           |

| ![Login Screen](../../static/img/docs/School/STARS/Login%20Screen.png) |
| :--------------------------------------------------------------------: |
|                            **Login Screen**                            |

| ![Logout Screen](../../static/img/docs/School/STARS/Logout%20Screen.png) |
| :----------------------------------------------------------------------: |
|                            **Logout Screen**                             |

| ![Print Timetable](../../static/img/docs/School/STARS/Print%20Timetable.png) |
| :--------------------------------------------------------------------------: |
|                             **Print Timetable**                              |
