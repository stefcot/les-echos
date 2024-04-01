# Getting started

Hello there, you are a new recruit in our frontend team at Les Echos, and your first task is to implement our newsletter page.

You can find the design on our [figma](https://www.figma.com/file/u1hoAP9FOa1FHbBgkE346o/Entretient-Dev-2024?type=design&node-id=1-309&mode=design)

# Disclaimer

Our evaluation focuses on your problem-solving approach and mindset, observing how you tackle challenges and prioritize tasks.

During the interview, explain your decisions and how you'd approach unfinished tasks with you had more time.

It's your thought process and strategy, rather than completion, that we're interested in.

Please do code as you were already a part of our frontend team, it is essential to us.

# What is your mission ?

## Styling

Regardless of point 1 and 2, the page should be responsive.

1. Implement the styling using the ui library that you like to use.
2. Implement the styling yourself, using the library (css, css in js etc) of your choice.

:warning: We are not asking for a pixel perfect copy of the figma, we just wanted to gave you a direction on where to go, it does not have to be the exact same thing really, surprise us :warning:

## Features

The current user will be representated by 3 different mock (`USER_WITH_ONE_SUBSCRIPTION`, `USER_WITH_MULTIPLE_SUBSCRIPTION`, `USER_WITHOUT_SUBSCRIPTION`), you can find these at `src/mocks/user.ts`.

What you need to look at is the `subscriptions` key, it represent the subscriptions that the user currently have active.

:warning: The app should be working with all these 3 types of profile in mind. :warning:
:warning: You don't have to implement a complex system to handle that, a single select box or just a constant will do the job. :warning:

## Implement a list of newsletters, grouped by site.

You can find mocks of the items in `src/mocks/newsletters.ts`, you have to display the list of all the newsletters, but grouped by the `site` key.

## The CTA must be different regarding the user's status

In every newsletter object, you have a key `subscriptions`, which is an array of strings, it represents the right needed to access this newsletter.

If the field is an empty array, it means the newsletter can be accessed by everyone, otherwise, the user should have at least of the right listed in the array.

The label of the CTA (call to action) will be `S'inscrire` if the user has access to it, otherwise `S'abonner`

## Everything should be typed

Everything has to be typed with typescript, show us what you can do !

# Time

Take 4 hours maximum to do this test, we really respect your time and don't want you to spend days on this.
If you can't finish the test under 4 hours, don't worry, you can provide us a TODO file and explain to us what you would have done if you had more time, your technical choices etc.

# Final word

Good luck and again, please do this as you were already an developer in our team.
The coding style is important to us.

If you have any question feel free to contact us and we will quickly respond
