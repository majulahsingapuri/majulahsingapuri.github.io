---
id: fyp
title: Final Year Project
description: This was my Final Year Project done at Vertex
sidebar_position: 1
sidebar_label: FYP
keywords: [final year project, fyp, ntu, data science, machine learning]
image: https://github.com/majulahsingapuri.png
slug: fyp
tags: [final year project, fyp, ntu, data science, machine learning]
draft: true
---

:::note

Some details have been intentionally omitted.

:::

## Background

As a part of my degree course, I had to undertake a year-long project that would constitute my honours thesis.
I was fortunate enough that I was a part of a Work-Study Degree program where I was allowed to undertake the project at a company of my choice.
The goal of the program was to allow students like myself to have relevant, long-term industry experience that would be helpful to us for our careers.

### Project Motivation

As I was interning at a Venture Capital company, the main problem that they faced was to ingest relevant data and process it so that they can make smart investment decisions based on the data gathered.
This is a multi-part problem that requires many components that build on top of other components.
Since the company was interested in categorising the companies that they are interested in by the industry that they are in, so that they can better target their investment and business development opportunities, my goal was to create some system that does this automatically.

### Goals

At the end of the day, I was to create some sort of machine learning model that would take the company's description, which gives rich information of what the company does, and classifies it into a set of fixed categories.
This would be a natural language model that would be fine tuned to relevant data and deployed to an API that makes it easy for the company to incorporate it into their products and services.

## The Journey

### Data

Luckily in this regard, the company had sourced data about over 60 million companies which included their names, descriptions and their industries.
This was the perfect starting point as this is a labelled dataset that can be used for supervised learning.
The main problem with this data was that it was so expansive, covered multiple languages and had skews in the categories that it represented.

#### Expansive

Most of the time, the problem is that we don't have enough data, but I seemed to have the opposite problem.
How can I train my model on all 60 million data points?
How long will that take?
Is the data even complete or are there missing values?
If so, how to fill them?

At the end of the day, what we want is for the model to train in the most effective way possible and learn the most that it can from the data.
Upon looking through the data, I saw that almost **half** the data had missing values and thus could be discarded 🫠.

#### Multiple Languages

This was an interesting problem as our target use case was for it to be purely in english, since the target users were all english-speaking.
However, the problem was detecting what is the language of the description.
There are models on [Huggingface](https://huggingface.co/models?search=language%20detection) that can detect languages but it only works for 20 languages that might not be enough for the variance in the dataset.

Google does provide an API that runs their own model that does the language detection but that API costs money and it would not be prudent to rack up charges without any good reason.
In the end I just decided to use models that supported a wide variety of languages to ensure that there would be no issues in the training and all the datapoints that I have available can be used.

#### Skews in Categories

This was by far the biggest issue as there is no way that there will be an equal representation of all the various industries in the dataset.
Additionally, the industries that are present might not be representative of the areas that my company invests in.
However, the goal is still to create a classifier that performs well at the task of classification rather than focus on the segments of the industry that the company focusses on.

### Model

The obvious answer at that point in the project was to use a Transformer model and fine tune it to the dataset.
In doing so, a lot of data pre-processing can be replaced by the humble `Tokenizer`.
There are also ready-made and highly performant language models that are available for everyone to use on Huggingface.
The only question was about the model size, which affects the training and inference speed, as well as the model architecture.

I chose a subset of the models and aimed to fine tune them all on a reduced dataset to see which combination of model name and size, batch size and various other hyperparameters gives the best result for the given task.

### Training

After some struggle with AWS customer support, I was able to set up a training environment with 4 NVIDIA T4 GPUs that would compete an epoch in just under... 18 hours.
Fortunately, the data was sufficiently randomised and so the training would start to converge after about 8 hours and would eventually stop at the best possible loss value.
However given the sheer number of variables in the grid search that I was conducting, I had over 60 experiments to run to try and find the optimal model.

We also came to realise that some models performed better at a subset of the labels while others performed better at another subset.
We realised that we will have to ensemble these models together in order for us to have an even more accurate model.
This posed its own challenges as the architectures, and thus the tokenisers for the model was different, and thus the same piece of text had to be tokenised multiple times and the whole model was extremely large in size.
This further slowed down training but eventually I managed to reach a model that was sufficiently accurate for our use cases.

### Deployment

The eventual goal was for this model to be deployed as an API that the company's platform can call and get results from.
However due to unforseen delays and complications, I didn't manage to deploy the model.
There was also the release of ChatGPT that seemed to be able to perform decently well that the company explored using that instead.

## Conclusion

This was definitely an interesting learning experience given that I had never previously worked with such a scale of data, such models or even the tools that I used for the project.
It was really eye opening to the entire process flow that various teams in the AI/ML pipeline go through (that I had to undertake alone) in order for the final model to be as performant as possible, since we all know that Garbage In is Garbage Out.
To be able to deliver some sort of a working product was more than rewarding enough for me and I hope to be able to use this knowledge going forward for further personal projects or for work.
