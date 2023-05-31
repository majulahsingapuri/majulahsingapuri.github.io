---
title: Prompt Engineering for Context Understanding
description: How to make ChatGPT understand you.
slug: prompt-engineering
tags: [prompt engineering, chatgpt, ai, website]
keywords: [prompt, engineering, chatgpt, ai, website, coding]
image: https://github.com/majulahsingapuri.png
hide_table_of_contents: false
draft: false
authors: bhargav
---

As we become increasingly dependant on generative AI tools, it is important for us to understand how they behave in order for us to maximise their usefulness to us.

<!-- truncate -->

## Motivation

I was listening to a [Jordan Peterson Podcast](https://youtu.be/S_E4t7tWHUY?t=3361) on Computerised Intelligence and the guest, Brian Rommele, talked about how Jordan as a clinical psychologist is better suited to be a prompt engineer then him as a computer scientist.
This is likely due to the fact that these models deal with language and Jordan's command of language as well as his ability to extract information will be far superior to someone that designed the model.

I feel that I myself would run into such issues as a tech person as we have spent most of our life Googling and the key difference between a novice and pro user of Google is that we are able to key in the key terms that we know will get us the answer rather than a question that we ask to the search engine, as backed up by [this study](<https://doi.org/10.1016/S1389-1286(00)00031-1>).
Thus being able to ask such a model to generate results specific to our use case might be difficult as someone that is trained to search efficiently.

## Creating this Site

As I was in the midst of creating this site and having idea how designing beautiful and impactful websites works, I decided to leverage the power of ChatGPT to make me sound more professional than I might actually be.
Since it is just a personal site and this is all for learning, I thought I'd give this a shot.

I remember coming across a video (sadly I can't remember the link :smiling_face_with_tear:) a while ago that emphasised the need to ask the model to ask you questions for context that it needs in order for it to understand what it is that you are looking to do.
This allows it to learn some key details that will allow the model to curate what it says to you rather than just give some generic answer that won't suit your needs.

The key things that I wanted ChatGPT to generate for me was the Hero as well as the top skills that I have in a professional voice.

## Setup Prompt

The prompt below is as close to the one in the video that I saw and it goes something like

> In a moment, I will ask you to generate a Hero title and Hero subtitle for a website that is meant to showcase my professional skills and and talents as someone that works in the technology field.
> Before we do that, I want you to ask me questions to do your best to try and understand what it is that I do and use that knowledge to generate the title and subtitle when you feel you have understood me adequately.

The prompt gives the model the overarching context (what it has to do and what is the tone of voice it must take) as well as a direction (someone in the technology field) so that it can tailor the questions that it asks.
To my surprise, that actually worked and it generated the following response

> 1. What specific area(s) of technology do you specialize in?
> 2. What is your educational background related to your field?
> 3. How many years of experience do you have in the technology industry?
> 4. Can you tell me about any notable projects or achievements you've had in your career?
> 5. Do you have any particular skills, programming languages, or software tools that you excel in?
> 6. Are there any specific industries or sectors where you have worked extensively?
> 7. What sets you apart from others in your field? Is there something unique or distinctive about your approach or expertise?
> 8. Are there any specific values or principles that guide your work in the technology field?
> 9. Is there a particular message or impression you would like your website visitors to have about your skills and talents?

## Content Generation

Upon [answering the questions above](#appendix) the model felt that it was satisfied with my answers and it had enough context to start generating what I had asked it to.
It is important to remember that the questions have to be answered in as much detail as possible.
It is ok to skip questions that are not relevant or just indicate that to the model.

This is in some part a [Rocchio Algorithm](https://en.wikipedia.org/wiki/Rocchio_algorithm) where you are nudging the model closer and closer to what you actually want it to do.
I guess understanding search engines goes some way in understanding how these models work as well.

### Hero

The following was the Hero that was generated with a handy explanation of why it did so

> Title: "Transforming Industries with Technology and Data Insights"
>
> Subtitle: "Full Stack Software Engineer | AI & Machine Learning Specialist"
>
> This title and subtitle showcase your expertise in both full stack software engineering and artificial intelligence/machine learning. It highlights your ability to leverage technology and data insights to drive transformation in industries. The subtitle emphasizes your specific skills and areas of specialization, positioning you as a professional who excels in both developing robust software solutions and applying advanced AI techniques.

### Skillset

Now that I know that the model had adequately understood the context that I had provided to it for it to be able to generate what I was looking for, I asked it to generate my top skills as well as a short description of them.
I purposely put a word limit on it so that when you the viewer looks at the site, you are able to grasp the information without being overwhelmed by a wall of text.

The following is the prompt that I asked the model

> Next, I want you to write 6 of my best skills, qualities or any other piece of information in no more than 3 words and a short description of the skill or quality in no more than 15 words in a tabular format

And the following was what was generated

| Skill/Quality  | Description                                                              |
| -------------- | ------------------------------------------------------------------------ |
| Full Stack     | Proficient in web development using React and Django.                    |
| AI & ML        | Experienced in AI and ML frameworks like PyTorch, TensorFlow, and WandB. |
| Python         | Strong command of Python programming language for versatile development. |
| Team Player    | Collaborative and effective in working within diverse teams.             |
| Data Insights  | Expertise in extracting valuable insights from complex datasets.         |
| Thought Leader | Respected for industry knowledge and sharing innovative ideas.           |

We can see that for the technical skills, it mostly just did some rewording of what I had told it but in my opinion it performed a lot better for the soft skills that it generated.
It is also neat that it generated an equal split of the two kinds of skills (hard and soft).

Of course with any output generated by such models, it is up to the human to keep what's useful and discard the rest.
If you see the [homepage](/) of my site, you will see that there have been edits made to the results generated, mostly for succinctness.

## Conclusion

This has been my first proper foray into using ChatGPT for an actual purpose.
While there are so many people out there, especially content creators that are using this as a way to speed up their efficiency or to delegate tasks, I see that there is a greater potential to be found in the model.

In his podcast, Jordan also talks about how there is a creative element to be found in these models which will require some poking and prodding by the prompter to get a decently good response.
I hope that this post has been informative in some way that will help you to leverage this tool for your own uses.

## Appendix

1. I specialise in Full Stack Software Engineering such as web development with React, backend development with Django and cloud orchestration with Terraform. I also specialise in Artificial Intelligence and Machine Learning with tools such as Pytorch, Tensorflow and WandB.
2. I just finished my bachelors in Data Science and Artificial Intelligence which is a mixed discipline degree between computing and mathematical sciences where we learn topics like data structures and algorithms as well as probability, statistics and multivariate analysis.
3. I have 2 years of internship experience in the industry
4. I have created a Industry Classifier using a Natural Language model for a venture capital company during my final year project in school that performed well and improved the company's efficiency when scouting for potential companies to invest in.
5. I excel particularly in the Python and Typescript programming languages but I know other languages and can pick up new ones fairly quickly. I am familiar with the Django backend and React Frontend tools as well as Terraform for creating and managing cloud infrastructure resources. I am also a team player that can get the job done well and on time.
6. I have mostly worked in the private equity and finance fields
7. Most of my peers either have experience only with software engineering or with data analytics but not both at the same time. I have also lead teams larger in scale and impact than most of my peers in the same age or job title bracket.
8. The main thing that guides my work is that i want to learn as much as i can from those around me and have as much impact as i can to those that benefit from my work. I strive to keep up to date with the latest developments in the field and apply as much as i can to my work
9. I want the visitors to know that i am a dependable and trustworthy individual that is skilled in his work and is a thought leader for the topics that he talks about
